// --------------night mode start------------------------

const nightMode = document.querySelector(".iccon-moon")
const sunIcon = document.querySelector(".sunIcon")

nightMode.addEventListener("click",function(){
    const bodyBackgraound = document.querySelector("body");
    bodyBackgraound.classList.toggle('nightMode');
    bodyBackgraound.style.backgroundColor="rgba(0, 0, 0,0.9)";
    // nightMode.backgroundColor="black";
    sunIcon.style.color="blue"
    

})

sunIcon.addEventListener('click',function(){
    const bodyBackgraound = document.querySelector("body");
    bodyBackgraound.classList.remove('nightMode');
    bodyBackgraound.style.backgroundColor="rgba(169, 176, 189, 0.3)";
    sunIcon.style.color='rgba(169, 176, 189, 0.0)';
})

// ---------------night mode end--------------------------------------


// ----------------------Typing Text start-------------------------------

var text=['FontEnd-Devoloper','backEndDevloper','logo design','canva-design'];
var  correntText="";
var lettar='';
var counter=0;
var index=0;

function typingText(){
    if(counter==text.length){
        counter=0;
    }
    correntText=text[counter];
    lettar=correntText.slice(0,index++);
    document.querySelector(".afterAndbefore").innerHTML=lettar;
    if(correntText.length==lettar.length){
        counter++;
        index=0
    }
    setTimeout(typingText,300)
}
typingText();


// <-----------Moblie devise ar Icon show start-------------------->
const mobileIcon =document.querySelector('.mobileIcon');
const mobilemebuCancel =document.querySelector('.mobilemebuCancel');

mobileIcon.addEventListener('click',()=>{

const mobileIconDiv =document.querySelector('.mobilemebu');
mobileIconDiv.classList.toggle('mobileIconShow');

    
})

mobilemebuCancel.addEventListener('click',()=>{

    const mobileIconDiv =document.querySelector('.mobilemebu');
    mobileIconDiv.classList.remove('mobileIconShow');
    
})
// <-----------Moblie devise ar Icon show start-------------------->



window.addEventListener("scroll",()=>{
  const mainDiv=document.querySelector(".menuBar");
   const mathScoller=Math.floor(window.pageYOffset)

   if(mathScoller==6 || mathScoller==12 || mathScoller==16 || mathScoller==20 ){
        mainDiv.style.backgroundColor='#434e634d';

   }
   else{
        mainDiv.style.backgroundColor='#434e634d';
   }
  
})