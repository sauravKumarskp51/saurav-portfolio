

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const navList = document.querySelector(".navlist");

    menuIcon.addEventListener("click", function() {
        navList.classList.toggle("active");
    });
});

