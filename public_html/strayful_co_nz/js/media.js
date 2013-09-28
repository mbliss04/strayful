$(document).ready(function(){
	$('.directorySlider').directorySlider();

	$( window ).resize(function() {
		$('directorySlider').resizeWidths();
	});

	timer = setTimeout("$('.scroll').fadeOut(1500);", 1200);

	$('.scroll').mouseover(function(){
		clearTimeout(timer);
	});
});