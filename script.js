
//a simple "Interactive Color Box" project

//this code is for only portfolio project on gitHub

class ColorBox {
    constructor(element) {
        this.element = element;
    }

    changeColor(color) {
        this.element.style.backgroundColor = color;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const box = new ColorBox(document.getElementById('color-box'));
    const colorInput = document.getElementById('color-input');
    const colorButton = document.getElementById('color-button');

    colorButton.addEventListener('click', () => {
        box.changeColor(colorInput.value);
    });
});
