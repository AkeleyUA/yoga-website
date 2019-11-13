function timer() {

	let deadline = '2019-12-09';

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
}

module.exports = timer;