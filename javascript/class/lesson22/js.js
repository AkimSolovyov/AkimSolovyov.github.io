function Menu(options) {
    var elem;


    function getElem() {
        if (!elem) render();
        return elem;
    }


    function render() {
        elem = document.createElement("div");
        elem.className = "menu";

        var titleElem = document.createElement("span");
        titleElem.className = "title";
        titleElem.textContent = options.title;
        elem.appendChild(titleElem);

        /*elem.onmousedown = function(){
         return false;
        }*/

        elem.onclick = function (event) {
            var closestTitle = event.target.closest('.title');
            if (closestTitle && elem.contains(closestTitle)) {
                toggle();
            }
        };
    }

    function renderItems() {
        var items = options.items || [];
        var list = document.createElement("ul");
        items.forEach(function (item) {
            var li = document.createElement("li");
            li.textContent = item;
            list.appendChild(li);
        });

        elem.appendChild(list);

    }

    function open() {
        if (!elem.querySelector("ul")) {
            renderItems();
        }
        elem.classList.add("open");
    }

    function close() {
        elem.classList.remove("open");
    }



    function toggle() {
        if (elem.classList.contains("open")) close();
        else open();
    }

    this.open = open;
    this.close = close;
    this.toggle = toggle;
    this.getElem = getElem;


}
