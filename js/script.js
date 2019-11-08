window.addEventListener('DOMContentLoaded', () => {
	'use strict';


	// Табы

	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', (event) => {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	})

	// Таймер

	let deadline = '2019-01-09';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor((t/1000) % 60),
		minutes = Math.floor((t/1000/60) % 60),
		hours = Math.floor((t/(1000*60*60)));
		return {
			'total' : t,
			'hours' : hours,
			'minutes' : minutes,
			'seconds' : seconds
		}
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
		hours = timer.querySelector('.hours'),
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds'),
		timeInterval = setInterval(updateClock, 1);


		function updateClock() {
			let t = getTimeRemaining(endtime);

			function updateZero(time){
				if (time <= 9) {
					return '0' + time;
				} else {
					return time;
				}
			}

			hours.textContent = updateZero(t.hours);
			minutes.textContent = updateZero(t.minutes);
			seconds.textContent = updateZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';
			}
		}
		
	}

	setClock('timer', deadline);

	//Модал

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
		})
 	})

 	// Форма

 	let message = {
 		loading:"Загрузка...",
 		success: "Спасибо, скоро мы с вами свяжемся!",
 		failure: "Что-то пошло не так."
 	};

 	let form = document.querySelector('.main-form'),
 		input = form.getElementsByTagName('input'),
 		contactForm = document.getElementById('form'),
 		contactInputs = contactForm.getElementsByTagName('input'),
 		statusMessage = document.createElement('div');

 		statusMessage.classList.add('status');

 	form.addEventListener('submit', (e) => {
 		e.preventDefault();
 		form.appendChild(statusMessage);

		let request = new XMLHttpRequest();
			request.open('POST','server.php');
			request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

		let formData = new FormData(form);

		let obj = {};
		formData.forEach(function(value, key) {
			obj[key] = value;
		});

		let json = JSON.stringify(obj);
 		request.send(json);

		request.addEventListener('readystatechange', ()=>{
			if(request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if(request.readyState === 4 && request.status == 200 ){
				statusMessage.innerHTML = message.success;
			} else {
				statusMessage.innerHTML = message.failure;
			}
		});

		for(let i = 0; i < input.length; i++) {
			input[i].value = '';
		}
	});

	contactForm.addEventListener('submit', (e) => {
		e.preventDefault();
		contactForm.appendChild(statusMessage);

		let request = new XMLHttpRequest();
			request.open('POST','server.php');
			request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

		let formData = new FormData(contactForm);

		let obj = {};
		formData.forEach(function(value, key) {
			obj[key] = value;
		});

		let json = JSON.stringify(obj);
 		request.send(json);

		request.addEventListener('readystatechange', () => {
			if(request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if(request.readyState === 4 && request.status == 200 ){
				statusMessage.innerHTML = message.success;
			} else {
				statusMessage.innerHTML = message.failure;
			} 
		});

		for(let i = 0; i < contactInputs.length; i++) {
			contactInputs[i].value = '';
		}
	});
});