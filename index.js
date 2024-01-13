
const slides=document.querySelectorAll(".slide")
slides.forEach(function(slide,index){
    slide.style.left=`${index*100}%`
})

const slideContainer=document.querySelector(".slide-container")
const prevbtn=document.querySelector(".prev")
const nextbtn=document.querySelector(".next")
console.log(prevbtn)
console.log(nextbtn)
var counter=0
displayslide()
prevbtn.addEventListener("click",function(){
    counter--;
    displayslide();
})
nextbtn.addEventListener("click",function(){
    counter++;
    displayslide()
})

function displayslide(){
    if(counter>0){
        prevbtn.style.display="block"
    }
    else{
        prevbtn.style.display="none"
    }
    if(counter<slides.length-1){
        nextbtn.style.display="block"
    }
    else{
        nextbtn.style.display="none"
    }
    slides.forEach(function(slide,index){
        slide.style.transform=`translateX(-${counter*100}%)`
    })
}
