let noteMax = 5;
let noteMin = 1;
let valueN1 = 0;
let valueN2 = 0;
let valueN3= 0;
// let porcentN1 = (( noteMax * 30 ) / 100);
// let porcentN2 = (( noteMax * 30 ) / 100);
// let porcentN3 = (( noteMax * 40 ) / 100);
let Finalnote = 0

const btnSubmit = document.getElementById("submit");
const nameStudent = document.getElementById("nameStudent");

btnSubmit.addEventListener('click', () => {

  // limit();

  const note1 = document.getElementById("note1").value;
  const note2 = document.getElementById("note2").value;
  const note3 = document.getElementById("note3").value;
  
  valueN1 = note1;
  valueN2 = note2;
  valueN3 = note3;

  Finalnote = ((valueN1 + valueN2 + valueN3) / 3);

  console.log(valueN1);
  console.log(valueN2);
  console.log(valueN3);
  console.log(Finalnote);
})

// function result(){
//   if (note1 >) {

//   }
// }
