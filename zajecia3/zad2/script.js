const textValue = document.querySelector(".text-value");
const increaseButton = document.getElementById("1");
const ColorButton = document.getElementById("2");

increaseButton.addEventListener('click', () => {
    console.log(textValue);
    textValue.innerText = parseInt((textValue.innerText), 10) + 1;
    console.log("click")
});

ColorButton.addEventListener('click',  () => {
    textValue.classList.toggle("red-text");
    console.log("click")
});