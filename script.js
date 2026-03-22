const c0_buttons = document.querySelectorAll(".col0");
const c1_buttons = document.querySelectorAll(".col1");
const r0_buttons = document.querySelectorAll(".row0");
const r1_buttons = document.querySelectorAll(".row1");

const groups = [c0_buttons,c1_buttons,r0_buttons,r1_buttons];

for (const group of groups) {
    group.forEach((elem) => 
        { 
        elem.addEventListener("mouseover", () => {
            group.forEach((button) => button.style.opacity = "1.0");
        });
        elem.addEventListener("mouseout", () => {
            group.forEach((button) => button.style.opacity = "0.4");
        });
        }
    );
}
