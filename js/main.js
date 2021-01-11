'use strict'

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

const navbar = document.querySelector('.nav');
const sticky = navbar.offsetTop;

function stickyNavBarFunction() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
        navbar.classList.add("bg-light");
        navbar.classList.add("text-blue");
    } else {
        navbar.classList.remove("sticky");
    }
}

window.addEventListener('scroll', stickyNavBarFunction);