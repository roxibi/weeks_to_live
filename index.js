const btn = document.querySelector("#btn");
const answer = document.querySelector("#answer");
const input = document.querySelector("#input");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(input.value);
  const yearsLeft = 85 - input.value;
  console.log(yearsLeft);
  const weeksLeft = yearsLeft * 52;
  console.log(weeksLeft);
  function cases () {if (input.value>=0 && input.value<=84) {
    answer.innerHTML = weeksLeft;} else if (input.value>=85) {answer.innerHTML = 'more than enough';}
    else {answer.innerHTML='???'};  
    console.log(answer);
      input.value = "";}
      return cases()
  });
