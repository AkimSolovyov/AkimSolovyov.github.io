
     $(document).ready(function () {

          function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.for-tester').css('min-height', windowHeight-425);
    $('.for-startup').css('min-height', windowHeight);
              $('.for-startup').css('padding-top', windowHeight/10);
    $('.orgs').css('min-height', windowHeight);
    $('.staff').css('min-height', windowHeight);
  };
  setHeight();

  $(window).resize(function() {
    setHeight();
  });

 });

 var menu = 1;
 var omenu = 1;

 $(window).scroll(function () {
     curpos = $(document).scrollTop();
     if (curpos < $('.s1').offset().top) {
         menu = 1;
     } else if ((curpos >= $('.s2').offset().top) && (curpos < $('.s3').offset().top)) {
         menu = 2;
     } else if ((curpos >= $('.s3').offset().top) && (curpos < $('.s4').offset().top)) {
         menu = 3;
     } else if (curpos >= $('.s4').offset().top) {
         menu = 4;
     }

 });

 function show(id) {
     var h = $('.s' + id).offset().top;

     if (id != 1) {
                    h = h + 30;
                }

     $("body,html").animate({
         "scrollTop": h
     }, 1500, function () {
         //$('.bottom_nav_bg').css('display', 'none');
        // $('.s' + id + ' .bottom_nav_bg').css('display', 'block');
     });

 }
