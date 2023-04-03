let menu = document.querySelector(".menu");

    menu.style.transform = "translate(-100%)";

function toggle(){
    if(menu.style.transform == "translate(0%)")
    {
        menu.style.transform = "translate(-100%)";
    }
   
    else{
        menu.style.transform = "translate(0%)";
        
    }
    
};
