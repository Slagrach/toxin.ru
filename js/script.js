window.onload = function () {
	document.addEventListener('click', documentActions);

	function documentActions(e) {
		const targetElement = e.target;
		if (window.innerWidth > 768 && isMobile.any()) {
			if (targetElement.classList.contains('menu__arrow')) {
				targetElement.closest('.menu__item').classList.toggle('_hover');
			}
			if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
				_removeClasses(document.querySelectorAll('.menu__item._hover'), '_hover');
			}
		}
		if (targetElement.classList.contains('select-item__placeholder')) {
			targetElement.closest('.select-item__box').classList.toggle('_open');
		}
		if (!targetElement.closest('.select-item__box') && document.querySelectorAll('.select-item__box._open').length > 0) {
			_removeClasses(document.querySelectorAll('.select-item__box._open'), '_open');
		}
	}
};


$('.form__date').datepicker();


$('.slider__body').slick({
	dots: true,
	adaptiveHeight: true,
	nextArrow: getButton('next'),
	prevArrow: getButton('prev'),
});
function getButton(type) {
	return `<div class="slider__control-${type} _icon-more"></div>`;
}
$('.room__slider').slick({
	arrows: false,
	dots: true
});
