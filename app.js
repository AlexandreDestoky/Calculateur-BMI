//selection du DOM
const form = document.querySelector(".data");
const taille = document.querySelector("#taille");
const poids = document.querySelector("#poids");
const btnSubmit = document.querySelector("input[type='submit']");
const bmiText = document.querySelector(".bmi");
const indicateur = document.querySelector(".indicateur");
const taux = document.querySelector(".taux");

let bmi;

//Fonction de calcul du BMI
let calculBMI = (taille,poids)=> {
  return (poids / Math.pow((taille/100),2))
}

//Empeche formulaire de se lancer
form.addEventListener("submit",(e)=> {
  e.preventDefault();
})




btnSubmit.addEventListener("click",()=> {
  let tailleUtilisateur = taille.value;
  let poidsUtilisateur = poids.value;

  if(poidsUtilisateur != "" && tailleUtilisateur != "") {

    //Texte info BMI
    bmi = (calculBMI(tailleUtilisateur,poidsUtilisateur)).toFixed(2);
    bmiText.innerText = `Votre BMI est de : ${bmi}`;

    //Placement echelle bmi
    taux.innerText = bmi;
    if(bmi > 40) {
      bmi = 40;
    }
    if(bmi < 15) {
      bmi = 15
    }
    indicateur.style.left = disposition(50,800,bmi,15,40) + "px";



    












  }
})

let disposition = (larIndicateur,larToutElement,nbrPourPlacement,valPremier,valDernier) => {
  let position0 = larIndicateur / 2;
  let echelleValeur = valDernier - valPremier;
  let nbrDeValeur = nbrPourPlacement - valPremier;
  let largeurUneValeur = larToutElement / echelleValeur;

  return (largeurUneValeur * nbrDeValeur) - position0;

}
