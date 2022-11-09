





// // type-text efet start



var text =[' Desiger',' Psd to Htmal' ,'100% Responsiv',"this is 3"];
var counter=0;
var index=0;
var carrentText='';
var latter='';
var number=3;

function type(){
    if (counter==text.length){
        counter=0;
    }
    carrentText=text[counter];
    latter = carrentText.slice(0,index++);
    document.querySelector(".typeText").textContent=latter;
    if (latter.length === carrentText.length){
        counter++;
        index=0;


    }

   
    setTimeout(type,300);
   

}
type();

// // end type text


function clm(){
    var clm=document.querySelector(".MainDiv")
    clm.classList.toggle("mn");
}