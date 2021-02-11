const menuBurger = document.querySelector('.menu-burger')
const menu = document.querySelector('.menu')

menuBurger.onclick = () => {
	menu.classList.toggle('active')
}


// swiper slider start

const reviewSlider = new Swiper('.review-slider', {
	// Optional parameters
	loop: true,
	slidesPerView: 2,
	spaceBetween: 75,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

});

// swiper slider end


// start


// end