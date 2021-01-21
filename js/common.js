const menuBurger = document.querySelector('.menu-burger')
const menu = document.querySelector('.menu')

menuBurger.onclick = () => {
	menu.classList.toggle('active')
}