const hexadecimalNumberSystem= [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let button= document.getElementById("button")
let first=document.getElementById("first-color")
let firstText= document.getElementById("text")
let second=document.getElementById("second-color")
let secondText=document.getElementById("second-text")
let third=document.getElementById("third-color")
let thirdText=document.getElementById("third-text")

function generateRandomNumber(){
  let y= Math.floor(Math.random()*hexadecimalNumberSystem.length)
  return y
}





button.addEventListener("click", function(){
  hexcodeForFirstBox="#"
  hexcodeForSecondBox="#"
  hexcodeForThirdBox="#"
  for(let colorOne=0; colorOne<6; colorOne++){
  hexcodeForFirstBox+=hexadecimalNumberSystem[generateRandomNumber()]
 }

  first.style.backgroundColor=hexcodeForFirstBox
  firstText.textContent=hexcodeForFirstBox

  for(let colorTwo=0; colorTwo<6; colorTwo++){
    hexcodeForSecondBox+=hexadecimalNumberSystem[generateRandomNumber()]
  }
  second.style.backgroundColor=hexcodeForSecondBox
  secondText.textContent=hexcodeForSecondBox

  for(let colorThree=0; colorThree<6; colorThree++){
    hexcodeForThirdBox+=hexadecimalNumberSystem[generateRandomNumber()]
  }
  third.style.backgroundColor=hexcodeForThirdBox
  thirdText.textContent=hexcodeForThirdBox
  


 
 })

 const house={
  size:"320 sqm",
  color:"blue",
  rooms:5
 }
 let result=Object.keys(house)
house.mirror=5
house.people=20
delete house.size
house.color="red"
console.log(house)
let {color}=house
console.log(color)

let answer=Object.values(house)
console.log(answer)
let web=Object.create(house)
web.family=10
console.log(web)

const contact={
  nsi:9023356211,
  anie:816308211,
  joy:7019236731,
  mum:816307044,
  abel:8993028934,
  daddy:8028307044
}

contact.id=7033678266
contact.nelly=9120330219
delete contact.abel
console.log(contact)
let res=Object.keys(contact)
console.log(res)
let rest=Object.values(contact)
console.log(rest)
let newContact=Object.create(contact)
newContact.sanusi=92114564
console.log(newContact)

function names(){
  let message
  console.log("umofia joy")
}
names()

const eno=function(){
  console.log('important')
}
eno()

const imoh=(girl)=>{
  let message=`Hello ${girl}`
  console.log(message)
}
imoh ("joy")
imoh ("anie")
imoh ("yusuf")
imoh("issabel")

