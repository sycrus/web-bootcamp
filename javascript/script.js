const menuToggle = document.querySelector("menu-toggle");
const activeElements = document.querySelector(".active-elemet");
const toggledMenu = menuToggle.addEventListener("click", function() {
    for (const activated = 0; activated < activeElements.length ; activated++) {
        activeElements[activated].classList.toggle("active";)
    }
}