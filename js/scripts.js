// horn()
function horn() {
    var taxiSound = document.getElementById("horn-honk");
    taxiSound.play();
    console.log('Taxi: Beep!')
};

// bells()
//function bells(){
//       var sledSound = document.getElementById("bells-sound");
//       sledSound.play();
//       console.log('Christmas Bells')
//};

// smoothScroll
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
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
function goBack() {
    window.history.go(-1);
};

// goHome
function goHome() {
    window.location.href = "https://triangle.mx/";
};

// Micron.js
document.addEventListener("DOMContentLoaded",function(){window.addEventListener("click",function(o){var e=o.target,n=e.dataset.micron,r=e.dataset.micronDuration,t=e.dataset.micronTiming,i=e.dataset.micronBind,a=e.dataset.micronId;if(void 0===n)return!1;if("true"===i){if(void 0===a)return console.log("%c Micron Error : add data-micron-id to bind an interaction","color:red"),!1;if(void 0===(c=document.getElementById(a))||null===c)return console.log("%c Micron Error : None of the DOM element reference to the declared ID","color:red"),!1;var s=c.cloneNode(!0);c.parentNode.replaceChild(s,c),s.classList.add("mjs-"+n)}else{var c;s=(c=e).cloneNode(!0);c.parentNode.replaceChild(s,c),s.classList.add("mjs-"+n)}void 0!==r?isNaN(r)?(console.log("%c Micron Error : data-micron-duration can only be number or decimal","color:red"),console.log("%c Micron Fallback : data-micron-duration set to default","color:orange"),s.style.animationDuration=".30s"):s.style.animationDuration=r+"s":s.style.animationDuration=".45s",void 0!==t?"linear"===t||"ease-in"===t||"ease-out"===t||"ease-in-out"===t?s.classList.add("mjs-"+t):(console.log("%c Micron Error : data-micron-timing currently supports linear, ease-in, ease-out and ease-in-out only","color:red"),console.log("%c Micron Fallback : data-micron-timing set to default","color:orange"),s.classList.add("mjs-ease-in-out")):s.classList.add("mjs-ease-in-out")})});var Micron=function(){var o,e;return{getEle:function(n){return void 0!=(o=document.querySelector(n))&&null!=o?(e=o.cloneNode("true"),o.parentNode.replaceChild(e,o),this):(console.log("%c Micron Error : None of the DOM element reference to the argument which is passed to getEle() method","color:red"),this)},interaction:function(o){if(void 0!==e&&null!==e){if(void 0!=o&&null!=o&&-1==o.indexOf(" ")){var n="mjs-"+o;return e.classList.add(n),this}return console.log("%c Micron Error : either you are missing an argument or trying to pass an argument with spaces to animation() method","color:red"),this}return this},duration:function(o){return void 0!=e&&null!=e?0==isNaN(o)?(e.style.animationDuration=o+"s",this):(console.log("%c Micron Error : you can only pass number or decimal as arguments to duration() method","color:red"),this):this},timing:function(o){if(void 0!=e&&null!=e){if("linear"==o||"ease-in"==o||"ease-out"==o||"ease-in-out"==o){var n="mjs-"+o;return e.classList.add(n),this}return console.log("%c Micron Error : you can only pass linear, ease-in, ease-out and ease-in-out as arguments to timing() method","color:red"),this}return this}}},micron=Micron();
