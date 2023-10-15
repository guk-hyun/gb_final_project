const greeting = document.querySelector(".greeting");
const userid_form = document.querySelector(".userid_form");
// console.log(greeting.innerText);

userid_form.addEventListener("focus",function(e){
    greeting.classList.remove("hidden")
    console.log(greeting.innerText);
})