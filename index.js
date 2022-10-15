const btn = document.querySelector("#btn");
const answerW = document.querySelector("#answerW");
const answerD = document.querySelector("#answerD")
const answerM = document.querySelector("#answerM")
const input = document.querySelector("#input");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(input.value);
  const yearsLeft = 85 - input.value;
  console.log(yearsLeft);
  const weeksLeft = yearsLeft * 52;
  const daysLeft = weeksLeft * 7;
  const monthsLeft = yearsLeft *12;
  console.log(weeksLeft);
  answerW.innerHTML = input.value==='' ? '___': weeksLeft;
  answerM.innerHTML = input.value==='' ? '___': monthsLeft;
  answerD.innerHTML = input.value==='' ? '___': daysLeft;
  input.value = "";

});
