/*Burger Menu*/
 const iconMenu = document.querySelector('.menu__icon');
 if (iconMenu) {
    const menuBody = document.querySelector('.nav');
    const headerMob = document.querySelector('.header');
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        headerMob.classList.toggle('active__nav');
        menuBody.classList.toggle('active');
    })
 }
