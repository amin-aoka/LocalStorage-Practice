let inpKey = document.getElementById("inpKey");
let inpValue = document.getElementById("inpValue");
let insData = document.getElementById("insData");
let lsOutput = document.getElementById ("lsOutput");

insData.addEventListener("click",function(){
    let key = inpKey.value;
    let value = inpValue.value;
    localStorage.setItem(key,value)
    location.reload();
   })

   for(let i=0; i<localStorage.length; i++){
    let key = localStorage.key(i)
    let value = localStorage.getItem(key)
    lsOutput.innerHTML += ` <li>${key} : ${value} </li>`

}