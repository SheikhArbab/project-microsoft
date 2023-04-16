const totop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 220) {
        totop.classList.add("active");
    } else {
        totop.classList.remove("active");
    }
})
