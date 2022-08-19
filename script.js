

const isMobile = {
    Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (isMobile.Android() || 
        isMobile.BlackBerry() || 
        isMobile.iOS() || 
        isMobile.Opera() || 
        isMobile.Windows());
	}
};

if (isMobile.any()){
    document.body.classList.add('._touch');
} else {
    document.body.classList.add('._pc');
}

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