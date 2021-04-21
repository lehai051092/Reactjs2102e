let h2Element = document.getElementById("title");
let buttonElement = document.getElementsByTagName("button");
let elements = document.getElementsByClassName("bg-grey");

console.log("h2", h2Element);
console.log("button", buttonElement);
console.log("bg grey", elements);

h2Element.style.color = "yellow";
buttonElement[0].style.color = "blue";
elements[0].style.backgroundColor = "grey";

// set all

for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "grey";
}

// h3Element.className = "big-size";
h2Element.classList.add("big-size");
h2Element.classList.remove("remove-test");
h2Element.title = "Title";

// Create element
let selectionElement = document.createElement("section");
let h3Section = document.createElement('h3');
let pSection = document.createElement('p');

document.body.appendChild(selectionElement);
selectionElement.appendChild(h3Section);
selectionElement.appendChild(pSection);

h3Section.innerText = "Javascript";
pSection.innerText = "This is javascript course day 7";
selectionElement.classList.add("center");
selectionElement.classList.add("bg-lavender");
h3Section.classList.add("color__green");
pSection.classList.add("color__white");

let h3Elements = document.getElementsByTagName('h3');
console.log('h3 elements', h3Elements)

h3Elements[0].style.border = "1px solid black";

let h3QuerySelector = document.querySelector('h3');
console.log('query selector', h3QuerySelector);

let h3QuerySelectorAll = document.querySelectorAll('h3');
console.log('query selector all', h3QuerySelectorAll);