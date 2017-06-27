// Taxi
function horn(){
       var audio = document.getElementById("horn-honk");
       audio.play();
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

// Rellax.js
(function(g,b){"function"===typeof define&&define.amd?define([],b):"object"===typeof module&&module.exports?module.exports=b():g.Rellax=b()})(this,function(){var g=function(b,l){var c=Object.create(g.prototype),f=0,k=0,e=[],p=!1,t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(a){setTimeout(a,1E3/60)},m=function(a,c,d){return a<=c?c:a>=d?d:a};c.options={speed:-2,center:!1};l&&
Object.keys(l).forEach(function(a){c.options[a]=l[a]});c.options.speed=m(c.options.speed,-10,10);b||(b=".rellax");if(document.getElementsByClassName(b.replace(".","")))c.elems=document.getElementsByClassName(b.replace(".",""));else if(!1!==document.querySelector(b))c.elems=querySelector(b);else throw Error("The elements you're trying to select don't exist.");var u=function(a){var h=a.getAttribute("data-rellax-percentage"),d=a.getAttribute("data-rellax-speed"),b=h||c.options.center?document.body.scrollTop:
0,e=b+a.getBoundingClientRect().top,g=a.clientHeight||a.offsetHeight||a.scrollHeight,f=h?h:(b-e+k)/(g+k);c.options.center&&(f=.5);b=d?m(d,-10,10):c.options.speed;if(h||c.options.center)b=m(d||c.options.speed,-5,5);h=Math.round(100*b*(1-f));a=a.style.cssText;d="";0<=a.indexOf("transform")&&(d=a.indexOf("transform"),d=a.slice(d),d=(f=d.indexOf(";"))?" "+d.slice(11,f).replace(/\s/g,""):" "+d.slice(11).replace(/\s/g,""));return{base:h,top:e,height:g,speed:b,style:a,transform:d}},q=function(){var a=f;
f=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return a!=f?!0:!1},r=function(){q()&&!1===p&&n();t(r)},n=function(){for(var a=0;a<c.elems.length;a++){var b=" translate3d(0,"+(Math.round(100*e[a].speed*(1-(f-e[a].top+k)/(e[a].height+k)))-e[a].base)+"px,0)"+e[a].transform;c.elems[a].style.cssText=e[a].style+"-webkit-transform:"+b+";-moz-transform:"+b+";transform:"+b+";"}};c.destroy=function(){for(var a=0;a<c.elems.length;a++)c.elems[a].style.cssText=
e[a].style;p=!0};(function(){k=window.innerHeight;q();for(var a=0;a<c.elems.length;a++){var b=u(c.elems[a]);e.push(b)}window.addEventListener("resize",function(){n()});r();n()})();return c};return g});