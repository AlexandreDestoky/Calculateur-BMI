//selection du DOM
const form = document.querySelector(".data");
const taille = document.querySelector("#taille");
const poids = document.querySelector("#poids");
const btnSubmit = document.querySelector("input[type='submit']");
const bmiText = document.querySelector(".bmi");
const indicateur = document.querySelector(".indicateur");
const taux = document.querySelector(".taux");
const info = document.querySelector(".info");

let bmi;

// ---------- FONCTIONS ----------
//Fonction de calcul du BMI
let calculBMI = (taille, poids) => {
  return poids / Math.pow(taille / 100, 2);
};

//Renvoi le poids pour être normal si surpoids ou souspoids
let poidsMinMax = (taille, tauxVoulu) => {
  return tauxVoulu * Math.pow(taille / 100, 2);
};

//Positionnement d'un élément sur une échelle
let disposition = (larIndicateur, larToutElement, nbrPourPlacement, valPremier, valDernier) => {
  let position0 = larIndicateur / 2;
  let echelleValeur = valDernier - valPremier;
  let nbrDeValeur = nbrPourPlacement - valPremier;
  let largeurUneValeur = larToutElement / echelleValeur;
  return largeurUneValeur * nbrDeValeur - position0;
};

//---------- EVENT ----------
//Empeche formulaire de se lancer
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

//Calcul on click sur calculer
btnSubmit.addEventListener("click", () => {
  let tailleUtilisateur = taille.value;
  let poidsUtilisateur = poids.value;

  //Seulement si champ pas vide
  if (
    poidsUtilisateur != "" &&
    tailleUtilisateur != "" &&
    poidsUtilisateur > 24 &&
    poidsUtilisateur < 401 &&
    tailleUtilisateur > 119 &&
    tailleUtilisateur < 251
  ) {
    //Texte info BMI
    bmi = calculBMI(tailleUtilisateur, poidsUtilisateur).toFixed(2);
    bmiText.innerText = `Votre BMI est de : ${bmi}`;

    //Placement echelle bmi
    taux.innerText = bmi;
    if (bmi > 40) {
      bmi = 40;
    }
    if (bmi < 15) {
      bmi = 15;
    }
    indicateur.style.left = disposition(50, 800, bmi, 15, 40) + "px";

    setTimeout(() => {
      //Texte info poids
      if (bmi > 25) {
        let poidsMaxNormal = poidsMinMax(tailleUtilisateur, 25);
        let difPoids = (poidsUtilisateur - poidsMaxNormal).toFixed(2);
        info.innerText = `🍏 Vous devriez perdre ${difPoids}kg pour avoir un BMI de 25 et avoir un poids normal ! 🏃‍♂️`;
      } else if (bmi < 20) {
        let poidsMinNormal = poidsMinMax(tailleUtilisateur, 20);
        let difPoids = (poidsMinNormal - poidsUtilisateur).toFixed(2);
        info.innerText = `🍪 Vous devriez prendre ${difPoids}kg pour avoir un BMI de 20 et avoir un poids normal ! 📺`;
      } else {
        info.innerText = "🥳 Félicitations, vous avez un poids normal ! 💪";
      } 
    }, 3000);
  }
});


