let open = document.querySelector('.nav-open');
let close = document.querySelector('.nav-close');
let body = document.querySelector('body');

open.addEventListener('click', openSlideMenu);
close.addEventListener('click', closeSlideMenu);


function openSlideMenu(){
	document.querySelector('.nav-toggle').style.display = "block"
	open.style.opacity = "0"
	close.style.display = "block"
	
}

function closeSlideMenu(){
	document.querySelector('.nav-toggle').style.display = "none"
	open.style.opacity = "1"
	close.style.display = "none"
}
