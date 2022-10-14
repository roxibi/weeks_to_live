const btn=document.querySelector('#btn');
const answer=document.querySelector('#answer');
const input=document.querySelector('#input');

btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(input.value);
    const yearsLeft = 85 - input.value;
    const weeksLeft = yearsLeft * 52;
  
    answer.innerHTML=weeksLeft;


    input.value='';
})








