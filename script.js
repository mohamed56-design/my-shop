// Loader
window.addEventListener("load", ()=>{
setTimeout(()=>{
document.getElementById("loader").style.display="none";
},2000);
});

// Text animation
let words = ["AI Creator","Video Maker","MX Vision"];
let i = 0;

setInterval(()=>{
document.getElementById("text").innerHTML = words[i];
i = (i + 1) % words.length;
},2000);

// Counters
function counter(id, max, text){
let c = 0;
let x = setInterval(()=>{
c++;
document.getElementById(id).innerHTML = c + text;
if(c >= max) clearInterval(x);
},30);
}

counter("counter1",120,"+ Projects");
counter("counter2",50,"K Views");

// Scroll button
window.onscroll = function(){
if(document.documentElement.scrollTop > 300){
document.getElementById("topBtn").style.display="block";
}else{
document.getElementById("topBtn").style.display="none";
}
};

function topFunction(){
window.scrollTo({top:0,behavior:"smooth"});
}

