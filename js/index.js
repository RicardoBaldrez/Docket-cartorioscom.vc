$(document).ready(function() {

    $('.nossas-solucoes').click(scrollTop);
    $('.botao_solicitaCarousel').click(scrollTop);

    /* Animation scroll */
    function scrollTop () {

        var topoNossasSolucoes = $('.titulo_nossasSolucoes').offset().top;
        
        $('body, html').animate({
        
             scrollTop: (topoNossasSolucoes - 50) + 'px'

        }, 1200);
    };
});

var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {
    slideIndex = 1
}    
if (n < 1) {
    slideIndex = slides.length
}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}