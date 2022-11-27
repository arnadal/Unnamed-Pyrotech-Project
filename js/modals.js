var flexItems = document.querySelectorAll(`.flexitem`);
var flexItemsCount = 0;
for (let x of flexItems) {
  x.innerHTML += `<button id="creature${flexItemsCount}">View</button>`;
  flexItemsCount++;
}

var wrapper = document.querySelector(`.darkWrapper`);
var modal = document.querySelector(`.modal`);
var modals = [
  {
    Title: "Name here",
    Description: "Description here",
    Button: document.querySelector(`#creature0`)
  },
  {
    Title: "Another name here",
    Description: "Another description here",
    Button: document.querySelector(`#creature1`)
  },
  {
    Title: "Name here",
    Description: "Description here",
    Button: document.querySelector(`#creature2`)
  },
  {
    Title: "Name here",
    Description: "Description here",
    Button: document.querySelector(`#creature3`)
  },
  {
    Title: "Name here",
    Description: "Description here",
    Button: document.querySelector(`#creature4`)
  },
  {
    Title: "Name here",
    Description: "Description here",
    Button: document.querySelector(`#creature5`)
  },
  {
    Title: "Name here",
    Description: "Description here",
    Button: document.querySelector(`#creature6`)
  },
  {
    Title: "Name here",
    Description: "Description here",
    Button: document.querySelector(`#creature7`)
  },
  {
    Title: "Name here",
    Description: "Description here",
    Button: document.querySelector(`#creature8`)
  }
];

for (let i = 0; i < modals.length; i++) {
  modals[i].Button.onclick = openModal;
}

wrapper.onclick = closeModal;

function openModal() {
  modal.style.display = `block`;
  wrapper.style.display = `block`;
};

function closeModal() {
  modal.style.display = `none`;
  wrapper.style.display = `none`;
};