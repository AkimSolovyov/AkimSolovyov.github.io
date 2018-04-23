(function() {
  var nav_links = document.querySelectorAll('.nav-link');
  var page_links = document.querySelectorAll('.pagination a');
  var pagination = document.querySelectorAll('.pagination');

  for (var i = 0; i < nav_links.length; i++) {
    nav_links[i].addEventListener('click', getData);
  }

  [].forEach.call(page_links, function(el) {
    el.addEventListener('click', clickPage);
  });

  const sideNav = document.querySelector('.sidenav');
  M.Sidenav.init(sideNav, {});

  // Default state
  var state = {
    base_url: 'https://swapi.co/api/',
    context: null,
    page_num: 1,
    pages: null
  };

  // State obj reset on diff context
  function reset(context) {
    if (context != state.context) {
      state = {
        base_url: 'https://swapi.co/api/',
        context: null,
        page_num: 1,
        pages: null
      };

      [].forEach.call(document.querySelectorAll('.page-link'), function(el) {
        el.parentNode.removeChild(el);
      });
    }
  }

  function getData(e, page) {
    var http = new XMLHttpRequest();
    var context = this.id || state.context;
    var url = 'https://swapi.co/api/' + context;
    var method = "GET";

    reset(context);
    state.context = context;

    if (page) {
      url = 'https://swapi.co/api/' + context + '?page=' + page;
      state.page_num = page;
    }

    if (context == 'people') {
      // XMLHttpRequest
      http.open(method, url);
      http.onreadystatechange = function () {
        if (http.readyState == XMLHttpRequest.DONE && http.status === 200) {
          var data = JSON.parse(http.responseText);
          state.pages = Math.ceil(data.count / 10);
          renderView(data.results, context);
        } else if (http.readyState == XMLHttpRequest.DONE) {
          console.error('Something went wrong :( ');
        }
      };
      http.send();
    }

    if (context == 'planets' && window.fetch) {
      // Fetch state
      fetch(url)
        .then(function (response) {
          console.log(response.headers.get('Content-Type'));
          console.log(response.status); 
          return response.json();
        })
        .then(function (data) {
          state.pages = Math.ceil(data.count / 10);
          renderView(data.results, context);
        })
        .catch(alert);
    }

    if (context == 'starships') {
      // Jquery Http get
      $.get(url, function (data) {
        state.pages = Math.ceil(data.count / 10);
        renderView(data.results, context);
        console.log('Load was performed.');
      });
    }

  }

  function renderView(data, context) {
    console.log(context);
    console.dir(state);
    results.innerHTML = null;

    pagination.forEach(function(el){
      var page_links = el.querySelectorAll('li');

      if (document.querySelectorAll('.pagination a').length <= 4) {
        paginationInit(state.pages);
      } else if (state.pages == null) {
        paginationToggle('none');
      } else {
        paginationToggle('block');
        page_links[state.page_num].classList.add('disabled');
      }
    });

    if (context == 'people') {
      var people = [];

      data.map(function (item) {
        people.push(item);
      });

      people.map(function (item) {
        var hero = '<div class="card col s12 m4">' +
          '<div class="card-header">' +
            '<h5>' + item.name + '</h5>' +
          '</div>'  +
            '<p>Height: ' + item.height + '</p>' +
            '<p>Mass: ' + item.mass + '</p>' +
            '<p>Hair: ' + item.hair_color + '</p>' +
            '<p>Eyes: ' + item.eye_color + '</p>' +
            '<p>Skin: ' + item.skin_color + '</p>' +
          '</div>';
        results.innerHTML += hero;
      });
    }

    if (context == 'planets') {
      var planets = [];

      data.map(function (item) {
        planets.push(item);
      });

      planets.map(function (item) {
        let planet = `
          <div class="card col s12 m4">
            <div class="card-header">
              <h5> ${item.name} </h5>
            </div>
            <p>Population:  ${item.population} </p>
            <p>Climate:  ${item.climate} </p>
            <p>Terrain:  ${item.terrain} </p>
            <p>Diameter:  ${item.diameter} </p>
            <p>Rotation Period:  ${item.rotation_period} </p>
          </div>
        `;
        results.innerHTML += planet;
      });
    }

    if (context == 'starships') {
      var starships = [];
      var html = [];

      data.map(function (item) {
        starships.push(item);
      });

      starships.map(function (item) {
        var starship = '<div class="card col s12 m4">' +
          '<div class="card-header">' +
          '<h5>' + item.name + '</h5>' +
          '</div>' +
          '<p>Class: ' + item.starship_class + '</p>' +
          '<p>Manufacturer: ' + item.manufacturer + '</p>' +
          '<p>Crew: ' + item.crew + '</p>' +
          '<p>Length: ' + item.length + '</p>' +
          '<p>Cargo: ' + item.cargo_capacity + '</p>' +
          '</div>';

        html += starship;
      });

      $('#results').html(html);
    }
  }

  function paginationInit(pages) {
    paginationToggle('block');

    var next_link = document.querySelectorAll('.pagination-control-next');

    for (var i = 1; i <= pages; i++) {
      var link = `
      <li class="page-link active yellow darken-3 waves-effect">
        <a href="#!" data-page="${i}">${i}</a>
      </li>`;

      next_link.forEach(function(el){
        el.insertAdjacentHTML('beforebegin', link);
      });
    }

    [].forEach.call(document.querySelectorAll('.pagination a'), function(el) {
      if (!el.parentNode.classList.contains('disabled')) {
          el.addEventListener("click", clickPage);
      }  
    });

    document.querySelectorAll('.pagination-control-prev').forEach(function(el){
      el.classList.add('disabled');
      el.nextElementSibling.classList.remove('active');
      el.nextElementSibling.classList.add('disabled');
    });  
  }

  function paginationToggle(status) {
    [].forEach.call(pagination, function(el) {
      el.style.display = status;
    });
  }

  function clickPage(event) {
    event.preventDefault();
    var next = false;
    var prev = false;

    if (event.target.parentNode.getAttribute('data-page') == 'prev') {
      state.page_num -= 1;
      prev = true;
    }

    if (event.target.parentNode.getAttribute('data-page') == 'next') {
      state.page_num += 1;
      next = true;
    }

     [].forEach.call(document.querySelectorAll('.pagination li'), function(elm) {
       elm.classList.remove('disabled');
       elm.classList.add('active');
     });


    pagination.forEach(function(el){
       var page_links = el.querySelectorAll('li');
    
       if (prev) {
         page_links[state.page_num].classList.add('disabled');
       } else if (next) {
         page_links[state.page_num].classList.add('disabled');
       } else {
         var page = event.target.getAttribute('data-page');
         state.page_num = +page;
         event.target.parentNode.classList.add('disabled');
       }

       if (state.page_num == 1) {
         page_links[0].classList.add('disabled');
       }

       if (state.page_num == state.pages) {
         page_links[state.pages + 1].classList.add('disabled');
       } 
    });  
   
    getData(null, state.page_num);
  }
})();