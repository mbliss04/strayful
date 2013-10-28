<?php
// Create connection
$db_host = 'localhost';
$db_username = 'strayful_admin';
$db_pass = 'kawasaki10';
$db_name = 'strayful_media';

$con = mysqli_connect($db_host,$db_username, $db_pass);

// Check connection
if (mysqli_connect_errno($con))
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

$result = mysql_query("SHOW DATABASES");        
while ($row = mysql_fetch_array($result)) {        
    echo $row[0]."<br>";        
}

/*
// Connect to a database
$db_selected = mysql_select_db($db_name, $con);
if (!$db_selected) {
  die("can't connect : " . mysql_error());
}*/

  /*
  $result = mysql_query("SELECT * FROM Videos");

  while($row = mysql_fetch_array($result))
    {
      echo $row['title'];
      
    echo "<div id='". $row['id'] . "' class='post post-'". $row['id']. "'>";
    echo "<div class='post-media'><iframe src='" . $row['src'] . "' frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
    echo "<div class='post-info'><div class='post-title'><h1 class='entry-title'>";
    echo "<a href='". $row['src']. "'>". $row['title']. "</a></h1></div>";
    echo "<div class='post-content'>". $row['description']. "</div><hr>";
    echo "<div class='post-footer'><ul class='share'><li>Share:</li>";
    echo "<li><a href='#' onclick='window.open(
              'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href), 
              'facebook-share-dialog', 
              'width=626,height=436'); 
               return false;'><img src='images/facebooksmall.png'/></a></li>";
    echo "<li><a href='https://twitter.com/intent/tweet?url='"
              . $row['src']
              . "&related=Strayful,twitterapi'"
              . $row['']. "'><img src='images/twittersmall.png'/></a></li>";
    echo "<li><a href='mailto:?subject=Video from Stray&amp;body=Not gonna lie, pretty cool video: ". $row['link']. "'><img src='images/emailsmall.png'/></a></li>";
    echo "</ul></div></div></div>";
    };
    */

    // Close the connection
    mysqli_close($con);

?>