/*------------------------Controller/Logic------------------------------------*/
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
	//render_filters(filters, '.filter_container');

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


/*-------------------------------Render---------------------------------------*/

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
                 //   if (template !== ('%' + x + '%') ) {
                  //      continue
                    //}
                    console.log(template)
                    console.log('%' + x + '%');
			template = template.replace('%' + x + '%', what[i][x]);
		}

		res.push(template);
	}
	$(where).html(res.join(''));
	//$('a.higher').click(sorted_click_higher);
//	$('a.lower').click(sorted_click_lower);
};



/*------------------------------Filter----------------------------------------*/







/*-----------------------------------Sort-------------------------------------*/






