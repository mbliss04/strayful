$(document).ready(function(){

	$.ajax({
	    url: 'images.php', // assume that you php file name is images.php [change as you need]
	    dataType: 'json', // as you send request to same domain, so you don't need jsonp
	}).done(function (data) {
	    var gallery = $('#gallery'),
	        url = '';
	    // data.images contain the name of images as array

	    $.each(data.image, function (index, photo) {
	        url = '/images/photo/' + photo; // photo will contain only image name
	        $('<a rel="gallery"/>')
	            .append($('<img>').prop('src', url + '_s.jpg'))
	            .prop('href', url + '_b.jpg')
	            .prop('title', photo.title)
	            .appendTo(gallery);
	    });
	});


});