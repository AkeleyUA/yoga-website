function calc () {

	let persons = document.querySelectorAll('.counter-block-input')[0],
 		restDays = document.querySelectorAll('.counter-block-input')[1],
 		place = document.getElementById('select'),
 		totalValue = document.getElementById('total'),
 		personsSum = 0,
 		daysSum = 0,
 		total = 0;

 	totalValue.innerHTML = 0;

 	persons.addEventListener('input', function() {
 		personsSum = +this.value;
 		total = daysSum * 4000 * personsSum;

 		if(restDays.value == '' || restDays.value == 0) {
 			totalValue.innerHTML = 0;
 		} else {
 			totalValue.innerHTML = total;
 		}

 	});

 	restDays.addEventListener('input', function() {
 		daysSum = +this.value;
 		total = daysSum * 4000 * personsSum;

 		if(persons.value == '' || persons.value == 0) {
 			totalValue.innerHTML = 0;
 		} else {
 			totalValue.innerHTML = total;
 		}

 	});
	
 	place.addEventListener('change', function(){
 		if(restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0) {
 			totalValue.innerHTML = 0;
 		} else {
 			let a = total;
 			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
 		
 		}
 	
 	});
 }

 module.exports = calc;