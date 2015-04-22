var main = function () { // Main onready function

    switch (today_w) {
    case "1":
        $("li#mon a").click();
        break;
    case "2":
        $("li#tue a").click();
        break;
    case "3":
        $("li#wed a").click();
        break;
    case "4":
        $("li#thu a").click();
        break;
    case "5":
        $("li#fri a").click();
        break;
    case "6":
        $("li#sat a").click();
        break;
    case "7":
        $("li#sun a").click();
        break;
    }


}; // - end of main function

$(document).ready(main);


var today_w = moment().format("d"),
    noteId = 1,
    $note = $('.note'),
    note_elem = ['<div class="note draggable" id="noteId' + noteId + '">' +
                  '<div class="note_content">' +
                  '<div class="subject" contenteditable><h5>Тема</h5></div>' +
                  '<div class="text" contenteditable>Текст</div>' +
                 '</div></div>'];
// NOTES//

$('#save').click(function () {
    localStorage.setItem('note', $note.html());
    console.log($note.html());
});

if (localStorage.getItem('note')) {
    $note.html(localStorage.getItem('note'));
}

$('#clear').click(function () {
    localStorage.clear('note');
    location.reload();
});


$('.addNote_button').click(function () { // note-icon click
    $(".tab-content").append(note_elem);
    $(function () {
        $(".draggable").draggable({
            containment: ".tabbable",
            scroll: false,
            cancel: ".note_content",
        });
    });
    // $(".form_container").show();
    //  $(".blackout").css("opacity", "0.1");


});

$(document).keydown(function (event) { // exit on escape and key controls
    if (event.keyCode == "27") {
        $(".form_container").hide();
        $(".blackout").css("opacity", "1");
    }
})

$(".btn-info").click(function () { // cancel click
    $(".form_container").show();
    $(".blackout").css("opacity", "0.1");
})

///////////////////////////////////////
////////////////// CLOCK //////////////
///////////////////////////////////////

$(function () {

    // Cache some selectors
    var clock = $('#clock'),
        ampm = clock.find('.ampm');

    // Map digits to their names (this will be an array)
    var digit_to_name = 'zero one two three four five six seven eight nine'.split(' ');

    // This object will hold the digit elements
    var digits = {};

    // Positions for the hours, minutes, and seconds
    var positions = [
        'h1', 'h2', ':', 'm1', 'm2', ':', 's1', 's2'
    ];

    // Generate the digits with the needed markup,
    // and add them to the clock

    var digit_holder = clock.find('.digits');

    $.each(positions, function () {

        if (this == ':') {
            digit_holder.append('<div class="dots">');
        } else {

            var pos = $('<div>');

            for (var i = 1; i < 8; i++) {
                pos.append('<span class="d' + i + '">');
            }

            // Set the digits as key:value pairs in the digits object
            digits[this] = pos;

            // Add the digit elements to the page
            digit_holder.append(pos);
        }

    });

    // Add the weekday names

    //  var weekday_names = 'MON TUE WED THU FRI SAT SUN'.split(' '),

    var weekday_names = 'ПОНЕДЕЛЬНИК ВТОРНИК СРЕДА ЧЕТВЕРГ ПЯТНИЦА СУББОТА ВОСКРЕСЕНЬЕ'.split(' '),
        weekday_holder = clock.find('.weekdays');

    $.each(weekday_names, function () {
        weekday_holder.append('<span>' + this + '</span>');
    });

    var weekdays = clock.find('.weekdays span');

    // Run a timer every second and update the clock

    (function update_time() {

        // Use moment.js to output the current time as a string
        // hh is for the hours in 12-hour format,
        // mm - minutes, ss-seconds (all with leading zeroes),
        // d is for day of week and A is for AM/PM

        var now = moment().format("HHmmssdA");

        digits.h1.attr('class', digit_to_name[now[0]]);
        digits.h2.attr('class', digit_to_name[now[1]]);
        digits.m1.attr('class', digit_to_name[now[2]]);
        digits.m2.attr('class', digit_to_name[now[3]]);
        digits.s1.attr('class', digit_to_name[now[4]]);
        digits.s2.attr('class', digit_to_name[now[5]]);

        // The library returns Sunday as the first day of the week.
        // Stupid, I know. Lets shift all the days one position down,
        // and make Sunday last

        var dow = now[6];
        dow--;

        // Sunday!
        if (dow < 0) {
            // Make it last
            dow = 6;
        }

        // Mark the active day of the week
        weekdays.removeClass('active').eq(dow).addClass('active');


        // Set the am/pm text:
        ampm.text(now[7] + now[8]);

        // Schedule this function to be run again in 1 sec
        setTimeout(update_time, 1000);

    })();


});
