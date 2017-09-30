// horn()
function horn(){
       var taxiSound = document.getElementById("horn-honk");
       taxiSound.play();
       console.log('Taxi: Beep!')
};

// pop()
    //function pop(){
    //    var popSound = document.getElementById('pop-sound');
    //    popSound.play();
    //    console.log('Something Clicked!');
    //};

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
    window.location.href = "https://triangle.mx";
};
