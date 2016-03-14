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

  /* Google Analytics
  ------------------------------ */

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-61657533-2', 'auto');
    ga('send', 'pageview');

  });
