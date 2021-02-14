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

	breakpoints: {
		280: {
			slidesPerView: 1,
		},
		640: {
			slidesPerView: 2,
			spaceBetween: 40,
		}
	}

});

const casesSlider = new Swiper('.cases-slider', {
	// Optional parameters
	loop: true,

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

const comboSlider = new Swiper('.combo-slider', {
	// Optional parameters
	loop: true,
	slidesPerView: 3,
	spaceBetween: 75,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		280: {
			slidesPerView: 1,
		},
		640: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		920: {
			slidesPerView: 3,
			spaceBetween: 40,
		}
	}

});

// swiper slider end


// start


// end