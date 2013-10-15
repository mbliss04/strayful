$(document).ready(function(){

  var firsttime = true;
  var newWidth;
  var media_size = 780;

  // Percentages to multiply by
  var reg_percent = .7;
  var leftcol_percent = .55;
  var mobile_percent = .83;

  // Find all YouTube/Vimeo videos
  var $allVideos = $("iframe[src^='http://player.vimeo.com'], iframe[src^='http://www.youtube.com']"),

    // The element that is fluid width
    $fluidEl = $(".leftcol");

  // Figure out and save aspect ratio for each video
  $allVideos.each(function() {

    $(this)
      .data('aspectRatio', this.height / this.width)

      // and remove the hard coded width/height
      .removeAttr('height')
      .removeAttr('width');

  });

  // And when the window is resized
  $(window).resize(function() {
      resizeVids();
  });

  function resizeVids() {
    if (firsttime  && $(window).width() > media_size) {
      newWidth = (($(window).width() * reg_percent) * leftcol_percent);
      firsttime = false;
    }
    else if (firsttime) {
      newWidth = ($(window).width() * mobile_percent);
    }
    else {
      newWidth = $fluidEl.width();
      firsttime = false;
    }

    // Resize all videos according to their own aspect ratio
    $allVideos.each(function() {

      var $el = $(this);
      $el
        .width(newWidth)
        .height(newWidth * $el.data('aspectRatio'));

    });

  };

  // Kick off one resize to fix all videos on page load
  resizeVids();

});