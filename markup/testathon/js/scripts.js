 jQuery(document).ready(function () {

     $('.s' + menu + ' .bottom_nav_bg').css('display', 'block');
     if ($(window).width() < 1595) {
         $('.s4 .map').removeClass('map').addClass('map2');
     }
 });

 var menu = 1;
 var omenu = 1;

 $(window).scroll(function () {
     curpos = $(document).scrollTop();
     if (curpos < $('.s2').offset().top) {
         menu = 1;
     } else if ((curpos >= $('.s2').offset().top) && (curpos < $('.s3').offset().top)) {
         menu = 2;
     } else if ((curpos >= $('.s3').offset().top) && (curpos < $('.s4').offset().top)) {
         menu = 3;
     } else if (curpos >= $('.s4').offset().top) {
         menu = 4;
     }

     if (omenu != menu) {
         omenu = menu;
         $('.screen .bottom_nav_bg').fadeOut(1000);
         $('.s' + menu + ' .bottom_nav_bg').fadeIn(500);
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
         $('.screen .bottom_nav_bg').css('display', 'none');
         $('.s' + id + ' .bottom_nav_bg').css('display', 'block');
     });

     if ((false) && (id == 4)) {
         var width = $("body").width();
         width = width / 8;
         $("body,html").animate({
             "scrollLeft": width
         }, 0);
     }
 }


 /************************** Smooth Scrolling ***************************/

 $(function () {

     $('a[href*=#]:not([href=#])').click(function () {
         if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

             var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
             if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                 }, 2000);
                 history.pushState('', document.title, window.location.pathname);
                 return false;
             }
         }
     });

 });

 $(document).ready(function () {


 });
