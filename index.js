const ratingValue = document.querySelector(".ratings")
const submitRating = document.querySelector(".submitbtn")
const finalRating = document.querySelector(".final-rating")
const chooseRating = document.querySelector(".choose-rating")
const thankYou = document.querySelector(".thankyou")

ratingValue.addEventListener("click",getValue)
submitRating.addEventListener("click",show)

function getValue(e){
        e.preventDefault()
        e.target.style.backgroundColor="orange"
        e.target.style.color="white"   
        finalRating.innerText= e.target.innerText
        console.log(e.target.innerText)              
}

function show(){
        chooseRating.style.display="none"
        thankYou.style.display="block"
        
}
