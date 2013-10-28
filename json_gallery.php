<?php 

	header("Content-type: application/json");
	//$folder = $_POST("folder");
	$folder = "images/gallery";
	$jsonData = "{";
	$dir = $folder."/";

	$dirHandle = opendir($dir);

	$i = 0;
	while ($file = readdir($dirHandle)) {
		if (!(is_dir($file)) && strpos($file, '.jpg') && $file != 'filler.jpg') {
			$i++;
			$src = "$dir$file";
			list($category, $number) = split('[_]', $file);
			$jsonData .= '"img'.$i.'":{ "num":"'.$i.'","src":"'.$src.'", "url":"#", "name":"'.$file.'", "category":"'.$category.'" },';
		}
	}

	closedir($dirHandle);
	$jsonData = chop($jsonData, ",");
	$jsonData .= "}";
	echo $jsonData;
?>