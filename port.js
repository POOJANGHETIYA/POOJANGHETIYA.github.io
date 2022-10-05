<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>

var typed = new Typed(".auto", {

     strings: ["POOJAN GHETIYA", "Software Geek", "Backend Dev", "Cloud Engineer", "ML Enthusiast"],
     backSpeed: 70,
     typeSpeed: 60,
     loop: true,
});


function myFunction() {
     alert("Press OK to download my Resume");
}

<script src="https://code.iconify.design/iconify-icon/1.0.0/iconify-icon.min.js"></script>


function reveal() {
     var reveals = document.querySelectorAll(".skills");
     for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
          if (elementTop < windowHeight - elementVisible) {
               reveals[i].classList.add("active");
          } else {
               reveals[i].classList.remove("active");
          }
     }
}
window.addEventListener("scroll", reveal);



function reveal() {
     var reveals = document.querySelectorAll(".profiles");
     for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
          if (elementTop < windowHeight - elementVisible) {
               reveals[i].classList.add("active");
          } else {
               reveals[i].classList.remove("active");
          }
     }
}
window.addEventListener("scroll", reveal);
