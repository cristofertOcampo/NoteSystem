const nameUser = document.getElementById("txt-name");
const note1 = document.getElementById("txt-note1");
const note2 = document.getElementById("txt-note2");
const note3 = document.getElementById("txt-note3");
const send = document.getElementById("btn-send");
const final = document.getElementById("final-note");

send.addEventListener("click", () => {
  let Note1 = parseFloat(note1.value);
  let Note2 = parseFloat(note2.value);
  let Note3 = parseFloat(note3.value);
  let result = 0.3 * Note1 + 0.3 * Note2 + 0.4 * Note3;
  
  console.log(result);

  result = result.toFixed(1);


  if (Note1 <= 5 && Note1 >= 1 && Note2 <= 5 && Note2 >= 1 && Note3 <= 5 && Note3 >= 1
  ) {

    if (result >= 4.5 && result <= 5) {
      final.textContent = `El estudiante ${nameUser.value}, tienen como nota final ${result} y es considerado Excelente.`;
    }if(result >= 3.5 && result <= 4.5){
      final.textContent = `El estudiante ${nameUser.value}, tienen como nota final ${result} y es considerado Bueno.`;
    }if(result >= 2 && result <= 3.4){
      final.textContent = `El estudiante ${nameUser.value}, tienen como nota final ${result} perdido la materia pero contará con la oportunidad de recuperar.`;
    }if(result < 2){
        final.textContent = `El estudiante ${nameUser.value}, tienen como nota final ${result} perdido la materia y deberá repetirla.`;
    }

    console.log(result);
  } else {
    console.log("Error");
  }
});
