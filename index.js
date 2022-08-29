const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".close-menu");
// const dropdownContainer = document.getElementById("1")
// const dropdown = document.querySelector(".dropdown");

menu.addEventListener('click', function() {
    hamburger.style.display = "flex";
})

closeMenu.addEventListener('click', function() {
    hamburger.style.display = "none";
})

// dropdownContainer.addEventListener('click', function() {
//     dropdown.classList.toggle(".dropdown-container:hover .dropdown");
//     // dropdown.style.display = "block";
// })