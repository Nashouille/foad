/*
 * Correction Exercice 2 : Conditions et Boucles
 */

// Partie 1 : Nombres pairs et impairs
// Fonction qui vérifie si un nombre est pair
function estPair(nombre) {
  // Un nombre est pair si le reste de sa division par 2 est égal à 0
  return nombre % 2 === 0;
}

// Partie 2 : Table de multiplication
// Fonction qui affiche la table de multiplication d'un nombre
function tableMultiplication(nombre) {
  // Utilisation d'une boucle for pour itérer de 1 à 10
  for (let i = 1; i <= 10; i++) {
    // Calcul du résultat de la multiplication
    let resultat = nombre * i;
    // Affichage de la ligne de multiplication
    console.log(`${nombre} × ${i} = ${resultat}`);
  }
}

// Partie 3 : FizzBuzz simplifié
// Fonction qui implémente la logique FizzBuzz
function fizzBuzz(nombre) {
  // Vérification si le nombre est divisible par 3 ET par 5
  if (nombre % 3 === 0 && nombre % 5 === 0) {
    return "FizzBuzz";
  }
  // Vérification si le nombre est divisible par 3
  else if (nombre % 3 === 0) {
    return "Fizz";
  }
  // Vérification si le nombre est divisible par 5
  else if (nombre % 5 === 0) {
    return "Buzz";
  }
  // Si aucune des conditions n'est remplie, on retourne le nombre
  else {
    return nombre;
  }
}

// Tests pour estPair()
console.log("7 est pair ? ", estPair(7)); // false
console.log("12 est pair ? ", estPair(12)); // true
console.log("20 est pair ? ", estPair(20)); // true

// Test pour tableMultiplication()
console.log("\nTable de multiplication de 7 :");
tableMultiplication(7);

// Tests pour fizzBuzz()
console.log("\nFizzBuzz pour 9 :", fizzBuzz(9)); // Fizz (divisible par 3)
console.log("FizzBuzz pour 10 :", fizzBuzz(10)); // Buzz (divisible par 5)
console.log("FizzBuzz pour 15 :", fizzBuzz(15)); // FizzBuzz (divisible par 3 et 5)
console.log("FizzBuzz pour 17 :", fizzBuzz(17)); // 17 (ni divisible par 3, ni par 5)

/*
 * Points importants à comprendre :
 *
 * 1. L'opérateur modulo (%) retourne le reste d'une division
 *    - Si nombre % 2 === 0, alors le nombre est pair
 *
 * 2. La boucle for est idéale quand on connaît le nombre d'itérations à l'avance
 *    - Initialisation: let i = 1
 *    - Condition: i <= 10
 *    - Incrémentation: i++
 *
 * 3. Les structures conditionnelles (if, else if, else) permettent d'exécuter
 *    différentes portions de code selon les conditions
 *    - L'ordre des conditions est important, surtout quand elles se chevauchent
 *    - Dans fizzBuzz, on vérifie d'abord le cas "divisible par 3 ET 5" avant
 *      de vérifier les cas individuels
 *
 * 4. L'instruction return termine immédiatement l'exécution de la fonction
 *    et renvoie une valeur
 */
