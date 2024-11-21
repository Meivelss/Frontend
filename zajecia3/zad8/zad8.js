const form = document.querySelector(".form");
const list = document.querySelector(".list");
const input = document.querySelector(".input")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newElement = document.createElement("li");
    newElement.innerText = input.value;
    list.appendChild(newElement);
})