// scrollup button
jQuery(document).ready(function() {
  jQuery('#scrollup div').mouseover(function() {
    jQuery(this).animate({
      opacity: 0.65
    }, 100);
  }).mouseout(function() {
    jQuery(this).animate({
      opacity: 1
    }, 100);
  }).click(function() {
    jQuery('body').animate({
      scrollTop: 0
    }, 2000);
    return false;
  });

  jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > 0) {
      jQuery('#scrollup').fadeIn('fast');
    } else {
      jQuery('#scrollup').fadeOut('fast');
    }
  });
});

//header bottom nav menu


jQuery(document).ready(function() {
  jQuery('.header-bottom-menu > div').click(function() {
    jQuery('.news').toggleClass('hide');
    jQuery('.about_us').toggleClass('hide');

    jQuery('.header-bottom').toggleClass('header-bottom-menu_active');
  });


  jQuery('.header-bottom-tr').click(function() {
    var chosen_pane = jQuery(this),
        all_panes = jQuery('.header-bottom-tr');

    all_panes.removeClass('active');
    chosen_pane.addClass('active');
  });

  activatePane();

});

function activatePane() {

  jQuery('.header-bottom-tr').removeClass('active');

  if (window.location.hash == "#sea"){
    jQuery('.header-bottom-menu-sea-tr').addClass('active');
  }
  else if (window.location.hash == "#rail") {
    jQuery('.header-bottom-menu-rail-tr').addClass('active');
  }
  else if (window.location.hash == "#auto") {
    jQuery('.header-bottom-menu-auto-tr').addClass('active');
  }
}

$('.transport-menu-link').click(function(){
  var el = jQuery(this);

  jQuery('.header-bottom-tr').removeClass('active');

  if ((el).attr('href') === "#sea" ) {
    jQuery('.header-bottom-menu-sea-tr').addClass('active');
  }
  else if ((el).attr('href') === "#rail" ) {
    jQuery('.header-bottom-menu-rail-tr').addClass('active');
  }
  else if ((el).attr('href') === "#auto" ) {
    jQuery('.header-bottom-menu-auto-tr').addClass('active');
  }
});

// smooth scrolling

Math.easeOutQuad = function(t, b, c, d) {
  t /= d;
  return -c * t * (t - 2) + b;
};

(function() { // do not mess global space
  var
      interval, // scroll is being eased
      mult = 0, // how fast do we scroll
      dir = 0, // 1 = scroll down, -1 = scroll up
      steps = 50, // how many steps in animation
      length = 30; // how long to animate
  function MouseWheelHandler(e) {
    e.preventDefault(); // prevent default browser scroll
    clearInterval(interval); // cancel previous animation
    ++mult; // we are going to scroll faster
    var delta = -Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))); // cross-browser
    if (dir != delta) { // scroll direction changed
      mult = 1; // start slowly
      dir = delta;
    }
    // in this cycle, we determine which element to scroll
    for (var tgt = e.target; tgt != document.documentElement; tgt = tgt.parentNode) {
      var oldScroll = tgt.scrollTop;
      tgt.scrollTop += delta;
      if (oldScroll != tgt.scrollTop) break;
      // else the element can't be scrolled, try its parent in next iteration
    }
    var start = tgt.scrollTop;
    var end = start + length * mult * delta; // where to end the scroll
    var change = end - start; // base change in one step
    var step = 0; // current step
    interval = setInterval(function() {
      var pos = Math.easeOutQuad(step++, start, change, steps); // calculate next step
      tgt.scrollTop = pos; // scroll the target to next step
      if (step >= steps) { // scroll finished without speed up - stop animation
        mult = 0; // next scroll will start slowly
        clearInterval(interval);
      }
    }, 10);
  }

  // nonstandard: Chrome, IE, Opera, Safari
  window.addEventListener("mousewheel", MouseWheelHandler, false);
  // nonstandard: Firefox
  window.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
})();
