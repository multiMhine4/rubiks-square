import Square from './square-util.js'

const Sqr = new Square( document.getElementById("square") );

const c0_buttons = document.querySelectorAll(".col0");
const c1_buttons = document.querySelectorAll(".col1");
const r0_buttons = document.querySelectorAll(".row0");
const r1_buttons = document.querySelectorAll(".row1");
const htmlDOM = document.querySelector('html');

const groups = [c0_buttons,c1_buttons,r0_buttons,r1_buttons];

function toDefault(button) {
    return () => {
        button.style.color = "var(--cube-gray)";
        button.style.transform = "scale(1)";
        if (button.matches(":hover")) {
            button.style.opacity = "1.0";
        } else {
            button.style.opacity = "0.4";
        }
    }
}

for (const group of groups) {
    group.forEach((elem) => 
        { 
        elem.addEventListener("mouseover", () => {
            group.forEach((button) => button.style.opacity = "1.0");
        });
        elem.addEventListener("mouseout", () => {
            group.forEach((button) => button.style.opacity = "0.4");
        });
        elem.addEventListener("mousedown", () => {
            group.forEach((button) => {
                button.style.opacity = "1.0";
                button.style.color = "#333333";
                button.style.transform = "scale(0.7)";
                htmlDOM.addEventListener("mouseup", toDefault(button), {once: true});
            });
        }); 
    });
}

for (const button of c0_buttons) {
    button.addEventListener("mousedown", () => {
        Sqr.turn("L");
    });
}
for (const button of c1_buttons) {
    button.addEventListener("mousedown", () => {
        Sqr.turn("R");
    });
}
for (const button of r0_buttons) {
    button.addEventListener("mousedown", () => {
        Sqr.turn("U");
    });
}
for (const button of r1_buttons) {
    button.addEventListener("mousedown", () => {
        Sqr.turn("D");
    });
}
