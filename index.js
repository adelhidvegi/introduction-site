//smooth scrolling to anchor element
function scrollToAnchorOnClick() {
  const anchorInNavbar = document.querySelectorAll('a[href^="#"]');

  anchorInNavbar.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      let anchorTag = document.querySelector(anchor.getAttribute("href"));
      e.preventDefault();
      anchorTag.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    });
  });
}

//display hamburger menu
const navBar = document.getElementsByClassName("navbar")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];
const toggleButtonContainer = document.getElementsByClassName(
  "toggle-button-container"
)[0];

function displaySideMenuOnMobile() {
  const toggleButton = document.getElementsByClassName("toggle-button")[0];
  const hamburgerBars = document.querySelectorAll(".bar");
  const cvDownloadLink = document.getElementsByClassName("cv-btn")[0];

  toggleButton.addEventListener("click", () => {
    navBar.classList.toggle("active");
    navLinks.classList.toggle("active");
    toggleButtonContainer.classList.toggle("active");
    cvDownloadLink.classList.add("nav-link");
  });
}

//hamburger menu closing on click
function closeSideMenuOnClick() {
  const navLinkArray = document.querySelectorAll(".nav-link");

  navLinkArray.forEach((navLink) => {
    navLink.addEventListener("click", () => {
      navBar.classList.remove("active");
      navLinks.classList.remove("active");
      toggleButtonContainer.classList.remove("active");
    });
  });
}

//message sending form validation
function validateFormInputs() {
  const nameInput = document.getElementById("name-input");
  const emailInput = document.getElementById("email-input");
  const messageInput = document.getElementById("message-input");
  const submitBtn = document.getElementById("submit-btn");

  submitBtn.addEventListener("click", (e) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    e.preventDefault();
    if (nameInput.value === "" || nameInput.value === null) {
      nameInput.placeholder = "Name is required.";
      nameInput.className = "red";
    }
    if (messageInput.value === "" || messageInput.value === null) {
      messageInput.placeholder = "Message is required.";
      messageInput.className = "red";
    }
    if (emailInput.value === "" || emailInput.value === null) {
      emailInput.placeholder = "Email address is required.";
      emailInput.className = "red";
    } else if (!emailInput.value.match(regex)) {
      emailInput.value = "";
      emailInput.placeholder = "Invalid email address.";
      emailInput.className = "red";
    }
  });
}

function main() {
  scrollToAnchorOnClick();
  validateFormInputs();
  displaySideMenuOnMobile();
  closeSideMenuOnClick();
}

window.addEventListener("load", main);
