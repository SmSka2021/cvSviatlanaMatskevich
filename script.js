"use strict";
const btnModal = document.querySelector('.modal__btn');
const modal = document.querySelector('#modal');
const modalImg = document.querySelector('.modal__img');
const arrBtnCertificates = document.querySelectorAll('.certificates__btn');
const btnOpenMenu = document.querySelector('.header__btn_openMenu');
const btnCloseMenu = document.querySelector('.header__btn_closeMenu');
const menu = document.querySelector('.nav');
const darkLayer = document.querySelector('.dark-layer');
const allNavLinks = document.querySelectorAll('.nav__link');

arrBtnCertificates.forEach((btn)=>btn.addEventListener('click',openModal));
btnModal.addEventListener('click', closeModal);
btnOpenMenu.addEventListener('click', openMenu);
btnCloseMenu.addEventListener('click', closeMenu);

function openMenu() {
    darkLayer.classList.toggle('visible');
    menu.classList.toggle('open');
    allNavLinks.forEach((link) => link.addEventListener('click',closeMenu));
}
function closeMenu() {
    darkLayer.classList.toggle('visible');
    menu.classList.toggle('open');
    allNavLinks.forEach((link) => link.removeEventListener('click',closeMenu));
}
function openModal(event) {
    switch (event.target.classList[1]){
        case 'js':
            modalImg.setAttribute('src', './assets/img/certificate_RS_frontend_stage_2.jpg');
            break;
        case 'react':
            modalImg.setAttribute('src', './assets/img/TMS.jpg');
            break;
        case 'angular':
            modalImg.setAttribute('src', './assets/img/certificate_Angular_2022.jpg');
            break;
        default:
            modalImg.setAttribute('src', './assets/img/certificate_Angular_2022.jpg');
            break;
    }
    modal.style.display = 'flex';
    scrollStop();
}
function closeModal() {
    modal.style.display = 'none';
    scrollWork();
}
function scrollStop() {
    document.body.style.position = 'fixed';
}
function scrollWork() {
    document.body.style.position = '';
}
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href').slice(1);
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

