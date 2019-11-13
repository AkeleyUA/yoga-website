function form () {
	let message = {
 		loading:"Загрузка...",
 		success: "Спасибо, скоро мы с вами свяжемся!",
 		failure: "Что-то пошло не так."
 	};

 	let form = document.querySelector('.main-form'),
 		contactForm = document.getElementById('form'),
 		statusMessage = document.createElement('div');
 		statusMessage.classList.add('status');

 	function sendForm(elem) {
 		elem.addEventListener('submit', function(e){
 			e.preventDefault();
 			elem.appendChild(statusMessage);
 			;

 			let formData = new FormData(elem);

 			function postData(data) {
 				return new Promise(function(resolve, reject){
 					let request = new XMLHttpRequest();

 					request.open('POST', 'server.php');

 					request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

 					let obj = {};

					formData.forEach(function(value, key) {

					obj[key] = value;

					});

 					request.onreadystatechange = ()=>{
 						if(request.readyState < 4) {
 							resolve();
 						} else if(request.readyState === 4 && request.status == 200) {
 							resolve();
 						} else {
 							reject();
 						};
 					};

 					request.send(data);
 				});
 			}

 		
	 		function clearInput() {
	 			let input = elem.getElementsByTagName('input');

	 			for(let i = 0; i < input.length; i++) {
		 		input[i].value = '';
	 			};
	 		};
			postData(formData)
				.then(()=> statusMessage.innerHTML = message.loading)
				.then(()=> statusMessage.innerHTML = message.success)
				.catch(()=> statusMessage.innerHTML = message.failure)
				.then(clearInput)
		});	
 	};

 	sendForm(form);
 	sendForm(contactForm);
}

module.exports = form;