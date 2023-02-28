let c1 = document.getElementById("chapter01");
let c2 = document.getElementById("chapter02");
let c3 = document.getElementById("chapter03");
let c4 = document.getElementById("chapter04");
let c5 = document.getElementById("chapter05");
let cBox01 = document.querySelector(".chapter-1");
let cBox02 = document.querySelector(".chapter-2");
let cBox03 = document.querySelector(".chapter-3");
let cBox04 = document.querySelector(".chapter-4");
let cBox05 = document.querySelector(".chapter-5");


// box design 

c1.addEventListener("click", ()=>{
    cBox01.style.display="flex";
});
c2.addEventListener("click", ()=>{
    cBox02.style.display="flex";
});
c3.addEventListener("click", ()=>{
    cBox03.style.display="flex";
});
c4.addEventListener("click", ()=>{
    cBox04.style.display="flex";
});
c5.addEventListener("click", ()=>{
    cBox05.style.display="flex";
});


// back button js 

function goBack(){
    cBox01.style.display="none";
    cBox02.style.display="none";
    cBox03.style.display="none";
    cBox04.style.display="none";
    cBox05.style.display="none";
}