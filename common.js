const menuIcon = document.querySelector("#menu-icon");
const menuItems = document.querySelector("#menu-items");
const displayMenu = document.querySelector("#display-menu");

function toggleMenu() {
    if (menuItems.style.display === "flex") {
        menuItems.style.display = "none";
        displayMenu.style.backgroundColor = "#F2F4FC";
        menuIcon.style.backgroundColor = "#F2F4FC";
        
    } else {
        menuItems.style.display = "flex";
        displayMenu.style.backgroundColor = "#C8C8C8";
        menuIcon.style.backgroundColor = "#C8C8C8";
  }
}

menuIcon.addEventListener("click", toggleMenu);