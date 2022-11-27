var wrapper = document.querySelector(`.darkWrapper`);
var modal = document.querySelector(`.modal`);
var registerModal = document.querySelector(`.registerModal`);
var loginModal = document.querySelector(`.loginModal`);
var modalHeading = document.querySelector(`#modal_heading`);
var modalDescription = document.querySelector(`#modal_description`);
var modalImg = document.querySelector(`#modal_image`);
var modalProgress0 = document.querySelector(`#prog0`);
var modalProgress1 = document.querySelector(`#prog1`);
var modalProgress2 = document.querySelector(`#prog2`);
var modalProgress3 = document.querySelector(`#prog3`);
var modalProgress4 = document.querySelector(`#prog4`);
var modals = [
  {
    Title: "A name here",
    Description: "Description here",
    Image: `images/test.gif`,
    Button: document.querySelector(`#creature0`),
    Progress0: 69,
    Progress1: 69,
    Progress2: 69,
    Progress3: 69,
    Progress4: 69
  },
  {
    Title: "Another name here",
    Description: "Another description here",
    Image: `images/test.gif`,
    Button: document.querySelector(`#creature1`),
    Progress0: 69,
    Progress1: 69,
    Progress2: 69,
    Progress3: 69,
    Progress4: 69
  },
  {
    Title: "Name",
    Description: "Description here",
    Image: `images/test.gif`,
    Button: document.querySelector(`#creature2`),
    Progress0: 69,
    Progress1: 69,
    Progress2: 69,
    Progress3: 69,
    Progress4: 69
  },
  {
    Title: "another",
    Description: "Description here",
    Image: `images/test.gif`,
    Button: document.querySelector(`#creature3`),
    Progress0: 69,
    Progress1: 69,
    Progress2: 69,
    Progress3: 69,
    Progress4: 69
  },
  {
    Title: "Name here",
    Description: "and another description here",
    Image: `images/test.gif`,
    Button: document.querySelector(`#creature4`),
    Progress0: 69,
    Progress1: 69,
    Progress2: 69,
    Progress3: 69,
    Progress4: 69
  },
  {
    Title: "another name here",
    Description: "and another description",
    Image: `images/test.gif`,
    Button: document.querySelector(`#creature5`),
    Progress0: 69,
    Progress1: 69,
    Progress2: 69,
    Progress3: 69,
    Progress4: 69
  },
  {
    Title: "Name here",
    Description: "another one",
    Image: `images/test.gif`,
    Button: document.querySelector(`#creature6`),
    Progress0: 69,
    Progress1: 69,
    Progress2: 69,
    Progress3: 69,
    Progress4: 69
  },
  {
    Title: "Name here",
    Description: "Description here",
    Image: `images/test.gif`,
    Button: document.querySelector(`#creature7`),
    Progress0: 69,
    Progress1: 69,
    Progress2: 69,
    Progress3: 69,
    Progress4: 69
  },
  {
    Title: "Name here",
    Description: "Description here",
    Image: `images/test.gif`,
    Button: document.querySelector(`#creature8`),
    Progress0: 69,
    Progress1: 69,
    Progress2: 69,
    Progress3: 69,
    Progress4: 69
  }
];

var flexItems = document.querySelectorAll(`.flexitem`);
var flexItemsCount = 0;
for (let x of flexItems) {
  x.innerHTML += `<h1>${modals[flexItemsCount].Title}</h1><p>${modals[flexItemsCount].Description}</p><img src="${modals[flexItemsCount].Image}"></img><button id="creature${flexItemsCount}" onclick="openModal(${flexItemsCount})">View</button>`;
  flexItemsCount++;
}


wrapper.onclick = closeModal;

function openModal(x) {
  modal.style.display = `block`;
  wrapper.style.display = `block`;

  modalHeading.innerHTML = modals[x].Title;
  modalDescription.innerHTML = modals[x].Description;
  modalImg.src = modals[x].Image;
  modalProgress0.setAttribute("value", modals[x].Progress0);
  modalProgress1.setAttribute("value", modals[x].Progress1);
  modalProgress2.setAttribute("value", modals[x].Progress2);
  modalProgress3.setAttribute("value", modals[x].Progress3);
  modalProgress4.setAttribute("value", modals[x].Progress4);
  modalImg.style.display = `inline-block`;
  document.querySelector(`#modal_extras`).style.display = `inline-block`;
  document.querySelector(`#modal_loginInput`).style.display = `none`;
};

function closeModal() {
  modal.style.display = `none`;
  loginModal.style.display = `none`;
  registerModal.style.display = `none`;
  wrapper.style.display = `none`;
};

document.querySelector(`#loginButton`).onclick = openLogin;
function openLogin() {
  loginModal.style.display = `block`;
  wrapper.style.display = `block`;
}

document.querySelector(`#registerButton`).onclick = openRegister;
function openRegister() {
  registerModal.style.display = `block`;
  wrapper.style.display = `block`;
}