let sections = document.querySelectorAll('section');
let sectionsOffset = {};
let i = 0;
let currentSection = "home";
let homeBtn = document.querySelector("#homeBtn");
let aboutBtn = document.querySelector("#aboutBtn");
let projectsBtn = document.querySelector("#projectsBtn");
let contactBtn = document.querySelector("#contactBtn");

[].forEach.call(sections, function (e) {
    sectionsOffset[e.id] = { top: e.offsetTop, bottom: e.offsetTop + e.offsetHeight };
});

homeBtn.addEventListener("click", (event) => { 
    activate(homeBtn);
});

aboutBtn.addEventListener("click", (event) => {
    activate(aboutBtn);
});

projectsBtn.addEventListener("click", (event) => {
    activate(projectsBtn);
});

contactBtn.addEventListener("click", (event) => {
    activate(contactBtn);  
});

window.addEventListener("load", (event) => {
    activate(homeBtn);
});

window.addEventListener("scroll", (event) => {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;   
    checkOffset(scrollPosition);
});

function activate(btn) {
    let href = btn.getAttribute("href");
    event.preventDefault(); 
    TweenLite.to(window, 1, { scrollTo: { y: href } });
    removeActive();
    btn.classList.add("active");
}

function removeActive() {
    let btns = document.querySelectorAll("a.active");
    [].forEach.call(btns, function (el) {
        el.classList.remove("active");
    });
}

function checkOffset(scrollPosition) {
    for (i in sectionsOffset) {
        if (scrollPosition >= sectionsOffset[i].top && scrollPosition < sectionsOffset[i].bottom) {
            history.replaceState("data",
                "title",
                location.origin + location.pathname + "#" +
                i);
            document.querySelector('.active').setAttribute('class', '');
            document.querySelector('a[id*=' + i + ']').setAttribute('class', 'active');
        }
    }
}

console.log(sectionsOffset);