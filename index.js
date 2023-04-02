
const meterParagraph=document.getElementById("meter-p");
const literParagraph=document.getElementById("liter-p");
const kiloParagraph=document.getElementById("kilo-p");
let btn=document.getElementById("btn");
let inputValue=document.getElementById("input")

btn.addEventListener("click",function(){
  
  let mp=`${inputValue.value} meters = ${(inputValue.value*3.281).toFixed(3) } feet
   | ${inputValue.value} feet = ${(inputValue.value*0.3048).toFixed(3)} meters`;
   meterParagraph.textContent=mp;
   localStorage.setItem("meter-p",(mp));

   let kp=`${inputValue.value} kilos = ${(inputValue.value*2.204).toFixed(3) } pounds
   | ${inputValue.value} pounds = ${(inputValue.value*0.453592).toFixed(3)} kilos`;
   kiloParagraph.textContent=kp;
   localStorage.setItem("kilo-p",(kp));

   let lp=`${inputValue.value} liter = ${(inputValue.value*0.264).toFixed(3) } gallons
   | ${inputValue.value} gallons = ${(inputValue.value*3.78541).toFixed(3)} liter`;
   literParagraph.textContent=lp;
   localStorage.setItem("liter-p",(lp));
})
meterParagraph.textContent=localStorage.getItem("meter-p")
kiloParagraph.textContent=localStorage.getItem("meter-p")
literParagraph.textContent=localStorage.getItem("liter-p")