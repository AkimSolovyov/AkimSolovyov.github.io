var main = function () {
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
};

function dotime() {

    $("body").css({
        "transition": "all 0.8s",
        "-webkit-transition": "all 0.8s"
    });

    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();

    if (hours < 10) {
        hours = "0" + hours
    };
    if (mins < 10) {
        mins = "0" + mins
    };
    if (secs < 10) {
        secs = "0" + secs
    };

    hours.toString();
    mins.toString();
    secs.toString();

    var hex = "#" + hours + mins + secs;

    $("#t").html(hours + " : " + mins + " : " + secs);
    $("#h").html(hex);

    document.body.style.background = hex;

    setTimeout(function () {
        dotime();
    }, 1000);
}


var today_w = moment().format("d");

$(document).ready(main);



// Notes //

var todo = todo || {},
    data = JSON.parse(localStorage.getItem("todoData"));
data = data || {};

(function (todo, data, $) {

    var defaults = {
            todoTask: "todo-task",
            todoHeader: "task-header",
            todoDate: "task-date",
            todoDescription: "task-description",
            taskId: "task-",
            formId: "todo-form",
            dataAttribute: "data",
            deleteDiv: "delete-div"
        },
        codes = {
            "1": "#pending",
            "2": "#inProgress",
            "3": "#completed"
        };

    todo.init = function (options) {

        options = options || {};
        options = $.extend({}, defaults, options);

        $.each(data, function (index, params) {
            generateElement(params);
        });

        // Adding drop function to each category of task
        $.each(codes, function (index, value) {
            $(value).droppable({
                drop: function (event, ui) {
                    var element = ui.helper,
                        css_id = element.attr("id"),
                        id = css_id.replace(options.taskId, ""),
                        object = data[id];

                    // Removing old element
                    removeElement(object);

                    // Changing object code
                    object.code = index;

                    // Generating new element
                    generateElement(object);

                    // Updating Local Storage
                    data[id] = object;
                    localStorage.setItem("todoData", JSON.stringify(data));

                    // Hiding Delete Area
                    $("#" + defaults.deleteDiv).hide();
                }
            });
        });

        // Adding drop function to delete div
        $("#" + options.deleteDiv).droppable({
            drop: function (event, ui) {
                var element = ui.helper,
                    css_id = element.attr("id"),
                    id = css_id.replace(options.taskId, ""),
                    object = data[id];

                // Removing old element
                removeElement(object);

                // Updating local storage
                delete data[id];
                localStorage.setItem("todoData", JSON.stringify(data));

                // Hiding Delete Area
                $("#" + defaults.deleteDiv).hide();
            }
        });

    };

    // Add Task
    var generateElement = function (params) {
        var parent = $(codes[params.code]),
            wrapper;

        if (!parent) {
            return;
        }

        wrapper = $("<div />", {
            "class": defaults.todoTask,
            "id": defaults.taskId + params.id,
            "data": params.id
        }).appendTo(parent);

        $("<div />", {
            "class": defaults.todoHeader,
            "text": params.title
        }).appendTo(wrapper);

        $("<div />", {
            "class": defaults.todoDescription,
            "text": params.description
        }).appendTo(wrapper);

        $("<div />", {
            "class": defaults.todoDate,
            "text": params.date
        }).appendTo(wrapper);





        wrapper.draggable({
            start: function () {
                $("#" + defaults.deleteDiv).show();
            },
            stop: function () {
                $("#" + defaults.deleteDiv).hide();
            },
            revert: "invalid",
            revertDuration: 200
        });

    };

    // Remove task
    var removeElement = function (params) {
        $("#" + defaults.taskId + params.id).remove();
    };

    todo.add = function () {
        var inputs = $("#" + defaults.formId + " :input"),
            errorMessage = "Title can not be empty",
            id, title, description, date, tempData;

        if (inputs.length !== 4) {
            return;
        }
        title = inputs[0].value;
        description = inputs[1].value;
        date = inputs[2].value;

        if (!title) {
            generateDialog(errorMessage);
            return;
        }

        id = new Date().getTime();

        tempData = {
            id: id,
            code: "1",
            title: title,
            date: date,
            description: description

        };

        // Saving element in local storage
        data[id] = tempData;
        localStorage.setItem("todoData", JSON.stringify(data));

        // Generate Todo Element
        generateElement(tempData);

        // Reset Form
        inputs[0].value = "";
        inputs[1].value = "";
        inputs[2].value = "";
    };

    var generateDialog = function (message) {
        var responseId = "response-dialog",
            title = "Messaage",
            responseDialog = $("#" + responseId),
            buttonOptions;

        if (!responseDialog.length) {
            responseDialog = $("<div />", {
                title: title,
                id: responseId
            }).appendTo($("body"));
        }

        responseDialog.html(message);

        buttonOptions = {
            "Ok": function () {
                responseDialog.dialog("close");
            }
        };

        responseDialog.dialog({
            autoOpen: true,
            width: 400,
            modal: true,
            closeOnEscape: true,
            buttons: buttonOptions
        });
    };

    todo.clear = function () {
        data = {};
        localStorage.setItem("todoData", JSON.stringify(data));
        $("." + defaults.todoTask).remove();
    };

})(todo, data, jQuery);


// CLOCK //

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
