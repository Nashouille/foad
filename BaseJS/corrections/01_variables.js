/*
 * Correction Exercice 1 : Variables et opérations de base
 */

// 1. Déclaration des variables simples
let nom = "Jean"; // Utilisez votre prénom ici
let age = 25; // Utilisez votre âge réel ici

// 2. Calculs et manipulations
// Obtenir l'année actuelle avec l'objet Date
const anneeActuelle = new Date().getFullYear();

// Calculer l'année de naissance en soustrayant l'âge de l'année actuelle
let anneeNaissance = anneeActuelle - age;

// Création d'une phrase avec concaténation classique
// let presentation = "Je m'appelle " + nom + " et j'ai " + age + " ans.";

// Création d'une phrase avec template string (plus moderne et lisible)
let presentation = `Je m'appelle ${nom} et j'ai ${age} ans.`;

// Calcul de l'âge dans 5 ans
let futur = age + 5;

// 3. Affichage des résultats
console.log("Nom :", nom);
console.log("Âge :", age);
console.log("Année de naissance :", anneeNaissance);
console.log(presentation);
console.log("Dans 5 ans, j'aurai", futur, "ans");

/*
 * Points importants à comprendre :
 *
 * 1. Nous avons utilisé 'let' pour déclarer des variables qui peuvent changer de valeur
 * 2. Nous avons utilisé 'const' pour l'année actuelle car elle ne changera pas
 * 3. Pour calculer l'âge dans 5 ans, nous avons simplement ajouté 5 à la variable age
 * 4. Les template strings (avec backticks ` et ${variable}) permettent d'insérer
 *    facilement des variables dans une chaîne de caractères
 * 5. La fonction console.log() affiche des informations dans la console
 */
