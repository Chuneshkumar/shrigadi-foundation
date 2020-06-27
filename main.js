var primaryColor = "#1890F0";
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.create({
  trigger: ".right",
  start: "top top",
  end:"70% 30%",
  pin:true
});

var tl = new TimelineLite();
tl.to("#_1 circle", 1, { fill: "#fff"})
  .to("#_1 text",   1, { fill: primaryColor}, "-=1")
  .to("#_2 circle", 1, { fill: primaryColor})
  .to("#_2 text",   1, { fill: "#fff"}, "-=1")
  .to("#_2 circle", 1, { fill: "#fff"} )
  .to("#_2 text",   1, { fill: primaryColor}, "-=1")
  .to("#_3 circle", 1, { fill: primaryColor})
  .to("#_3 text",   1, { fill: "#fff"}, "-=1")
  .to("#_3 text",   1, { fill: primaryColor})
  .to("#_3 circle", 1, { fill: "#fff"})
  .to("#_4 circle", 1, { fill: primaryColor})
  .to("#_4 text",   1, { fill: "#fff"}, "-=1")
  .to("#_4 circle", 1, { fill: "#fff"})
  .to("#_4 text",   1, { fill: primaryColor}, "-=1")
  .to("#_5 circle", 1, { fill: primaryColor})
  .to("#_5 text",   1, { fill: "#fff"}, "-=1")
  .to("#_5 circle", 1, { fill: "#fff"})
  .to("#_5 text",   1, { fill: primaryColor}, "-=1")
  .to("#_6 circle", 1, { fill: primaryColor})
  .to("#_6 text",   1, { fill: "#fff"}, "-=1");

ScrollTrigger.create({
    trigger: ".left",
    toggleActions: "restart pause reverse pause",
    scrub:true,
    start: "top top",
    endTrigger:".five",
    end: "top",
    animation:tl
});

var tl2 = new TimelineLite();
tl2.fromTo("section", 1,{ opacity:0},{opacity:1})
    .fromTo("section .solutions .left", 1,{ opacity:0},{opacity:1})
    .fromTo("section .solutions .right",1,{ opacity:0},{opacity:1}, "-=1");
ScrollTrigger.create({
  trigger:"section",
  toggleActions:"play complete resume reset",
  start: "top 80%",
  // id: "section",
  // markers:true,
  animation: tl2
});

var tl3 = new TimelineLite();
tl3.fromTo(".readSec", .25, {opacity:0},{opacity:1} )
   .fromTo(".readSec .left", 1, {opacity:0},{opacity:1})
   .fromTo(".readSec .right", 1, {opacity:0},{opacity:1}, "-=0.5");
ScrollTrigger.create({
  trigger:".readSec",
  toggleActions: "play complete resume reset",
  start: "top 80%",
  animation: tl3
});
var tl4 = new TimelineLite();
tl4.fromTo(".olSec", .25, {opacity:0},{opacity:1} )
   .fromTo(".olSec .left", 1, {opacity:0},{opacity:1})
   .fromTo(".olSec .right", 1, {opacity:0},{opacity:1}, "-=0.5");
ScrollTrigger.create({
  trigger:".olSec",
  toggleActions: "play complete resume reset",
  start: "top 80%",
  animation: tl4
});
var tl5 = new TimelineLite();
tl5.fromTo(".speakSec", .5, {opacity:0},{opacity:1} )
   .fromTo(".speakSec .left", 1, {opacity:0},{opacity:1})
   .fromTo(".speakSec .right", 1, {opacity:0},{opacity:1}, "-=0.5");
ScrollTrigger.create({
  trigger:".speakSec",
  toggleActions: "play complete resume reset",
  start: "top 80%",
  // id:"speak",
  // markers:true,
  animation: tl5
});
var tl6 = new TimelineLite();
tl6.fromTo(".writeSec", 1, {opacity:0},{opacity:1} )
   .fromTo(".writeSec .left", 1, {opacity:0},{opacity:1})
   .fromTo(".writeSec .right", 1, {opacity:0},{opacity:1}, "-=0.5");
ScrollTrigger.create({
  trigger:".writeSec",
  toggleActions: "play complete resume reset",
  start: "top 80%",
  // id:"write",
  // markers:true,
  animation: tl6
});

console.log(window.innerWidth);

document.querySelector("nav div.Menu svg").addEventListener("click", (e)=>{
  console.log("Clicked");
  if(getComputedStyle(document.querySelector("nav div.Menu ul")).opacity == 1){
    console.log("Menu open");
    document.querySelector("nav div.Menu ul").style.display="none";
    document.querySelector("nav div.Menu ul").style.opacity=0;
    document.querySelector("nav div.Menu svg").style.top="90%";
  }
  else{

    document.querySelector("nav div.Menu ul").style.display="block";
    document.querySelector("nav div.Menu ul").style.opacity=1;
    document.querySelector("nav div.Menu svg").style.top="30%";
  }
});

window.addEventListener("resize", resizeHandler);
window.addEventListener("DOMContentLoaded", resizeHandler());
function resizeHandler(){
  console.log("window resized", window.innerWidth);
  if(window.innerWidth>1000)
  {
    document.querySelector("nav div.Menu ul").style.display="flex";
    document.querySelector("nav div.Menu ul").style.opacity=1;
  }
  if(window.innerWidth>680){
    document.querySelector("nav div.Menu ul").style.display="flex";
    document.querySelector("nav div.Menu ul").style.opacity=1;
  }
  else{
    document.querySelector("nav div.Menu svg").style.top="90%";
    document.querySelector("nav div.Menu ul").style.display="none";
    document.querySelector("nav div.Menu ul").style.opacity=0;
  }
}
