function modal () {

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		descriptionBtn = document.querySelectorAll('.description-btn');


	more.addEventListener('click', function() {
		overlay.style.display = 'block';
		more.classList.add('more-splash');
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', function() {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	descriptionBtn.forEach((tab) => {
 		tab.addEventListener('click', () => {
			overlay.style.display = 'block';
			more.classList.add('more-splash');
			document.body.style.overflow = 'hidden';
		});
 	});
}

module.exports = modal;