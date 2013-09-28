$(document).ready(function(){
	$('.directorySlider').directorySlider();

	/* Resize widths on window change */
	$( window ).resize(function() {
		$('directorySlider').resizeWidths();
		$('gallery-options li').css({'margin-right':+-1});
	});



	/* Arrows for gallery scroll */

	timer = setTimeout("$('.scroll').fadeOut(1500);", 1200);

	$('.scroll').mouseover(function(){
		clearTimeout(timer);
	});
});