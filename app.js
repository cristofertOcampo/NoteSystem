const note1 = document.getElementById("txt-note1");
const note2 = document.getElementById("txt-note2");
const note3 = document.getElementById("txt-note3");
const send = document.getElementById("btn-send");

send.addEventListener('click', ()=>{

let Note1 = parseFloat(note1.value);
let Note2 = parseFloat(note2.value);
let Note3 = parseFloat(note3.value);


if(Note1 <= 5 && Note1 >= 1 && Note2 <= 5 && Note2 >= 1 && Note3 <= 5 && Note3 >= 1){
  let result = 0.30 * Note1 + 0.30 * Note2 + 0.40 * Note3;
  
  console.log(result);
}else{
  console.log('Error');
}

})



