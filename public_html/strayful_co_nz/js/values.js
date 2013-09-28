$(document).ready(function(){
	$('.element_sprite').hover(function(){
		value = -160;
		shiftElement($(this), value);
		element_id = $(this).attr("class").split(' ')[0];
		information(element_id, "slow", 1);
	}, function(){
		var value = 160;
		shiftElement($(this), value);
		information($(this), "fast", 0);
	});

	function shiftElement(element, value) {
		backgroundPos = element.css('backgroundPosition').split(" ");
		xval = (backgroundPos[0].split('px'));
		newval = parseInt(xval[0]) + value;
		newpos = newval + 'px ' + backgroundPos[1];
		console.log(newpos);
		element.css({'background-position':newpos});
	}

	function information(id, easing, option) {
		$(".diamond").fadeTo(easing, option);
		if (element_id == "fire") {
			$(".description").html('<h2>Fire</h2><div class="info"><p>We feel that everyone has a secret passion ruling their heart, a spark kindling their bones, and a little bit of curiosity that wants to light the match.</p></div>').fadeTo(easing, option);
		}
		if (element_id == "air") {
			$(".description").html('<h2>Air</h2><div class="info"><p>The oxygen </p></div>').fadeTo(easing, option);
		}
		if (element_id == "earth") {
			$(".description").html('<h2>Earth</h2><div class="info"><p></p></div>').fadeTo(easing, option);
		}
		if (element_id == "water") {
			$(".description").html('<h2>Water</h2><div class="info"><p></p></div>').fadeTo(easing, option);
		}
	}
});