const btn=document.querySelector('#btn');
const answer=document.querySelector('#input');

btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(answer.value);
    return answer.value;
})




