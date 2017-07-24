// Taxi
function horn(){
       var taxiSound = document.getElementById("horn-honk");
       taxiSound.play();
};

// Smooth Scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// BTN-Contacto fadeOut
$(function() {
    $("#btn-contacto").click(function() {
        $(this).removeClass("fadeInRightBig");
        $(this).addClass("fadeOutRightBig");
    });
});

// Home Redirection
function goBack(){
    window.history.go(-2)
};

// Home Redirection
function goHome(){
    window.location.href = "https://www.triangle.mx";
};
