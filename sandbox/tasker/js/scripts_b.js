var main = function() {
    /*
     var calendar = $("#calendar").calendar(
     {
     tmpl_path: "/tmpls/",
     events_source: function() {
     return [];
     }
     });
     */

    $("#submit_new_task").click(add_task);


};

$(document).ready(main);

var id = localStorage.getItem('tasknum') || 0;
var today_w = moment().format("d");
// FORM VALIDATION STUFF //

function checkForm()
{
    // regular expression to match required date format
    re = /^\d{4}-\d{1,2}-\d{1,2}$/;

    var date = $("form [name=date]").val(), time = $("form [name=time]").val(), text = $("form [name=text]").val();

    if (!date.match(re)) {
        $(".error").text("Неправильный формат даты: " + date);
        $("form [name=date]").focus();
        return false;
    }

    // regular expression to match required time format
    re = /^\d{1,2}:\d{2}([ap]m)?$/;

    if (!time.match(re)) {
        $(".error").text("Неправильный формат времени: " + time);
        $("form [name=time]").focus();
        return false;
    }

    if (text == "") {
        $(".error").text("Ошибка: Введите текст!");
        $("form [name=text]").focus();
        return false;
    }

    var re = /^[\w ]+$/;

    // validation fails if the input doesn't match our regular expression
    if (!re.test(text)) {
        $(".error").text("Ошибка: Текст содержит недопустимые символы!");
        $("form [name=text]").focus().toggleClass("help-inline");
        return false;
    }
    $("form input, form textarea").val('');
    return {
        date: date,
        time: time,
        day: today_w,
        text: text
    };

}

// ADDING TASK  //

var task_box = [];


var add_task = function(e) {
    var obj = checkForm();
    if (!obj)
        return;
    id++;
    var key = 'task' + id;
    localStorage.setItem(key, JSON.stringify(obj));
    localStorage.setItem('tasknum', id);

    return false;

var taskTemplate = $("#task-template").html(),
    divTemplate = $(".tab-content").html();

$(".tab-content").html(_.template(taskTemplate,{items:items}));
$("").before(_.template(divTemplate,{items:items}));


};








// CLOCK //

$(function() {

    // Cache some selectors
    var clock = $('#clock'),
            alarm = clock.find('.alarm'),
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



    switch (today_w) {
        case "1":
            $("li#mon").addClass('active');
            break;
        case "2":
            $("li#tue").addClass('active');
            break;
        case "3":
            $("li#wed").addClass('active');
            break;
        case "4":
            $("li#thu").addClass('active');
            break;
        case "5":
            $("li#fri").addClass('active');
            break;
        case "6":
            $("li#sat").addClass('active');
            break;
        case "7":
            $("li#sun").addClass('active');
            break;
    }

    $.each(positions, function() {

        if (this == ':') {
            digit_holder.append('<div class="dots">');
        }
        else {

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

    // var weekday_names = 'MON TUE WED THU FRI SAT SUN'.split(' '),

    var weekday_names = 'ПОНЕДЕЛЬНИК ВТОРНИК СРЕДА ЧЕТВЕРГ ПЯТНИЦА СУББОТА ВОСКРЕСЕНЬЕ'.split(' '),
            weekday_holder = clock.find('.weekdays');

    $.each(weekday_names, function() {
        weekday_holder.append('<span>' + this + '</span>');
    });

    var weekdays = clock.find('.weekdays span');

    // Run a timer every second and update the clock

    (function update_time() {

        // Use moment.js to output the current time as a string
        // hh is for the hours in 12-hour format,
        // mm - minutes, ss-seconds (all with leading zeroes),
        // d is for day of week and A is for AM/PM

        var now = moment().format("hhmmssdA");

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



