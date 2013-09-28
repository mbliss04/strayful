/**
 * directorySlider v0.9 - Loads all images in a specified directory and creates a slide show
 * Author: Justin W. Hall
 * http://www.justinwhall.com/directory-jquery-slider/
 *
 * License: GPL v3
 */

(function($){

   var directorySlider = function(element, options)
   {
       // set image width based on window
       var width = $(window).width();
       var element_width = (.2 * width);

       var elem = $(element),
           obj = this,
           elemId = elem[0].id;

       // Merge config settings
       var config = $.extend({
           animation: 'slide',
           filebase: 'gallery_',
           extension: 'jpg',
           speed: 1000,
           timeout: 4000,
           directory: 'images/gallery/',
           numslides: 5,
           height: 700,
           width: element_width
       }, options || {});

       // set slideshow dimensions if set
       if (config.height) {
        $(elem).css('height', config.height);
       }
       if (config.width) {
        $(elem).css('width', config.width);
       }

       $(elem).css('overflow', 'hidden');

       // Get slides
       var slides = [],
       slideNumber = 1;

       var url = '#';

       while(slideNumber <= config.numslides){
         slides.push('<div class="centered"><a href="#"><img id="gallery_' + slideNumber + '" src="' + config.directory + config.filebase + slideNumber + '.' + config.extension + '" /></a></div>');
         slideNumber++;
       }

       // append slideshow
       // apply slide wrap 1st
       var slideWrap = $('<div class="' + elemId + '-slide-wrap" ></div>');
           slideWrap.appendTo(elem);

        // give centered class appropriate width
        $('.centered').css({'width': element_width });

        // append slide and position absolutley
       $.each(slides, function(index, val) {
         $(val).css({
            position: 'fixed',
            top: 0,
            left: 0 + (element_width*index)
         }).appendTo(slideWrap);
       });
   };

  $.fn.resizeWidths = function() {
        var width = $(window).width();
        var element_width = (.2 * width);
        $(".directorySlider img").each(function(index){
            $(this).css({
              position: 'fixed',
              top: 0,
              left: 0 + (element_width*index)
            });
        });
   };

   $.fn.directorySlider = function(options)
   {
       return this.each(function()
       {
           var element = $(this);

           // Return early if this element already has a plugin instance
           if (element.data('directoryslider')) return;

           // pass options to plugin constructor
           var directoryslider = new directorySlider(this, options);

           // Store plugin object in this element's data
           element.data('directoryslider', directoryslider);

       });
   };
})(jQuery);