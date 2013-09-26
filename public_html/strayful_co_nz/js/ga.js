$(document).ready(function(){

	/* Fade in / out of Page Display */

    $('#content-wrapper').delay(500).fadeIn(1000);

      $('.transition').click(function(event) {
          event.preventDefault();
          newLocation = this.href;
          $('#content-wrapper').fadeOut(1000, function () {
              window.location = newLocation;
          });
    });

    /* Navigation */

	big_menu = $('.menu-bar');
	small_menu = $('.menu-open');
	gallery_menu = $('.gallery-options');

	small_menu.hover(function(){
			$(this).animate({'opacity':'.6'}, 500).css({'cursor':'pointer'})
		}, function(){
			$(this).animate({'opacity':'1'}, 500).css({'cursor':'default'})
		});

	$('.logo').click(function(){
		classSwitch(big_menu, small_menu, 'opened', 'closed');
		//if () {
			galleryMenu('hidden', 'shown');
		//}
		changeOpacity(0);
	});

	small_menu.click(function(){
		classSwitch(small_menu, big_menu, 'opened', 'closed');
		//if () {
			galleryMenu('shown', 'hidden');
		//}
		changeOpacity(.6);
	});

	function classSwitch(object1, object2, class1, class2) {
		object1.switchClass(class1, class2, 700);
		object2.switchClass(class2, class1, 700);
	}

	function changeOpacity(change) {
		$('.left-line').animate({'opacity': change}, 700);
		$('.right-line').animate({'opacity': change}, 700);
	}

	function galleryMenu(class1, class2) {
		gallery_menu.switchClass(class1, class2, 1000);
	}

	/* Gallery */

	$('.directorySlider').directorySlider();

	$( window ).resize(function() {
		$('directorySlider').resizeWidths();
	});

	/* Values */

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