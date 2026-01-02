const title = document.getElementById("header-title");
const btn = document.getElementById("header-btn");
const header = document.getElementById("header");
const nav = document.getElementById("nav");
const overlay = document.getElementById("menu-overlay");
const close_btn = document.getElementById("close_icon");
window.addEventListener("scroll", function () {
    // Set threshold (e.g., 50px)
    const ismobile = window.innerWidth < 800;
    const isdesktop = window.innerWidth > 800;
    if (window.scrollY > 53) {
        if (isdesktop) {
            title.style.display = "none";
            btn.style.display = "none";
            header.style.justifyContent = "center";
            nav.style.marginTop = "10px";
        }
        if (ismobile) {
            title.style.display = "block";
            btn.style.display = "none";
            header.style.justifyContent = "space-between";
            nav.style.display = "none"
            nav.style.marginTop = "10px";
            close_btn.style.display = "none";
            menu_bar.style.display = "block";
        }
    } else {
        nav.style.marginTop = "";
        title.style.display = "block";
        btn.style.display = "block";
        header.style.justifyContent = "space-between";
    }
});
function closeMenu() {
    // nav.classList.remove("nav-active");
    overlay.classList.remove("overlay-active");
    nav.style.display = "none";
    close_btn.style.display = "none";
    menu_bar.style.display = "block";
}
const menu_bar = document.getElementById("menu_bar");
menu_bar.addEventListener("click", () => {
    overlay.classList.toggle("overlay-active");
    // nav.classList.toggle("nav-active");
    nav.style.display = "block";
    header.style.boxShadow = "none";
    close_btn.style.display = "block";
    menu_bar.style.display = "none";
});
close_btn.addEventListener("click", () => {
    overlay.classList.remove("overlay-active");
    nav.style.display = "none";
    menu_bar.style.display = "block";
    close_btn.style.display = "none";
});

overlay.addEventListener("click", closeMenu);
