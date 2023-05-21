// for displaying the navbar and hiding while scroll
const nav = document.querySelector("nav");

let lastScrollY =  window.scrollY;

window.addEventListener("scroll" , () => {
    if(lastScrollY < window.scrollY){
        nav.classList.add("nav__hidden");
    }else{
        nav.classList.remove("nav__hidden");
    }

    lastScrollY= window.scrollY;
})

// for scroll back to top button

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//-----------adding animation to text------//

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i =0; i<reveals.length;i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 0;

        if(revealtop< windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

//----- adding animation to images---- //

window.addEventListener('scroll', image);

function image(){
    var images = document.querySelectorAll('.image');

    for(var i =0; i<images.length;i++){
        var windowheight = window.innerHeight;
        var imagetop = images[i].getBoundingClientRect().top;
        var imagepoint =200;

        if(imagetop< windowheight - imagepoint){
            images[i].classList.add('active');
        }
        else{
            images[i].classList.remove('active');
        }
    }
}