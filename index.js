const btn = document.querySelector("#btn");
const answerW = document.querySelector("#answerW");
const answerD = document.querySelector("#answerD")
const answerM = document.querySelector("#answerM")
const input = document.querySelector("#input");

input.value=localStorage.getItem('input');
answerW.innerHTML=localStorage.getItem('itemW');
answerM.innerHTML=localStorage.getItem('itemM');
answerD.innerHTML=localStorage.getItem('itemD');
//idea: wrap paragraph in a div and change contents of div if number is over 85... or try switch statement
btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(input.value);
  localStorage.setItem('input', input.value);
  const yearsLeft = 85 - input.value;
  console.log(yearsLeft);
  const weeksLeft = yearsLeft * 52;
  const daysLeft = weeksLeft * 7;
  const monthsLeft = yearsLeft *12;

  console.log(weeksLeft);
  // answerW.innerHTML = input.value==='' ? '___': weeksLeft;
  // answerM.innerHTML = input.value==='' ? '___': monthsLeft;
  // answerD.innerHTML = input.value==='' ? '___': daysLeft;

  localStorage.setItem('itemW', weeksLeft);
  localStorage.setItem('itemD', daysLeft);
  localStorage.setItem('itemM', monthsLeft);

  input.value=localStorage.getItem('input');
  answerW.innerHTML=localStorage.getItem('itemW');
  answerM.innerHTML=localStorage.getItem('itemM');
  answerD.innerHTML=localStorage.getItem('itemD');

  input.value = "";

});
