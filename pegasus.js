var slideIndex = 0;
var slideDirection = 1;
var slideTimeout;

function showSlides() {
  var slides = document.getElementsByClassName("mySlides")[0];
  var slideWidth = slides.offsetWidth; 

  for (var i = 0; i < slides.children.length; i++){
    slides.children[i].style.width = slideWidth + "px";
  }

  slideIndex += slideDirection;
  
  if (slideIndex >= slides.children.length){
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.children.length - 1;
  }

  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  slideTimeout = setTimeout(showSlides, 3500); 
}

function plusSlides(n){
  clearTimeout(slideTimeout);
  slideIndex += n;
  showSlides();
}

function pauseSlides(){
  clearTimeout(slideTimeout);
}

showSlides();