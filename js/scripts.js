// horn()
function horn(){
       var taxiSound = document.getElementById("horn-honk");
       taxiSound.play();
       console.log('Taxi: Beep!')
};

// bells()
function bells(){
       var sledSound = document.getElementById("bells-sound");
       sledSound.play();
       console.log('Christmas Bells')
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

// goBack
function goBack(){
    window.history.go(-1);
};

// goHome
function goHome(){
    window.location.href = "https://triangle.mx/";
};
