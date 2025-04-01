/*
 * Correction Exercice 3 : Manipulation de tableaux
 */

// Partie 1 : Création et accès
// Création du tableau fruits
let fruits = ["pomme", "banane", "orange", "fraise", "kiwi"];

// Affichage du premier et du dernier élément
// Le premier élément est à l'index 0
console.log("Premier fruit:", fruits[0]);
// Le dernier élément peut être obtenu via l'index length-1
console.log("Dernier fruit:", fruits[fruits.length - 1]);
// Ou avec la méthode at() plus moderne
console.log("Dernier fruit (avec at):", fruits.at(-1));

// Affichage de la longueur
console.log("Nombre de fruits:", fruits.length);

// Partie 2 : Modification
// Ajout à la fin avec push()
fruits.push("ananas");
// Ajout au début avec unshift()
fruits.unshift("citron");

// Trouver l'index de "orange" puis remplacer
let indexOrange = fruits.indexOf("orange");
if (indexOrange !== -1) {
  fruits[indexOrange] = "mangue";
}

// Affichage du tableau après modifications
console.log("\nFruits après modifications:", fruits);
// Le tableau devrait maintenant être:
// ["citron", "pomme", "banane", "mangue", "fraise", "kiwi", "ananas"]

// Partie 3 : Recherche et filtrage
// Fonction pour vérifier si un fruit est présent dans le tableau
function contientFruit(tableau, fruit) {
  // Méthode 1: avec includes()
  return tableau.includes(fruit);

  // Méthode 2: avec indexOf() (alternative)
  // return tableau.indexOf(fruit) !== -1;
}

// Test de la fonction contientFruit
console.log("\nLe tableau contient 'banane':", contientFruit(fruits, "banane")); // true
console.log("Le tableau contient 'cerise':", contientFruit(fruits, "cerise")); // false

// Partie 4 : Transformation
// Fonction pour convertir les fruits en majuscules
function fruitsEnMajuscules(tableau) {
  // Utiliser map() pour transformer chaque élément
  return tableau.map((fruit) => fruit.toUpperCase());
}

// Test de la fonction fruitsEnMajuscules
const fruitsMajuscules = fruitsEnMajuscules(fruits);
console.log("\nFruits en majuscules:", fruitsMajuscules);

// Partie 5 : Filtrage
// Fonction pour filtrer les fruits par lettre initiale
function filtrerParLettre(tableau, lettre) {
  // Utiliser filter() pour ne garder que les fruits commençant par la lettre
  return tableau.filter((fruit) =>
    fruit.toLowerCase().startsWith(lettre.toLowerCase())
  );
}

// Test de la fonction filtrerParLettre
const fruitsB = filtrerParLettre(fruits, "b");
console.log("\nFruits commençant par 'b':", fruitsB);

const fruitsC = filtrerParLettre(fruits, "c");
console.log("Fruits commençant par 'c':", fruitsC);

/*
 * Points importants à comprendre :
 *
 * 1. Accès aux éléments d'un tableau:
 *    - Les indices commencent à 0
 *    - tableau[indice] pour accéder à un élément
 *    - tableau.length donne le nombre d'éléments
 *    - tableau.at(-1) est une façon moderne d'accéder au dernier élément
 *
 * 2. Modification de tableaux:
 *    - push() ajoute à la fin du tableau
 *    - unshift() ajoute au début du tableau
 *    - pop() retire le dernier élément
 *    - shift() retire le premier élément
 *    - tableau[indice] = valeur pour remplacer un élément
 *
 * 3. Méthodes utiles:
 *    - indexOf() trouve la position d'un élément, retourne -1 si absent
 *    - includes() vérifie si un élément est présent (true/false)
 *    - map() transforme chaque élément et retourne un nouveau tableau
 *    - filter() filtre les éléments selon un critère et retourne un nouveau tableau
 *    - startsWith() vérifie si une chaîne commence par une sous-chaîne donnée
 *
 * 4. Les méthodes comme map() et filter() utilisent des fonctions de rappel (callbacks)
 *    qui sont exécutées sur chaque élément du tableau
 */
