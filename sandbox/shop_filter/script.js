var checked_filters = {};
var filters = {};
var goods;
var goods_received = false;
var document_ready = false;
var sorting = "price";

$.getJSON('goods.json', function(data) {
	goods = data;
	goods_received = true;
	if (document_ready) {
		setup();
	}
});

function render_goods(what, where, compare) {

	var res = [];
	for (i = 0; i < what.length; i++) {
		var stop = false;
		for (var j in what[i]) {
			var attr_group = j;
			var attr_value = what[i][j];
			var selected_values = compare[attr_group] || [];
			if (selected_values.length && selected_values.indexOf(attr_value) == -1) {
				stop = true;
			}
		}
		if (stop)
			continue;

		var template = $(".template").html();

		for (var x in what[i]) {
			template = template.replace('%' + x + '%', what[i][x]);
		}

		res.push(template);
	}
	$(where).html(res.join(''));
	$('a.higher').click(sorted_click_higher);
	$('a.lower').click(sorted_click_lower);
}
;


var render_filters = function(what, where) {
	var arr = [];

	arr.push('<div class="checked_box">');
	arr.push('<ul class="cheсked_filters"><span id="ch">Checked Filters:</span></ul>');
	arr.push('<button id="reset">Reset Filters</button>');
	arr.push('</div>');

	for (var i in what) {
		arr.push('<ul class="fill"><span>' + i + '</span>');
		for (var j in what[i]) {
			arr.push('<li><a class ="f_link" href="#nowhere">'
				+ what[i][j] + '</a></li>');
		}
		arr.push('</ul>');
	}
	$(where).html(arr.join(''));
	$('a.f_link').click(link_click);
	$('#reset').click(reset_click);
};


function link_click() {
	if ($(this).hasClass("f_checked")) {
		return;
	}
	var filter_name,
		filter_group;
	filter_group = $(this).closest('.fill').find('span').html();
	filter_name = $(this).html();
	$(this).removeClass('f_link');
	$(this).addClass('f_checked').attr('data-name', (filter_group + '-' + filter_name).replace(/([\s\,\.]+)/g, ''));
	var selector = '.' + (('.f_checked[data-name=' + filter_group + '-' + filter_name + ']').replace(/([\s\,\.]+)/g, ''));
	if (checked_filters[filter_group]) {
		checked_filters[filter_group].push(filter_name);
	} else {
		checked_filters[filter_group] = [filter_name];
	}
	$(this).closest('li').hide("blow");
	$('button, .cheсked_box, #ch').show();
	$(".cheсked_filters").append('<li><img class="x_checked" src="x-icon.png">'
		+ '<a class="f_link_x" href="#nowhere">'
		+ filter_group + ': ' + filter_name + '</a></li>');

	$('li:last-child .x_checked').click(x_click);
	render_goods(goods, '.goods_container', checked_filters);

}
;

var reset_click = function() {
	checked_filters = {};
	$(".cheсked_box, button").hide();
	render_filters(filters, '.filter_container');
	render_goods(goods, '.goods_container', checked_filters);

};

var sorted_click_higher = function() {
	sorting = $(this).attr("data-sorting");
	goods.sort(sort_goods_by_keys("-" + sorting));
	render_goods(goods, '.goods_container', checked_filters);
};

var sorted_click_lower = function() {
	sorting = $(this).attr("data-sorting");
	goods.sort(sort_goods_by_keys(sorting));
	render_goods(goods, '.goods_container', checked_filters);
};


var x_click = function() {
	var filter = $(this).next().html();
	filter_group = filter.split(': ')[0];
	filter_name = filter.split(': ')[1];

	for (i = 0; i < checked_filters[filter_group].length; i++) {
		if (checked_filters[filter_group][i] === filter_name) {
			checked_filters[filter_group].splice(i, 1);
		}

		if ($(".cheсked_filters").children(":first-child").size() === 2) {
			$(".cheсked_box, button, #ch").hide();
		}

	}
	$(this).parent().remove();
	var selector = '.' + (('.f_checked[data-name=' + filter_group + '-' + filter_name + ']').replace(/([\s\,\.]+)/g, ''));
	$(selector).removeClass().addClass('f_link');
	$('.f_link').closest('li').show();
	render_goods(goods, '.goods_container', checked_filters);

};

function sort_goods_by_keys(property) {
	var aa = 1;
	var bb = -1;
	if (property[0] === "-") {
		aa = -1;
		bb = 1;
		property = property.substr(1);
	}
	return function(a, b) {
		var a = a[property].replace(/\,/g, '.');
		var b = b[property].replace(/\,/g, '.');
		var c = a.match(/^(\d|\.|\,)*/);
		a = c[0] ? Number(c[0].replace(',', ".")) : a;
		var d = b.match(/^(\d|\.|\,)*/);
		b = d[0] ? Number(d[0].replace(',', ".")) : b;
		return a > b ? aa : bb;
	};
}
;

var setup = function() {
	for (var i in goods) {
		for (var j in goods[i]) {
			if (j === 'name')
				continue;
			if (!filters[j])
				filters[j] = {};
			filters[j][ $.trim(goods[i][j]) ] = true;
		}
	}
	for (var i in filters) {
		filters[i] = Object.keys(filters[i]).sort(function(a, b) {
			var c = a.match(/^(\d|\.|\,)*/);
			a = c[0] ? Number(c[0].replace(',', ".")) : a;
			var d = b.match(/^(\d|\.|\,)*/);
			b = d[0] ? Number(d[0].replace(',', ".")) : b;
			//console.log(a, b, a > b);
			return a > b ? 1 : -1;
		});
	}
	render_goods(goods, '.goods_container', checked_filters);
	render_filters(filters, '.filter_container');

	$('.sort-nav li').hover(
		function() {
			$('ul', this).slideDown(110);
		},
		function() {
			$('ul', this).slideUp(110);
		}
	);

};

$(document).ready(function() {
	document_ready = true;
	if (goods_received) {
		setup();
	}
});
