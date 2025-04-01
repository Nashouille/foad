/*
 * Correction Exercice 4 : Fonctions et Objets
 */

// Partie 1 : Création et manipulation d'objets
// Création de l'objet personne
let personne = {
  nom: "Thomas",
  age: 28,
  ville: "Lyon",
  hobbies: ["programmation", "musique", "randonnée"],
};

// Affichage de toutes les propriétés
console.log("Objet personne :");
console.log(personne);

// Méthode alternative pour afficher toutes les propriétés avec une boucle
console.log("\nPropriétés de l'objet personne :");
for (let propriete in personne) {
  console.log(`${propriete}: ${personne[propriete]}`);
}

// Ajout d'une propriété email
personne.email = "thomas@exemple.com";
console.log("\nPersonne après ajout de l'email :", personne);

// Fonction pour afficher les informations d'une personne
function afficherPersonne(p) {
  return `${p.nom} a ${p.age} ans, habite à ${p.ville} et aime ${p.hobbies.join(
    ", "
  )}.`;
}

console.log("\nAffichage avec la fonction :");
console.log(afficherPersonne(personne));

// Partie 2 : Méthodes d'objet
// Ajout de la méthode sePresenter
personne.sePresenter = function () {
  return `${this.nom} a ${this.age} ans, habite à ${
    this.ville
  } et aime ${this.hobbies.join(", ")}.`;
};

// Ajout de la méthode ajouterHobby
personne.ajouterHobby = function (hobby) {
  this.hobbies.push(hobby);
};

// Test des méthodes
console.log("\nUtilisation de la méthode sePresenter :");
console.log(personne.sePresenter());

// Ajout d'un hobby avec la méthode
personne.ajouterHobby("photographie");
console.log("\nAprès ajout d'un hobby :");
console.log(personne.sePresenter());

// Partie 3 : Collection d'objets
// Création d'un tableau de personnes
let personnes = [
  {
    nom: "Sophie",
    age: 32,
    ville: "Paris",
    hobbies: ["lecture", "cuisine", "voyages"],
    email: "sophie@exemple.com",
  },
  {
    nom: "Lucas",
    age: 24,
    ville: "Lyon",
    hobbies: ["football", "jeux vidéo", "cinéma"],
    email: "lucas@exemple.com",
  },
  {
    nom: "Emma",
    age: 29,
    ville: "Marseille",
    hobbies: ["natation", "peinture", "danse"],
    email: "emma@exemple.com",
  },
];

// Ajout de personne au tableau
personnes.push(personne);

// Fonction pour trouver une personne par son nom
function trouverPersonneParNom(tableau, nomRecherche) {
  // Utilisation de la méthode find pour trouver la première correspondance
  return tableau.find((p) => p.nom === nomRecherche);

  // Alternative avec une boucle for classique
  /*
  for (let i = 0; i < tableau.length; i++) {
    if (tableau[i].nom === nomRecherche) {
      return tableau[i];
    }
  }
  return undefined; // Retourne undefined si non trouvé
  */
}

// Fonction pour trouver toutes les personnes d'une ville
function personnesParVille(tableau, villeRecherche) {
  // Utilisation de la méthode filter pour trouver toutes les correspondances
  return tableau.filter((p) => p.ville === villeRecherche);
}

// Test de la fonction trouverPersonneParNom
console.log("\nRecherche de Lucas :");
const lucas = trouverPersonneParNom(personnes, "Lucas");
console.log(lucas);

console.log("\nRecherche de Marie (inexistante) :");
const marie = trouverPersonneParNom(personnes, "Marie");
console.log(marie); // undefined

// Test de la fonction personnesParVille
console.log("\nPersonnes qui habitent à Lyon :");
const habitantsLyon = personnesParVille(personnes, "Lyon");
console.log(habitantsLyon);

// Affichage formaté des habitants de Lyon
console.log("\nListe des habitants de Lyon :");
habitantsLyon.forEach((p) => {
  console.log(`- ${p.nom} (${p.age} ans)`);
});

/*
 * Points importants à comprendre :
 *
 * 1. Création et accès aux objets:
 *    - Les objets sont créés avec la syntaxe { propriété: valeur }
 *    - On accède aux propriétés avec la notation point (objet.propriété)
 *    - Ou avec la notation crochet (objet["propriété"])
 *
 * 2. Méthodes d'objet:
 *    - Une méthode est une fonction attachée à un objet
 *    - À l'intérieur d'une méthode, 'this' fait référence à l'objet lui-même
 *    - Les méthodes permettent de manipuler les données de l'objet
 *
 * 3. Collections d'objets:
 *    - On peut stocker plusieurs objets dans un tableau
 *    - Les méthodes comme find() et filter() sont très utiles pour chercher
 *      des objets selon certains critères
 *    - find() retourne le premier élément qui correspond au critère
 *    - filter() retourne tous les éléments qui correspondent au critère
 *
 * 4. Fonctions vs méthodes:
 *    - Une fonction est indépendante: function nom(params) { ... }
 *    - Une méthode est attachée à un objet: objet.methode = function() { ... }
 *    - Dans une méthode, on utilise 'this' pour accéder aux propriétés de l'objet
 */
