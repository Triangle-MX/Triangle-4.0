// taxiSound
function horn(){
       var taxiSound = document.getElementById("horn-honk");
       taxiSound.play();
       console.log("Taxi: Beep!")
};

// smoothScroll
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
$(function btnContactoFadeOut() {
    $("#btn-contacto").click(function() {
        $(this).removeClass("fadeInRightBig");
        $(this).addClass("fadeOutRightBig");
        console.log("BTN-Contacto: Desaparecido");
    });
});

// goBack
function goBack(){
    window.history.go(-2)
};

// goHome
function goHome(){
    window.location.href = "https://triangle.mx";
};
