/********************************* Globals **********************************/
//var language = 'english';
console.log("Language stored in cookie is " + getCookie("language"));

//var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
//var pathArray = window.location.pathname.split('/');
//var secondLevelLocation = pathArray[2];


/*************************** MAIN function **********************************/

var main = function() {
    var language_cookie = getCookie("language");

    Change_Language(language = language_cookie);

    if (language_cookie == null) {
        language = 'english';
        $('#en').addClass('highlighted');
    } else {
        language = language_cookie;
        switch (language) {
            case "italian":
                $('#it').addClass('highlighted');
                break
            case "ukrainian":
                $('#ua').addClass('highlighted');
                break
            case "russian":
                $('#ru').addClass('highlighted');
                break
            default:
                $('#en').addClass('highlighted');
        }
    }

    /******************* Language change handlers ***************************/

    $('#en').click(function() {
        $('.language_selector').removeClass('highlighted');
        $('#en').addClass('highlighted');
        $('.pull_language').slideToggle();
        $.ajax({
            url: "index.html",
            cache: false,
            success: function(main) {

                Change_Language(language = "english");
                createCookie("language", "english", 30);
            }
        });
    });

    $('#it').click(function() {
        $('.language_selector').removeClass('highlighted');
        $('#it').addClass('highlighted');
        $('.pull_language').slideToggle();
        $.ajax({
            url: "index.html",
            cache: false,
            success: function(main) {

                Change_Language(language = "italian");
                createCookie("language", "italian", 30);
            }
        });
    });

    $('#ru').click(function() {
        $('.language_selector').removeClass('highlighted');
        $('#ru').addClass('highlighted');
        $('.pull_language').slideToggle();
        $.ajax({
            url: "index.html",
            cache: false,
            success: function(main) {

                Change_Language(language = "russian");
                createCookie("language", "russian", 30);
            }
        });
    });

    $('#ua').click(function() {
        $('.language_selector').removeClass('highlighted');
        $('#ua').addClass('highlighted');
        $('.pull_language').slideToggle();
        $.ajax({
            url: "index.html",
            cache: false,
            success: function(main) {

                Change_Language(language = "ukrainian");
                createCookie("language", "ukrainian", 30);
            }
        });
    });



    /*********************** Waypoints ********************************/

    $('.wp1').waypoint(function() {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function() {
        $('.wp2').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function() {
        $('.wp3').addClass('animated fadeInDown');
    }, {
        offset: '55%'
    });
    $('.wp4').waypoint(function() {
        $('.wp4').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function() {
        $('.wp5').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function() {
        $('.wp6').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });

    /************************** Slide-In Nav ***************************/

    $(window).load(function() {

        $('.nav_slide_button').click(function() {
            $('.pull').slideToggle();
        });

    });

    $(window).load(function() {

        $('.nav_slide_button_language').click(function() {
            $('.pull_language').slideToggle();
        });

    });



    /************************** Smooth Scrolling ***************************/

    $(function() {

        $('a[href*=#]:not([href=#])').click(function() {
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

    /******************* Nav Transformations *****************************/

    document.querySelector("#nav-toggle").addEventListener("click", function() {
        this.classList.toggle("active");
    });

    document.querySelector("#nav-language").addEventListener("click", function() {
        this.classList.toggle("active");
    });

    /*************************** Overlays ***********************************/

    $(document).ready(function() {
        if (Modernizr.touch) {
            // show the close overlay button
            $(".close-overlay").removeClass("hidden");
            // handle the adding of hover class when clicked
            $(".img").click(function(e) {
                if (!$(this).hasClass("hover")) {
                    $(this).addClass("hover");
                }
            });
            // handle the closing of the overlay
            $(".close-overlay").click(function(e) {
                e.preventDefault();
                e.stopPropagation();
                if ($(this).closest(".img").hasClass("hover")) {
                    $(this).closest(".img").removeClass("hover");
                }
            });
        } else {
            // handle the mouseenter functionality
            $(".img").mouseenter(function() {
                $(this).addClass("hover");
            })
                    // handle the mouseleave functionality
                    .mouseleave(function() {
                        $(this).removeClass("hover");
                    });
        }
    });


    /*************************** Flexsliders *******************************/

    $(window).load(function() {

        $('#servicesSlider').flexslider({
            animation: "slide",
            directionNav: false,
            controlNav: true,
            touch: true,
            pauseOnHover: true,
            start: function() {
                $.waypoints('refresh');
            }
        });

    });

};
/************************ End of Main function *****************************/


$(document).ready(main);


/************************ Language Changer *****************************/


var Change_Language = function() {

    $.ajax({
        url: 'assets/languages.xml',
        success: function(xml) {
            $(xml).find('translation').each(function() {
                var id = $(this).attr('id');
                // Based on the language set,
                // jQuery will search for a matching
                // tag and return the text inside it
                var text = $(this).find(language).text();
                $("." + id).html(text);
                $("." + id).addClass(language);
                console.log("Translated!");
            });
        }
    });
};

/**************************** Cookies *********************************/

function createCookie(name, value, expires, path, domain) {
    var cookie = name + "=" + escape(value) + ";";

    if (expires) {
        // If it's a date
        if (expires instanceof Date) {
            // If it isn't a valid date
            if (isNaN(expires.getTime()))
                expires = new Date();
        }
        else
            expires = new Date(new Date().getTime() + parseInt(expires) * 1000 * 60 * 60 * 24);

        cookie += "expires=" + expires.toGMTString() + ";";
    }

    if (path)
        cookie += "path=" + path + ";";
    if (domain)
        cookie += "domain=" + domain + ";";

    document.cookie = cookie;
}


function getCookie(name) {
    var regexp = new RegExp("(?:^" + name + "|;\s*" + name + ")=(.*?)(?:;|$)", "g");
    var result = regexp.exec(document.cookie);
    return (result === null) ? null : result[1];
}
