const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const bottom = document.querySelector('.bottom');


let slideNumber = 1;

const length = images.length;


for (let i = 0; i < length; i++) {
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div)
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "green";


const resetBackGround = () => {
    buttons.forEach(button => {
        button.style.backgroundColor = "transparent";
    });
};

buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        resetBackGround();
        slider.style.transform = `translateX(-${i * 800}px)`
        slideNumber = i + 1;
        button.style.backgroundColor = "green";
    })
})

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++;
}
const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
    slideNumber--;
}
const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}
const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
    slideNumber = length;
}

const changeColor = () => {
    resetBackGround();
    buttons[slideNumber - 1].style.backgroundColor = "green";
}


right.addEventListener("click", () => {
    if (slideNumber < length) {
        nextSlide();
    } else {
        getFirstSlide();
    }
    changeColor();
});

left.addEventListener("click", () => {
    if (slideNumber > 1) {
        prevSlide();
    } else {
        getLastSlide();
    }
    changeColor();
});