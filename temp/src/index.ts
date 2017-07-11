import * as PIXI from "pixi.js"

const renderer = PIXI.autoDetectRenderer();

window.addEventListener("load", () => {
    document.body.appendChild(renderer.view);
    const stage = new PIXI.Container();
    alert("!!!");
});