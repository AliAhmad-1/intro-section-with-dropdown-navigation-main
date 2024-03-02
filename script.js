const features = document.querySelector('.features');
const company = document.querySelector('.company');
const r_features = document.querySelector('.r-features');
const r_company = document.querySelector('.r-company');
const features_list = document.querySelector('.features-list');
const company_list = document.querySelector('.company-list');
const nav_right_features_list = document.querySelector('.nav-right-features-list');
const nav_right_company_list = document.querySelector('.nav-right-company-list');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const overlay = document.querySelector('.overlay');
close.addEventListener('click', () => {
    right_navbar.style.right = "-200px";
    overlay.style.display = 'none';

})
const right_navbar = document.querySelector('.right-navbar');
menu.addEventListener('click', () => {
    right_navbar.style.right = "0px";
    overlay.style.display = 'block';
})
var show = false






r_features.addEventListener('click', () => {
    nav_right_features_list.classList.toggle('hidden');
    if (show == false) {
        document.querySelector('.r-features img').src = "images/icon-arrow-up.svg"
        show = true
    } else {
        document.querySelector('.r-features img').src = "images/icon-arrow-down.svg"
        show = false
    }
})

features.addEventListener('click', () => {
    features_list.classList.toggle('hidden');
    company_list.classList.add('hidden');
    if (show == false) {
        document.querySelector('.features img').src = "images/icon-arrow-up.svg"
        show = true
    } else {
        document.querySelector('.features img').src = "images/icon-arrow-down.svg"
        show = false
    }
})
company.addEventListener('click', () => {
    features_list.classList.add('hidden');
    company_list.classList.toggle('hidden');
    if (show == false) {
        document.querySelector('.company img').src = "images/icon-arrow-up.svg"
        show = true
    } else {
        document.querySelector('.company img').src = "images/icon-arrow-down.svg"
        show = false
    }
})
r_company.addEventListener('click', () => {
    nav_right_company_list.classList.toggle('hidden');
    if (show == false) {
        document.querySelector('.r-company img').src = "images/icon-arrow-up.svg"
        show = true
    } else {
        document.querySelector('.r-company img').src = "images/icon-arrow-down.svg"
        show = false
    }
})