$(document).ready(function(){

	// Variables
	var media_size = 480;
	var hidden = false;

	/* -----------------------------------

	On hover call element to be shifted and 
	display info about specific element

	-------------------------------------*/

	$('.element_sprite').hover(function(){
		var value = -160;
		shiftElement($(this), value);
		element_id = $(this).attr("class").split(' ')[0];
		if ($(window).width() > media_size) {
			information(element_id, "slow", 1);
		}
	}, function(){
		var value = 160;
		shiftElement($(this), value);
		if ($(window).width() > media_size) {
			information($(this), "fast", 0);
		}
	});

	/* -----------------------------------

	Adjust elements for smaller screens
	on resize of the screen

	-------------------------------------*/

	checkIfResize(); // Run once on page load

	$(window).resize(function(){ // Run on page resize
		checkIfResize();
	});

	function checkIfResize(){ 
		// if viewing mobile size
		if ($(window).width() < media_size) {
			// if click on element, move off page and reveal info
			$('.element_sprite').click(function(){
				hidden = true;
				moveElements(hidden);
				element_id = $(this).attr("class").split(' ')[0];
				information(element_id, "slow", 1);
			});
			// if click description, hide description and reveal elements
			$('.description').click(function(){
				information($(this), "fast", 0);
				moveElements(!hidden);
				hidden = false;
			});
		}
		// otherwise if the screen is bigger and 
		//the elements are hidden, reveal them
		else if ($(window).width() > media_size && hidden) {
			moveElements(!hidden);
		}
	}

	// Move element position over

	function shiftElement(element, value) {
		backgroundPos = element.css('backgroundPosition').split(" ");
		xval = (backgroundPos[0].split('px'));
		newval = parseInt(xval[0]) + value;
		newpos = newval + 'px ' + backgroundPos[1];
		element.css({'background-position':newpos});
	}

	// Display info about values 

	function information(id, easing, option) {
		//$(".diamond").removeClass('hidden');
		$(".diamond").fadeTo(easing, option);
		if (element_id == "fire") {
			$(".description").html('<h2>Fire</h2><div class="info"><p>There lies a secret passion in all of us: an ember smouldering in our bones waiting to be set alight. Stray is the stoker, poking and prodding to bring that creativity to a blaze with a bold and lively style.</p></div>').fadeTo(easing, option);
		}
		if (element_id == "air") {
			$(".description").html('<h2>Air</h2><div class="info"><p>The sky is our limit, freedom, adventure, and discovery: our life’s blood. To us there is no fear of the unknown; we’ll try anything once or thrice. Stray isn’t fixed to any one genre of design; it is hindered only by the imagination.</p></div>').fadeTo(easing, option);
		}
		if (element_id == "earth") {
			$(".description").html('<h2>Earth</h2><div class="info"><p>In every being there is a longing for connection and unity, a need to help those that surround us. We’re going back to our roots making sure everything we make is a local, handcrafted affair. After all, home is where the heart is.</p></div>').fadeTo(easing, option);
		}
		if (element_id == "water") {
			$(".description").html('<h2>Water</h2><div class="info"><p>The river of change is constantly flowing, and we sail it with gusto. We believe that green design shouldn’t be a fad but a design standard. In the spirit of kiwi ingenuity, Stray sees gold where others see waste.</p></div>').fadeTo(easing, option);
		}
	}

	// Spread elements off page on click

	function moveElements(spread) {
		if (spread) {
			$('.element_sprite').fadeTo("slow", 0);
		}
		if (!spread) {
			$('.element_sprite').fadeTo("slow", 1);
		}
	}

});