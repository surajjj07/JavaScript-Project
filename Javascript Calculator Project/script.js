let btn=document.querySelectorAll("button");
let inputbx=document.getElementById("input");

let curr="";

let btnarr=Array.from(btn);

btnarr.forEach(btnvalue => {
    btnvalue.addEventListener("click",(e)=>{
        
        if(e.target.innerHTML== "="){
            curr=eval(String(curr));
            inputbx.value=curr;
        }else if(e.target.innerHTML=="AC"){
            curr="";
            inputbx.value=curr;
        }else if(e.target.innerHTML=="C"){
            curr = curr.substring(0, curr.length-1);
            inputbx.value=curr
        }else{
            curr=curr+e.target.innerHTML;
            inputbx.value=curr;
        }
        
        
    })
});


