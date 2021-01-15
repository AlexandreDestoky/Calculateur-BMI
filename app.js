//selection du DOM
const form = document.querySelector(".data");
const taille = document.querySelector("#taille");
const poids = document.querySelector("#poids");
const btnSubmit = document.querySelector("input[type='submit']");
const bmiText = document.querySelector(".bmi");


//Empeche formulaire de se lancer
form.addEventListener("submit",(e)=> {
  e.preventDefault();
})

btnSubmit.addEventListener("click",()=> {
  let tailleUtilisateur = taille.value;
  let poidsUtilisateur = poids.value;

  if(poidsUtilisateur != "" && tailleUtilisateur != "") {
    let bmi = (calculBMI(tailleUtilisateur,poidsUtilisateur)).toFixed(2);
    bmiText.innerText = `Votre BMI est de : ${bmi}`;
  }
})

//Fonction de calcul du BMI
let calculBMI = (taille,poids)=> {
  return (poids / Math.pow((taille/100),2))
}