<?php
    $dir_handle = ‘images/gallery/’;
    // Loop through the files
    
    foreach(array_diff(scandir($dir_handle), array(‘.’, ‘..’)) as $file) {
    
        echo ‘<h2>’.str_replace(‘.jpg’, ‘ ‘, str_replace(‘name’, ‘Name’, $file)).‘</h2>’;
        echo ‘<img class="class_name" src="images/gallery/’.$file.‘" alt="’.str_replace(‘name’, ‘Clean Name’, $file).‘" title="’.str_replace(‘name’, ‘Clean Name’, $file).‘" /><br/>’;
    }
?>