"use strict";

var sections = document.querySelectorAll('section');
var sectionsOffset = {};
var i = 0;
var homeBtn = document.querySelector("#homeBtn");
var aboutBtn = document.querySelector("#aboutBtn");
var projectsBtn = document.querySelector("#projectsBtn");
var contactBtn = document.querySelector("#contactBtn");

[].forEach.call(sections, function (e) {
    sectionsOffset[e.id] = e.offsetTop;
});
homeBtn.addEventListener("click", function (event) {
    activate(homeBtn);
});

aboutBtn.addEventListener("click", function (event) {
    activate(aboutBtn);
});

projectsBtn.addEventListener("click", function (event) {
    activate(projectsBtn);
});

contactBtn.addEventListener("click", function (event) {
    activate(contactBtn);
});

window.addEventListener("scroll", function (event) {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    for (i in sectionsOffset) {
        console.log(sectionsOffset[i] + " | " + scrollPosition);
        if (sectionsOffset[i] <= scrollPosition) {
            console.log('set!');
            document.querySelector('.active').setAttribute('class', ' ');
            document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
        }
    }
});

function activate(btn) {
    var href = btn.getAttribute("href");
    event.preventDefault();
    TweenLite.to(window, 1, { scrollTo: { y: href } });
    removeActive();
    btn.classList.add("active");
}

function removeActive() {
    var btns = document.querySelectorAll("a.active");
    [].forEach.call(btns, function (el) {
        el.classList.remove("active");
    });
}

console.log(sectionsOffset);

