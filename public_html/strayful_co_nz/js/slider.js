$(document).ready(function(){

	// Global Variables
	var rightbtn = $('.rightbtn');
	var leftbtn = $('.leftbtn');
	var gallery = $('.gallery-wrapper');
  	var slides = new Array();

    //when user clicks the image for sliding right  
    rightbtn.click(function(){
  		slides = $('.gallery-li').get();
  		$('.gallery-li').get(0).remove();
  		$('.gallery-ul').append(slides[0]);
 	});  
  
    //when user clicks the image for sliding left  
    leftbtn.click(function(){
  		slides = $('.gallery-li').get();
  		var last_slide = slides.length - 1;
  		$('.gallery-li').get(last_slide).remove();
  		$('.gallery-ul').prepend(slides[last_slide]);
    });

});
