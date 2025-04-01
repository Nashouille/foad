// Ceci est un autre commentaire sur une seule ligne
/* ceci est un commentaire
   qui s'étend sur plusieurs lignes */

//Déclaration de la variable
let age = 42; // Déclaration d'une variable avec let

// déclaration d'une constante
const pi = 3.14; // Déclaration d'une constante avec const

// déclaration d'une variable avec var (attention ancienne méthode)
let nom = "Jean"; // Déclaration d'une variable avec var

//typage
let poids = 42; // typage : number
let nomProduit = "Pomme"; // typage : string
let estDisponible = true; // typage : boolean
let fruits = ["Pomme", "Banane", "Orange"]; // typage : array
// typage : object
let produit = { 
    nom: "Pomme", 
    prix: 1.5 
}; 
// typage : null
let valeurNulle = null; // typage : null

// typage : undefined
let voiture; // typage : undefined

//exemple

//calcul

//définir une variable prix
let prix=19.99;
//définir une variable quantité
let quantite=3;
//calculer le total
let total=prix*quantite;
//afficher le total
// console.log("Le total est de " + total + " euros.");

//opérateurs de comparaison
// égalité
let a = 5;
let b = 5;
let c= a+b; // addition
let d= a-b; // soustraction
let e="5";
// console.log(e===a);

//inégalité
// console.log(a!=e); // false
// console.log(a!==e); // true

// supérieur à
// console.log(a>b); 
// console.log(a>=b); 
// console.log(a<=b); 
// console.log(a<b); 

//exemple de conditions

// let temperature = 2;

// if (temperature > 30) {
//     console.log("Il fait chaud !");
// }else if (temperature > 20) {
//     console.log("Il fait bon.!");
// } else {
//     console.log("Ca caille ici.");
// }

//condition avec ET (&&) et OU (||)

// let heure = 20;
// let jour = "lundi";

// if (heure >=9 && heure <=18 && jour !=="dimanche") {
//     console.log("Le magasin est ouvert.");
// }
// else {
//     console.log("Le magasin est fermé.");
// } 

//les boucles
// boucle for
/**
 * * La boucle for est utilisée pour 
 * exécuter un bloc de code un nombre 
 * déterminé de fois.
 * 
 * @author Alexandre Desoly
 */
// for (let i = 0; i <= 5; i++) {
//     console.log("Itération " + i);
// }
//parcourir un tableau avec une boucle for
//  let trucs = ["Pomme", "Banane", "Orange"];
//  for (let i = 0; i < trucs.length; i++) {
//     console.log("fruits : "+trucs[i]);
// }

//compte à rebours avec une boucle while
// let compteur = 5;
// while(compteur>0){
//     console.log("compteur : "+compteur);
//     compteur--;
// }
// console.log("Décollage");

//Demander un nombre jusqu'à ce qu'il soit valide
// let nombre;
// do {
//     nombre = prompt("Entrez un nombre entre 1 et 10 :");
// }while(nombre < 1 || nombre > 10);

//boucle for of 

// let notes = [12, 15, 8, 10, 18];
// for (let note of notes) {
//     console.log("Note : " + note);
// }

//break et continue
for (let i = 1 ; i<=10 ; i++){
    if(i===5) continue; // on passe à l'itération suivante
    if(i===8) break; // on sort de la boucle
    console.log("i = "+i);
}