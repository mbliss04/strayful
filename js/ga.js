$(document).ready(function(){

	// GLOBAL VARIABLES

	var page_title = $(document).find("title").text();
	var content = page_title.split(" ");
	var change_top = 90;
	var gallery_cut_off = 780;

	/* -------------------------------------------------

	Fade in / out of Page Display 

	-------------------------------------------------*/

    $('#content-wrapper').delay(500).fadeIn(1000);

      $('.transition').click(function(event) {
          event.preventDefault();
          newLocation = this.href;
          $('#content-wrapper').fadeOut(1000, function () {
              window.location = newLocation;
          });
    });

    /* ----------------------------------------------

    Navigation Event Handlers

    -------------------------------------------------*/

	big_menu = $('.menu-bar');
	small_menu = $('.menu-open');
	gallery_menu = $('.gallery-options');

	// Big menu event handler
	$('.logo').click(function(){
		classSwitch(big_menu, small_menu, 'opened', 'closed');
		galleryMenu('hidden', 'shown', 600);
		changeLineOpacity(0);
		moveContainer("up");
	});

	// Small menu event handler
	small_menu.click(function(){
		classSwitch(small_menu, big_menu, 'opened', 'closed');
		galleryMenu('shown', 'hidden', 500);
		changeLineOpacity(.6);
		moveContainer("down");
	});

	// Change css of the small menu on hover
	small_menu.hover(function(){
			$(this).animate({'opacity':'.6'}, 500).css({'cursor':'pointer'});
		}, function(){
			$(this).animate({'opacity':'1'}, 500).css({'cursor':'default'});
		}
	);

	// Change properties of two parallel classes
	var classSwitch = function(object1, object2, class1, class2) {
		object1.switchClass(class1, class2, 700);
		object2.switchClass(class2, class1, 700);
	}

	// Change the line opacity
	var changeLineOpacity = function(change) {
		$('.left-line').animate({'opacity': change}, 700);
		$('.right-line').animate({'opacity': change}, 700);
	}

	// Change the properties of the gallery menu
	var galleryMenu = function(class1, class2, index) {
		gallery_menu.switchClass(class1, class2, 1000);
		gallery_menu.css({'z-index':index});
	}

	/*-------------------------------------------------

	If it is either the media or gallery page, 
	change navigation automatically 
	
	-------------------------------------------------*/

	if (content[2][0] == "M" || content[2][0] == "G") {
		classSwitch(big_menu, small_menu, 'opened', 'closed');
		galleryMenu('hidden', 'shown', 600);
	}

	/*------------------------------------------------- 

	Change gallery bar margins based on window width 

	-------------------------------------------------*/

	checkIfResize(); // Run once on page load

	$(window).resize(function(){ // Run on page resize
		checkIfResize();
		adjustGallery();
	});

	function adjustGallery() {
		if ($('#collection').css('display') == 'block') {
			console.log();
			// hide the original gallery
			$('.gallery-wrapper').css({'display':'none'});
			// resize the width of the work container
			$('#collection').css({'height':$(window).height});
			$('#work').css({'height':$(window).height});
		}
		else {
			// hide the work gallery
			$('#collection').css({'display':'none'});
			//change the gallery classification size on resize
			$('.gallery-wrapper').css({'height':$(window).height()});
			$('.gallery-li img').css({'max-height':$(window).height()});
		}
	}

	function checkIfResize() { 
		if ($(window).width() > gallery_cut_off) {
			getNewGalleryDims();
		}
		else {
			$('.norm').css({'margin':0});
			$('.middle').css({'margin':0});
		}
	}

	function getNewGalleryDims() {
		var new_margin = $(window).width() * .04;
		$('.gallery-options .right .middle').css({'margin-left':'110px'});
		$('.gallery-options .left .middle').css({'margin-right':'110px'});
		$(".gallery-options .right .norm").css({'margin-left':new_margin});
		$(".gallery-options .left .norm").css({'margin-right':new_margin});
	}

	/*------------------------------------------------- 

	Scroll to top of collections page and hide other stuff

	-------------------------------------------------*/

	$("a[href='#classification']").click(function() {
		$('#classification').css({'display':'block'});
		$('#returnTop').animate({
			opacity: 0
		}, 600);
  		$("html, body").animate({ scrollTop: 0 }, "slow");
  			return false;
	});

	/*------------------------------------------------- 

	On hover of gallery items, show information

	-------------------------------------------------*/

	// hover over gallery classifications
	$(document).delegate(".gallery-li", "mouseenter", function() {
		curID = $(this)[0].id;
		$("#" + curID).children('a').children('span').fadeIn(200);
	});

	// leave hover of classification section
	$(document).delegate(".gallery-li", "mouseleave", function() {
		curID = $(this)[0].id;
		$("#" + curID).children('a').children('span').fadeOut(200);
	});

	// IF WANT TO ADD HOVER OVER WORK IMAGES

	// hover over work images
	$(document).delegate(".work-img", "mouseenter", function() {
		curID = $(this)[0].id;
		$("#" + curID).children('span').fadeIn(200);
	});

	// hover leave work images
	$(document).delegate(".work-img", "mouseleave", function() {
		curID = $(this)[0].id;
		$("#" + curID).children('span').fadeOut(200);
	});

});