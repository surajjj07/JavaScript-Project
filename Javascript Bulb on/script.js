let bulb=document.querySelector(".bulb");
let btn=document.querySelector(".btn");
let btndiv=document.querySelector("#btndiv");
let btnr=document.querySelector(".btnr");
let button=document.querySelector("button");
let bulbd=document.querySelector(".bulbd");
let bulb_div=document.querySelector("div");


let curr_mode="off";
btn.addEventListener("click",()=>{
    console.log("button was clicked..");
    if (curr_mode==="off"){
        bulb.style.backgroundColor="#dccc05";
        btndiv.style.backgroundColor="red";
        button.classList.add("btnr");
        bulb_div.classList.add("bulbd")
        
        curr_mode="on";
    }else{
        bulb.style.backgroundColor="transparent";
        btndiv.style.backgroundColor="transparent";
        button.classList.remove("btnr");
        bulb_div.classList.remove("bulbd")
        curr_mode="off";
    }
    

})