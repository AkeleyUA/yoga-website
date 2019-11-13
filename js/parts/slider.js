function slider () {

 	let slideIndex = 1,
 		slids = document.querySelectorAll('.slider-item'),
 		prev = document.querySelector('.prev'),
 		next = document.querySelector('.next'),
 		dotsWrap = document.querySelector('.slider-dots'),
 		dots = document.querySelectorAll('.dot');

 	showSlides(slideIndex);

 	function showSlides(n) {

 		if(n > slids.length) {
 			slideIndex = 1;
 		}
 		if(n < 1) {
 			slideIndex = slids.length;
 		}

 		slids.forEach((i) => i.style.display = 'none');
 		dots.forEach((i) => i.classList.remove('dot-active'));

 		slids[slideIndex - 1].style.display = 'block';
 		dots[slideIndex - 1].classList.add('dot-active');
 	}

 	function plusSlides(n) {
 		showSlides(slideIndex += n);
 	}
 	function currentSlide(n) {
 		showSlides(slideIndex = n);
 	}

 	prev.addEventListener('click', ()=>{
 		plusSlides(-1);
 	});
 	next.addEventListener('click', ()=>{
 		plusSlides(1);
 	});

 	dotsWrap.addEventListener('click', (e) => {
 		for(let i = 0; i < dots.length + 1; i++) {
 			if(e.target.classList.contains('dot') && e.target == dots[i-1]){
 				currentSlide(i);
 			}
 		}
 	});
 }

 module.exports = slider;