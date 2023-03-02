let c1 = document.getElementById("chapter01");
let c2 = document.getElementById("chapter02");
let c3 = document.getElementById("chapter03");
let c4 = document.getElementById("chapter04");
let c5 = document.getElementById("chapter05");
let c6 = document.getElementById("chapter06");
let c7 = document.getElementById("chapter07");
let c8 = document.getElementById("chapter08");
let c9 = document.getElementById("chapter09");
let cBox01 = document.querySelector(".chapter-1");
let cBox02 = document.querySelector(".chapter-2");
let cBox03 = document.querySelector(".chapter-3");
let cBox04 = document.querySelector(".chapter-4");
let cBox05 = document.querySelector(".chapter-5");
let cBox06 = document.querySelector(".chapter-6");
let cBox07 = document.querySelector(".chapter-7");
let cBox08 = document.querySelector(".chapter-8");
let cBox09 = document.querySelector(".chapter-9");


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
c6.addEventListener("click", ()=>{
    cBox06.style.display="flex";
});
c7.addEventListener("click", ()=>{
    cBox07.style.display="flex";
});
c8.addEventListener("click", ()=>{
    cBox08.style.display="flex";
});
c9.addEventListener("click", ()=>{
    cBox09.style.display="flex";
});

// back button js 

function goBack(){
    cBox01.style.display="none";
    cBox02.style.display="none";
    cBox03.style.display="none";
    cBox04.style.display="none";
    cBox05.style.display="none";
    cBox06.style.display="none";
    cBox07.style.display="none";
    cBox08.style.display="none";
    cBox09.style.display="none";
}


// menu slider js 

