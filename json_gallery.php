<?php 

	header("Content-type: application/json");
	//$folder = $_POST("folder");
	$folder = "images/gallery";
	$jsonData = "{";
	$dir = $folder."/";

	$dirHandle = opendir($dir);

	$i = 0;
	while ($file = readdir($dirHandle)) {
		if (!(is_dir($file)) && 
			(strpos($file, '.jpg') || strpos($file, '.jpeg') ||
			 strpos($file, '.png') || strpos($file, '.PNG') ||
			 strpos($file, '.JPG') || strpos($file, '.JPEG'))) {
			$i++;
			$src = "$dir$file";
			list($category, $classid, $title, $imgtype) = split('[_.]', $file);
			//$classid = str_replace(' ', '', $classid);
			$jsonData .= '"img'.$i.'":{ "num":"'.$i.'","src":"'.$src.'", "url":"#", "name":"'.$file.'", "category":"'.$category.'", "classid":"'.$classid.'", "title":"'.$title.'"},';
		}
	}

	closedir($dirHandle);
	$jsonData = chop($jsonData, ",");
	$jsonData .= "}";
	echo $jsonData;
?>