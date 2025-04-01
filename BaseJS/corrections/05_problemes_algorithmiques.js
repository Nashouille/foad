/*
 * Correction Exercice 5 : Résolution de problèmes algorithmiques
 */

// Problème 1 : Somme des nombres
function sommeTableau(tableau) {
  // Méthode 1 : Utilisation de reduce
  return tableau.reduce((total, nombre) => total + nombre, 0);

  // Méthode 2 : Utilisation d'une boucle for
  /*
  let somme = 0;
  for (let i = 0; i < tableau.length; i++) {
    somme += tableau[i];
  }
  return somme;
  */
}

// Problème 2 : Recherche du plus grand élément
function trouverMax(tableau) {
  // Méthode 1 : Utilisation de Math.max avec spread operator
  return Math.max(...tableau);

  // Méthode 2 : Utilisation d'une boucle for
  /*
  if (tableau.length === 0) return undefined;
  
  let max = tableau[0];
  for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] > max) {
      max = tableau[i];
    }
  }
  return max;
  */
}

// Problème 3 : Inversement de chaîne
function inverserChaine(chaine) {
  // Méthode 1 : Convertir en tableau, inverser, puis rejoindre
  return chaine.split("").reverse().join("");

  // Méthode 2 : Utilisation d'une boucle
  /*
  let resultat = '';
  for (let i = chaine.length - 1; i >= 0; i--) {
    resultat += chaine[i];
  }
  return resultat;
  */
}

// Problème 4 : Comptage de voyelles
function compterVoyelles(chaine) {
  // Convertir la chaîne en minuscules pour simplifier la comparaison
  const chaineMinuscule = chaine.toLowerCase();

  // Définir les voyelles à rechercher
  const voyelles = ["a", "e", "i", "o", "u", "y"];

  // Méthode 1 : Utilisation de filter
  return [...chaineMinuscule].filter((caractere) =>
    voyelles.includes(caractere)
  ).length;

  // Méthode 2 : Utilisation d'une boucle for
  /*
  let compte = 0;
  for (let i = 0; i < chaineMinuscule.length; i++) {
    if (voyelles.includes(chaineMinuscule[i])) {
      compte++;
    }
  }
  return compte;
  */

  // Méthode 3 : Utilisation d'une expression régulière
  // return (chaineMinuscule.match(/[aeiouy]/g) || []).length;
}

// Problème 5 : Vérification de palindrome
function estPalindrome(chaine) {
  // Préparation de la chaîne : conversion en minuscules et suppression des espaces
  const chaineNettoyee = chaine.toLowerCase().replace(/\s/g, "");

  // Méthode 1 : Comparaison avec la version inversée
  return chaineNettoyee === inverserChaine(chaineNettoyee);

  // Méthode 2 : Comparaison caractère par caractère
  /*
  for (let i = 0; i < Math.floor(chaineNettoyee.length / 2); i++) {
    if (chaineNettoyee[i] !== chaineNettoyee[chaineNettoyee.length - 1 - i]) {
      return false;
    }
  }
  return true;
  */
}

// Tests pour vérifier les solutions
console.log("--- Problème 1: Somme des nombres ---");
console.log("sommeTableau([1, 2, 3, 4]) =", sommeTableau([1, 2, 3, 4])); // 10
console.log("sommeTableau([10, 20, 30]) =", sommeTableau([10, 20, 30])); // 60

console.log("\n--- Problème 2: Recherche du plus grand élément ---");
console.log("trouverMax([5, 9, 3, 7]) =", trouverMax([5, 9, 3, 7])); // 9
console.log("trouverMax([-1, -5, -2]) =", trouverMax([-1, -5, -2])); // -1

console.log("\n--- Problème 3: Inversement de chaîne ---");
console.log("inverserChaine('Bonjour') =", inverserChaine("Bonjour")); // ruojnoB
console.log("inverserChaine('JavaScript') =", inverserChaine("JavaScript")); // tpircSavaJ

console.log("\n--- Problème 4: Comptage de voyelles ---");
console.log("compterVoyelles('JavaScript') =", compterVoyelles("JavaScript")); // 3
console.log("compterVoyelles('Ordinateur') =", compterVoyelles("Ordinateur")); // 5

console.log("\n--- Problème 5: Vérification de palindrome ---");
console.log("estPalindrome('radar') =", estPalindrome("radar")); // true
console.log("estPalindrome('Kayak') =", estPalindrome("Kayak")); // true
console.log("estPalindrome('Hello') =", estPalindrome("Hello")); // false
console.log(
  "estPalindrome('Elu par cette crapule') =",
  estPalindrome("Elu par cette crapule")
); // true

/*
 * Points importants à comprendre :
 *
 * 1. Approches déclaratives vs impératives:
 *    - Déclarative (comme reduce, filter): se concentre sur le "quoi" (plus concis, souvent plus lisible)
 *    - Impérative (comme les boucles for): se concentre sur le "comment" (plus détaillé)
 *
 * 2. Méthodes utiles pour les tableaux:
 *    - reduce(): agrège un tableau en une seule valeur
 *    - filter(): crée un nouveau tableau avec les éléments qui passent un test
 *    - includes(): vérifie si un élément est présent dans un tableau
 *
 * 3. Méthodes utiles pour les chaînes:
 *    - split(''): convertit une chaîne en tableau de caractères
 *    - reverse(): inverse l'ordre des éléments d'un tableau
 *    - join(''): convertit un tableau en chaîne
 *    - toLowerCase(): convertit une chaîne en minuscules
 *    - replace(/regex/g, ''): remplace tous les caractères correspondant à l'expression régulière
 *
 * 4. Expressions régulières:
 *    - /\s/g: correspond à tous les espaces blancs (espaces, tabulations, retours à la ligne)
 *    - /[aeiouy]/g: correspond à toutes les voyelles
 *
 * 5. L'opérateur spread (...):
 *    - Décompose un tableau en arguments individuels
 *    - Utile avec des fonctions comme Math.max() qui attendent des arguments séparés
 *
 * 6. Prétraitement des données:
 *    - Pour les palindromes, il est important de nettoyer la chaîne (minuscules, sans espaces)
 *    - La normalisation des données est une étape importante dans de nombreux algorithmes
 */
