//selection du DOM
const form = document.querySelector(".data");
const taille = document.querySelector("#taille");
const poids = document.querySelector("#poids");
const btnSubmit = document.querySelector("input[type='submit']");


//Empeche formulaire de se lancer
form.addEventListener("submit",(e)=> {
  e.preventDefault();
})

btnSubmit.addEventListener("click",()=> {
  console.log(taille.value);
  console.log(poids.value);
})

