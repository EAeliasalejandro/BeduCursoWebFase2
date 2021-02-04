/* Ejercicio 1 */
/* var title = document.getElementById('title');

var redButton = document.getElementById('red');

var blueButton = document.getElementById('blue');

var blackButton = document.getElementById('black');

redButton.addEventListener("click", function () {
    title.style = "color: red;";
});

blueButton.addEventListener("click", function () {
    title.style = "color: blue;";
});

blackButton.addEventListener("click", function () {
    title.style = "color: black;";
}); */

//cambiar h1 en tiempo real
/* var title = document.getElementById('title');

var input = document.getElementById('text');
input.addEventListener("input", function (event) {
    title.textContent = event.target.value;
});
 */

//Reto1
/* var p = document.querySelector("p");
var size;

function setSize(newSize) {
    size = newSize;
    p.style.fontSize = size + "px";
}

setSize(20);

function handleArrow(event) {
    if (event.key == "ArrowUp") {
        if (size > 80) {
            p.textContent = "💥";
            document.body.removeEventListener("keydown", handleArrow);
        } else {
            setSize(size * 1.1);
            event.preventDefault();
        }
    } else if (event.key == "ArrowDown") {
        setSize(size * 0.9);
        event.preventDefault();
    }
}

document.body.addEventListener("keydown", handleArrow); */

//Reto 2
/* var modal = document.getElementById("modal");

var button = document.getElementsByTagName('button')[0];
var modalImage = document.getElementById("modal-image");
var close = document.getElementsByClassName("close")[0];

button.addEventListener('click', function () {
    modal.style.display = "block";
    modalImage.src = 'https://picsum.photos/300/200';
})

close.addEventListener('click', function () {
    modal.style.display = "none";
}) */

//Reto 3

function createTabs(node) {
    var tabs = Array.from(node.children).map(function (node) {
        var button = document.createElement("button");
        button.textContent = node.getAttribute("data-tabname");

        var tab = {
            node: node,
            button: button
        };

        button.addEventListener("click", function () {
            return selectTab(tab)
        });

        return tab;
    });

    var tabList = document.createElement("div");

    for (var i = 0; i < tabs.length; i++) {
        tabList.appendChild(tabs[i].button);
    }

    node.insertBefore(tabList, node.firstChild);

    function selectTab(selectedTab) {
        for (var i = 0; i < tabs.length; i++) {
            var selected = tabs[i] == selectedTab;
            tabs[i].node.style.display = selected ? "" : "none";
            tabs[i].button.style.color = selected ? "red" : "";
        }
    }

    selectTab(tabs[0]);
}
createTabs(document.querySelector("#tab-panel"));