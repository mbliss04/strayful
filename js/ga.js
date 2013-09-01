$(document).ready(function(){

	/* Fade in / out of Page Display */

	$("body").css("display", "none");
	
	$("body").fadeIn(2000);

	$("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);      
    });

    function redirectPage() {
        window.location = linkLocation;
    }

    /* Navigation */

	big_menu = $('.menu-bar');
	small_menu = $('.menu-open');

	small_menu.hover(function(){
			$(this).animate({'opacity':'.6'}, 500).css({'cursor':'pointer'})
		}, function(){
			$(this).animate({'opacity':'1'}, 500).css({'cursor':'default'})
		});

	$('.logo').click(function(){
		classSwitch(big_menu, small_menu, 'opened', 'closed');
		changeOpacity(0);
	});

	small_menu.click(function(){
		classSwitch(small_menu, big_menu, 'opened', 'closed');
		changeOpacity(.6);
	});

	function classSwitch(object1, object2, class1, class2) {
		object1.switchClass(class1, class2, 500);
		object2.switchClass(class2, class1, 500);
	}

	function changeOpacity(change) {
		$('.left-line').animate({'opacity': change}, 1000);
		$('.right-line').animate({'opacity': change}, 1000);
	}

	/* Gallery */

	galimages = $('ul.videos');

});