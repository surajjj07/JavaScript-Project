let bodyel=document.querySelector("body");

bodyel.addEventListener("mousemove",(e)=>{
    let Xpos=e.offsetX;
    let Ypos=e.offsetY;
    let span=document.createElement("span");
    span.style.left=Xpos + "px";
    span.style.top=Ypos + "px";
    let size=Math.random()*100;
    span.style.width=size + "px";
    span.style.height=size + "px";
    bodyel.appendChild(span);
    setTimeout(()=>{
        span.remove();
    },3000);
    

})