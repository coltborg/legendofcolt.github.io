//@prepros-prepend modernizr.js
//@prepros-prepend picturefill.js
//@prepros-prepend jquery.js

jQuery(document).ready( function($){

  /* Responsive iframes
  ------------------------------ */

  function responsiveIframe() {
    $('iframe').each( function(){
      var iw = $(this).width();
      var ih = $(this).height();
      var ip = $(this).parent().width();
      var ipw = ip / iw;
      var ipwh = Math.round( ih * ipw );
      $(this).css( {
        'width': ip,
        'height' : ipwh,
      } );
    });
  }

  responsiveIframe();

  // Trigger video resize if browser is resized
  $(window).resize( function(){
    responsiveIframe();
  });

  // Watch body height to see if font size settings are changed
  var watch_el = $('body');
  var el_height = watch_el.innerHeight();

  window.setInterval( function(){
    var new_height = watch_el.innerHeight();
    if ( new_height != el_height ) {
      el_height = new_height;
      responsiveIframe();
    }
  }, 200);

  /* Text Change
  ------------------------------ */

  // If #js-text-change is on page
  if( $("#js-text-change").length > 0 ) {

    var textArray = [
      "aspire",
      "design",
      "imagine",
      "develop"
    ];
    var curTextIndex = -1;

    var intervalID = setInterval(function() {
      ++curTextIndex;
      if (curTextIndex >= textArray.length) {
          curTextIndex = 0;
      }

      $("#js-text-change").fadeOut(function() {
        $(this).text(textArray[curTextIndex]).css('opacity', 0);
      }).fadeIn(function() {
        $(this).text(textArray[curTextIndex]).css('opacity', 1);
      });

    }, 4000);

  } // end if

  /* Init KudosPlease
  ------------------------------ */

  new KudosPlease({
    el : '.kudos',
    duration : 1500,
    persistent : true,
    status : {
      alpha: '',
      beta: '',
      gamma: ''
    }
  });

});
