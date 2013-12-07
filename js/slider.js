$(document).ready(function(){

	// Global Variables
	var rightbtn = $('.rightbtn');
	var leftbtn = $('.leftbtn');
	var gallery = $('.gallery-wrapper');
	var numSlides = 5;
  var slides = new Array();
  var toSwitch = new Array();

  //when user clicks the image for sliding right  
  rightbtn.click(function(){
    	// get and remove first five li
  		for(var i = 0; i < numSlides; i++) {
  			toSwitch[i] = $('.gallery-li').get(0);
  			$('.gallery-li').get(0).remove();
  		}
  		// add to the end of the list
  		for (var i = 0; i < 5; i++) {
  			$('.gallery-ul').append(toSwitch[i]);
  		}
 	});  
  
    //when user clicks the image for sliding left  
    leftbtn.click(function(){
    	// make array from all li and get last slide index
    	slides = $('.gallery-li').get();
    	var last_slide = slides.length - 1;
    	// get and remove the last five li
    	for (var i = 0; i < numSlides; i++) {
    		toSwitch[i] = $('.gallery-li').get(last_slide);
  			$('.gallery-li').get(last_slide).remove();
  			last_slide--;
    	}
    	// add to the front of the list
    	for (var i = 0; i < numSlides; i++) {
  			$('.gallery-ul').prepend(toSwitch[i]);
  		}
    });

});
