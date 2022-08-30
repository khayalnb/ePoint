let langBtn=document.getElementById("long");
let langList=document.getElementById('lang-list');

let clickLangBtn=false;
langBtn.addEventListener('click',(e)=>{
    console.log(e.target);
    clickLangBtn=!clickLangBtn;
    return ( clickLangBtn ? langList.style.opacity="1" : langList.style.opacity="0");
});

langList.addEventListener('click',(e)=>{
  clickLangBtn=!clickLangBtn;
  langBtn.innerText=e.target.innerText;
  langList.style.opacity="0";
});