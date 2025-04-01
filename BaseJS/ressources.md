# Ressources JavaScript

## Variables et Types de données

### Qu'est-ce qu'une variable ?

Une variable est comme une boîte étiquetée dans laquelle vous pouvez stocker des informations. L'étiquette (le nom de la variable) vous permet de retrouver facilement son contenu plus tard.

### Déclaration de variables

```javascript
// avec let (recommandé pour les variables qui changent)
let age = 25;

// avec const (pour les valeurs qui ne changent pas)
const nom = "Alice";

// avec var (ancien, moins recommandé)
var score = 100;
```

**Explications :**

- `let` : Utilisez-le pour des variables dont la valeur peut changer. Par exemple, l'âge d'une personne qui augmente chaque année.
- `const` : Utilisez-le pour des valeurs qui ne changeront jamais. Par exemple, le nom d'une personne (dans le contexte d'un programme).
- `var` : Ancienne façon de déclarer des variables, moins recommandée car elle peut créer des bugs difficiles à repérer.

**Lien avec les exercices :** Dans l'exercice 1, vous devez créer des variables pour stocker un nom, un âge et calculer une année de naissance.

### Types de données principaux

```javascript
// Chaîne de caractères (string)
let texte = "Bonjour";

// Nombre (number)
let entier = 42;
let decimal = 3.14;

// Booléen (boolean)
let estVrai = true;
let estFaux = false;

// Tableaux (array)
let nombres = [1, 2, 3, 4, 5];
let mixte = [1, "deux", true, [3, 4]];

// Objet (object)
let personne = {
  nom: "Dupont",
  prenom: "Jean",
  age: 30,
};

// Null et Undefined
let valeurNull = null;
let valeurNonDefinie; // undefined
```

**Explications :**

- **Chaînes (strings)** : Tout texte entre guillemets. Utilisées pour les noms, messages, etc.
- **Nombres (numbers)** : Toutes les valeurs numériques (avec ou sans décimales).
- **Booléens (booleans)** : Seulement deux valeurs possibles : `true` (vrai) ou `false` (faux). Utilisés pour des conditions.
- **Tableaux (arrays)** : Collections ordonnées d'éléments. Comme une liste numérotée où chaque élément a une position (index).
- **Objets (objects)** : Collections de paires clé/valeur. Comme une fiche d'identité avec différentes informations.
- **Null** : Représente l'absence intentionnelle de valeur.
- **Undefined** : Représente une variable qui n'a pas encore reçu de valeur.

**Lien avec les exercices :**

- Exercice 1 : Vous manipulez des strings et des nombres.
- Exercice 3 : Vous travaillez avec des tableaux.
- Exercice 4 : Vous créez et manipulez des objets.

## Opérateurs

### Opérateurs arithmétiques

```javascript
let a = 10;
let b = 5;

let addition = a + b; // 15
let soustraction = a - b; // 5
let multiplication = a * b; // 50
let division = a / b; // 2
let modulo = a % b; // 0 (reste de la division)
let puissance = a ** 2; // 100 (10²)

// Incrémentation et décrémentation
a++; // a = a + 1
b--; // b = b - 1
```

**Explications :**

- **Addition (+)** : Additionne deux nombres ou concatène (joint) deux chaînes.
- **Soustraction (-)** : Soustrait le second nombre du premier.
- **Multiplication (\*)** : Multiplie deux nombres.
- **Division (/)** : Divise le premier nombre par le second.
- **Modulo (%)** : Donne le reste de la division du premier nombre par le second. Utile pour savoir si un nombre est pair (n % 2 === 0).
- **Puissance (**)\*\* : Élève le premier nombre à la puissance du second.
- **Incrémentation (++)** : Augmente la valeur d'une variable de 1.
- **Décrémentation (--)** : Diminue la valeur d'une variable de 1.

**Lien avec les exercices :**

- Exercice 1 : Vous utilisez ces opérateurs pour calculer l'année de naissance et l'âge futur.
- Exercice 2 : Vous utilisez le modulo pour vérifier si un nombre est pair.

### Opérateurs de comparaison

```javascript
a > b; // Supérieur à
a < b; // Inférieur à
a >= b; // Supérieur ou égal à
a <= b; // Inférieur ou égal à
a === b; // Égalité stricte (valeur et type)
a !== b; // Inégalité stricte
a == b; // Égalité (valeur uniquement, éviter)
a != b; // Inégalité (valeur uniquement, éviter)
```

**Explications :**

- Ces opérateurs comparent deux valeurs et retournent toujours un booléen (true ou false).
- **Égalité stricte (===)** : Vérifie si deux valeurs sont identiques en valeur ET en type. Par exemple, 5 === "5" est false car l'un est un nombre et l'autre une chaîne.
- **Égalité simple (==)** : Vérifie seulement la valeur, pas le type (à éviter car peut causer des bugs). Par exemple, 5 == "5" est true.
- Utilisez toujours === et !== plutôt que == et != pour éviter des comportements inattendus.

**Lien avec les exercices :**

- Exercice 2 : Vous utilisez ces opérateurs dans les conditions.
- Exercice 5 : Vous les utilisez pour vérifier si une chaîne est un palindrome.

### Opérateurs logiques

```javascript
let x = true;
let y = false;

x && y; // ET logique (true si les deux sont true)
x || y; // OU logique (true si l'un des deux est true)
!x; // NON logique (inverse la valeur)
```

**Explications :**

- **ET (&&)** : Retourne true seulement si les deux conditions sont vraies. Comme dire "Je veux à la fois A ET B".
- **OU (||)** : Retourne true si au moins une des conditions est vraie. Comme dire "Je veux A OU B (ou les deux)".
- **NON (!)** : Inverse la valeur booléenne. !true devient false, et !false devient true.

**Exemple concret :**

```javascript
let estMajeur = age >= 18;
let aUnPermis = true;
let peutConduire = estMajeur && aUnPermis; // true seulement si la personne est majeure ET a un permis
```

**Lien avec les exercices :**

- Exercice 2 : Vous utilisez ces opérateurs dans les conditions plus complexes.
- Exercice 5 : Vous les utilisez pour combiner plusieurs conditions dans les problèmes algorithmiques.

## Structures conditionnelles

### If, else if, else

```javascript
if (condition1) {
  // code exécuté si condition1 est vraie
} else if (condition2) {
  // code exécuté si condition1 est fausse et condition2 est vraie
} else {
  // code exécuté si toutes les conditions sont fausses
}
```

**Explications :**
Les structures conditionnelles permettent d'exécuter différents blocs de code selon que certaines conditions sont vraies ou fausses - comme prendre des décisions dans votre programme.

- **if** : "Si cette condition est vraie, fais ceci"
- **else if** : "Sinon, si cette autre condition est vraie, fais cela"
- **else** : "Si aucune des conditions n'est vraie, fais ceci par défaut"

**Exemple concret :**

```javascript
let age = 17;

if (age >= 18) {
  console.log("Vous êtes majeur");
} else if (age >= 16) {
  console.log("Vous êtes presque majeur");
} else {
  console.log("Vous êtes mineur");
}
// Affiche "Vous êtes presque majeur"
```

**Lien avec les exercices :**

- Exercice 2 : Vous utilisez les conditions pour vérifier si un nombre est pair et dans la fonction FizzBuzz.
- Exercice 5 : Vous utilisez des conditions pour résoudre les problèmes algorithmiques comme la vérification de palindrome.

### Switch

```javascript
switch (expression) {
  case valeur1:
    // code si expression === valeur1
    break;
  case valeur2:
    // code si expression === valeur2
    break;
  default:
  // code par défaut
}
```

**Explications :**

- Le switch est comme un grand "if/else if/else" mais plus lisible quand on a beaucoup de cas à vérifier.
- L'expression est évaluée une seule fois, puis sa valeur est comparée à chaque "case".
- Le mot-clé `break` est crucial - sans lui, le code continue d'exécuter les cas suivants même s'ils ne correspondent pas.
- `default` est exécuté si aucun cas ne correspond.

**Exemple concret :**

```javascript
let jour = "Mardi";

switch (jour) {
  case "Lundi":
    console.log("Début de semaine");
    break;
  case "Mardi":
  case "Mercredi":
  case "Jeudi":
    console.log("Milieu de semaine");
    break;
  case "Vendredi":
    console.log("Presque le week-end");
    break;
  default:
    console.log("C'est le week-end");
}
// Affiche "Milieu de semaine"
```

**Lien avec les exercices :**
Cette structure peut être utilisée comme alternative dans l'exercice 2 pour implémenter FizzBuzz.

### Opérateur ternaire

```javascript
let resultat = condition ? valeurSiVrai : valeurSiFaux;
```

**Explications :**

- C'est une version courte d'un if/else en une seule ligne.
- Très utile pour des conditions simples, mais peut devenir difficile à lire si on les imbrique.
- Structure : `(condition à vérifier) ? (valeur si vrai) : (valeur si faux)`

**Exemple concret :**

```javascript
let age = 20;
let statut = age >= 18 ? "majeur" : "mineur";
console.log("Vous êtes " + statut); // Affiche "Vous êtes majeur"

// Équivalent à:
let statut2;
if (age >= 18) {
  statut2 = "majeur";
} else {
  statut2 = "mineur";
}
```

**Lien avec les exercices :**
Peut être utilisé dans l'exercice 2 pour simplifier la fonction estPair:

```javascript
function estPair(nombre) {
  return nombre % 2 === 0 ? true : false;
  // Ou encore plus simple: return nombre % 2 === 0;
}
```

## Boucles

### Boucle for

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // Affiche 0, 1, 2, 3, 4
}
```

**Explications :**
La boucle for répète un bloc de code un nombre déterminé de fois. Elle est composée de trois parties:

1. **Initialisation** : `let i = 0` (définit une variable de comptage)
2. **Condition** : `i < 5` (continue tant que cette condition est vraie)
3. **Incrémentation** : `i++` (comment la variable change à chaque itération)

C'est comme dire "Fais ceci 5 fois, en comptant de 0 à 4".

**Visualisation de l'exécution :**

```text
Début: i = 0, 0 < 5? Oui → console.log(0) → i++ → i = 1
       i = 1, 1 < 5? Oui → console.log(1) → i++ → i = 2
       i = 2, 2 < 5? Oui → console.log(2) → i++ → i = 3
       i = 3, 3 < 5? Oui → console.log(3) → i++ → i = 4
       i = 4, 4 < 5? Oui → console.log(4) → i++ → i = 5
       i = 5, 5 < 5? Non → fin de la boucle
```

**Lien avec les exercices :**

- Exercice 2 : Vous utilisez la boucle for pour créer la table de multiplication.
- Exercice 3 : Elle est utile pour parcourir les éléments d'un tableau.

### Boucle while

```javascript
let i = 0;
while (i < 5) {
  console.log(i); // Affiche 0, 1, 2, 3, 4
  i++;
}
```

**Explications :**

- La boucle while répète un bloc de code tant qu'une condition est vraie.
- Contrairement à for, vous devez gérer vous-même l'initialisation avant la boucle et l'incrémentation à l'intérieur.
- Utilisée quand vous ne savez pas combien de fois vous devez répéter le code.

**Attention :** Si la condition ne devient jamais fausse, vous créez une "boucle infinie" qui peut faire planter votre programme.

**Exemple concret :**

```javascript
// Trouver le premier nombre supérieur à 100 qui est divisible par 7
let nombre = 100;
while (nombre % 7 !== 0) {
  nombre++;
}
console.log(nombre); // Affichera 105
```

**Lien avec les exercices :**

- Exercice 5 : Peut être utilisée pour chercher des éléments dans un tableau quand on ne sait pas exactement combien d'itérations seront nécessaires.

### Boucle do...while

```javascript
let i = 0;
do {
  console.log(i); // Affiche 0, 1, 2, 3, 4
  i++;
} while (i < 5);
```

**Explications :**

- Similaire à la boucle while, mais le bloc de code est exécuté au moins une fois, puis la condition est vérifiée.
- Utilisée quand vous voulez garantir qu'un code s'exécute au moins une fois.

**Différence avec while :**

```javascript
let x = 10;

// Ne s'exécute jamais car 10 > 5 est déjà faux
while (x < 5) {
  console.log("Ceci ne s'affiche pas");
  x++;
}

// S'exécute une fois, puis s'arrête car 10 > 5
do {
  console.log("Ceci s'affiche une fois");
  x++;
} while (x < 5);
```

**Lien avec les exercices :**
Peut être utilisée dans l'exercice 5 pour des scénarios où une action doit être effectuée au moins une fois.

### Boucle for...of (pour les tableaux)

```javascript
const nombres = [10, 20, 30, 40];
for (const nombre of nombres) {
  console.log(nombre); // Affiche 10, 20, 30, 40
}
```

**Explications :**

- Spécialement conçue pour parcourir les éléments d'un tableau (ou d'autres objets itérables).
- Plus simple que la boucle for classique car vous n'avez pas à gérer les indices.
- Vous accédez directement à chaque élément.

**Comparaison avec for classique :**

```javascript
// Avec for classique (plus verbeux)
for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

// Avec for...of (plus simple)
for (const nombre of nombres) {
  console.log(nombre);
}
```

**Lien avec les exercices :**

- Exercice 3 : Idéale pour parcourir les éléments d'un tableau de fruits.
- Exercice 5 : Utile pour compter les voyelles dans une chaîne de caractères.

### Boucle for...in (pour les objets)

```javascript
const personne = { nom: "Dupont", prenom: "Jean", age: 30 };
for (const propriete in personne) {
  console.log(`${propriete}: ${personne[propriete]}`);
}
```

**Explications :**

- Conçue pour parcourir les propriétés d'un objet.
- À chaque itération, `propriete` contient le nom de la propriété (la clé).
- Pour accéder à la valeur, on utilise `personne[propriete]`.

**Différence avec for...of :**

- `for...of` parcourt les valeurs d'un tableau.
- `for...in` parcourt les clés d'un objet.

**Lien avec les exercices :**

- Exercice 4 : Utilisée pour afficher toutes les propriétés d'un objet personne.

**Attention :** N'utilisez pas `for...in` sur des tableaux, car il peut parcourir des propriétés ajoutées à l'objet Array, pas seulement les indices numériques.

## Fonctions

### Qu'est-ce qu'une fonction ?

Une fonction est un bloc de code réutilisable qui effectue une tâche spécifique. C'est comme une "mini-machine" qui :

1. Peut recevoir des données (paramètres)
2. Traite ces données selon des instructions
3. Peut renvoyer un résultat (retour)

Les fonctions permettent d'organiser votre code, éviter les répétitions, et décomposer des problèmes complexes en plus petites parties.

### Déclaration de fonction

```javascript
// Fonction classique
function additionner(a, b) {
  return a + b;
}

// Fonction fléchée (arrow function)
const multiplier = (a, b) => a * b;

// Fonction avec paramètres par défaut
function saluer(nom = "visiteur") {
  return `Bonjour ${nom}`;
}
```

**Explications :**

- **Fonction classique** : La façon traditionnelle de définir une fonction. Le mot-clé `function` est suivi du nom de la fonction et des paramètres entre parenthèses.
- **Fonction fléchée** : Une syntaxe plus récente, plus concise. Pour les fonctions simples, vous pouvez mettre tout sur une ligne sans accolades ni mot-clé `return`.
- **Paramètres par défaut** : Si un argument n'est pas fourni lors de l'appel, la valeur par défaut sera utilisée.

**Anatomie d'une fonction :**

```javascript
function nomDeLaFonction(parametre1, parametre2) {
  // Corps de la fonction - instructions à exécuter
  // ...
  return resultat; // Valeur à renvoyer (optionnel)
}
```

**Lien avec les exercices :**

- Exercice 2 : Vous créez des fonctions comme `estPair` et `fizzBuzz`.
- Exercice 3 : Vous implémentez des fonctions pour manipuler des tableaux.
- Exercice 4 : Vous ajoutez des méthodes à des objets (qui sont des fonctions).

### Appel de fonction

```javascript
let somme = additionner(5, 3); // 8
let produit = multiplier(4, 2); // 8
let message = saluer("Alice"); // "Bonjour Alice"
let messageDefaut = saluer(); // "Bonjour visiteur"
```

**Explications :**

- Pour utiliser une fonction, écrivez son nom suivi de parenthèses.
- À l'intérieur des parenthèses, passez les arguments (valeurs pour les paramètres).
- Si la fonction retourne une valeur, vous pouvez la stocker dans une variable.

**Différence entre paramètres et arguments :**

- Les **paramètres** sont les variables listées dans la définition de la fonction.
- Les **arguments** sont les valeurs réelles passées à la fonction lors de son appel.

**Exemple visuel :**

```javascript
// Paramètres: a, b
function additionner(a, b) {
  return a + b;
}

// Arguments: 5, 3
let resultat = additionner(5, 3);
```

**Lien avec les exercices :**
Tous les exercices impliquent l'appel de fonctions que vous créez ou de fonctions intégrées comme `console.log()`.

**Portée des variables :**
Les variables déclarées à l'intérieur d'une fonction ne sont accessibles que dans cette fonction (portée locale).

```javascript
function exemplePortee() {
  let variableLocale = "Je suis locale";
  console.log(variableLocale); // OK
}

exemplePortee();
// console.log(variableLocale); // Erreur: variableLocale n'est pas définie
```

## Tableaux (Arrays)

### Qu'est-ce qu'un tableau ?

Un tableau est une structure de données qui stocke une collection ordonnée d'éléments. Vous pouvez imaginer un tableau comme une liste numérotée, où chaque élément a une position (index) commençant à 0.

```javascript
// Création d'un tableau
let fruits = ["pomme", "banane", "orange"];
//              0        1         2      ← indices
```

### Méthodes principales

```javascript
const fruits = ["pomme", "banane", "orange"];

// Accéder aux éléments
fruits[0]; // "pomme"

// Longueur du tableau
fruits.length; // 3

// Ajouter à la fin
fruits.push("fraise"); // ["pomme", "banane", "orange", "fraise"]

// Retirer de la fin
fruits.pop(); // retourne "fraise", fruits devient ["pomme", "banane", "orange"]

// Ajouter au début
fruits.unshift("kiwi"); // ["kiwi", "pomme", "banane", "orange"]

// Retirer du début
fruits.shift(); // retourne "kiwi", fruits devient ["pomme", "banane", "orange"]

// Trouver l'index d'un élément
fruits.indexOf("banane"); // 1

// Vérifier si un élément existe
fruits.includes("pomme"); // true

// Fusionner des tableaux
const legumes = ["carotte", "poivron"];
const aliments = fruits.concat(legumes); // ["pomme", "banane", "orange", "carotte", "poivron"]

// Extraire une partie du tableau
const agrumes = fruits.slice(2, 3); // ["orange"]

// Transformer en chaîne
fruits.join(", "); // "pomme, banane, orange"
```

**Explications :**

**Accès aux éléments :**

- Les indices commencent toujours à 0 (le premier élément est à l'indice 0).
- Pour accéder à un élément : `tableau[indice]`
- Si vous essayez d'accéder à un indice qui n'existe pas, vous obtenez `undefined`

**Manipulation du tableau :**

- `push()` et `pop()` : Ajout et suppression à la fin (comme une pile d'assiettes).
- `unshift()` et `shift()` : Ajout et suppression au début (plus lent car tous les indices doivent être recalculés).
- `length` : Donne le nombre d'éléments (pas le dernier indice !)

**Recherche :**

- `indexOf()` : Retourne l'indice de l'élément ou -1 s'il n'est pas trouvé.
- `includes()` : Retourne true ou false selon que l'élément est présent ou non.

**Visualisation :**

```text
fruits = ["pomme", "banane", "orange"]
           ↑         ↑         ↑
indice:    0         1         2
length:    3
```

**Lien avec les exercices :**

- Exercice 3 : Vous manipulez un tableau de fruits avec ces méthodes.
- Exercice 5 : Vous utilisez ces méthodes pour résoudre des problèmes algorithmiques.

### Méthodes de parcours

```javascript
const nombres = [1, 2, 3, 4, 5];

// forEach - Exécute une fonction pour chaque élément
nombres.forEach((nombre) => console.log(nombre * 2));

// map - Crée un nouveau tableau transformé
const doubles = nombres.map((nombre) => nombre * 2); // [2, 4, 6, 8, 10]

// filter - Crée un nouveau tableau filtré
const pairs = nombres.filter((nombre) => nombre % 2 === 0); // [2, 4]

// find - Trouve le premier élément qui satisfait une condition
const premier = nombres.find((nombre) => nombre > 3); // 4

// reduce - Réduit le tableau à une seule valeur
const somme = nombres.reduce((total, nombre) => total + nombre, 0); // 15
```

**Explications :**

Ces méthodes prennent toutes une fonction en paramètre (appelée "callback") qui est appliquée à chaque élément du tableau.

- **forEach** : Parcourt chaque élément et exécute une action, mais ne retourne rien.

  ```javascript
  // Équivalent avec une boucle for
  for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i] * 2);
  }
  ```

- **map** : Transforme chaque élément et retourne un nouveau tableau de même taille.

  ```javascript
  // Équivalent avec une boucle for
  const doubles = [];
  for (let i = 0; i < nombres.length; i++) {
    doubles.push(nombres[i] * 2);
  }
  ```

- **filter** : Teste chaque élément et retourne un nouveau tableau avec seulement ceux qui passent le test.

  ```javascript
  // Équivalent avec une boucle for
  const pairs = [];
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] % 2 === 0) {
      pairs.push(nombres[i]);
    }
  }
  ```

- **find** : Retourne le premier élément qui satisfait une condition, ou undefined si aucun ne correspond.

- **reduce** : Accumule les valeurs pour les "réduire" à une seule. Prend un accumulateur et une valeur initiale.

  ```javascript
  // Équivalent avec une boucle for
  let somme = 0; // Valeur initiale
  for (let i = 0; i < nombres.length; i++) {
    somme += nombres[i];
  }
  ```

**Lien avec les exercices :**

- Exercice 3 : Vous utilisez filter pour créer une fonction qui filtre les fruits par lettre.
- Exercice 5 : Dans la fonction sommeTableau, vous pouvez utiliser reduce.

## Objets

### Qu'est-ce qu'un objet ?

Un objet est une collection de paires clé/valeur, où chaque clé est une chaîne de caractères et chaque valeur peut être de n'importe quel type. Les objets permettent de regrouper des données connexes et des fonctionnalités liées à ces données.

Vous pouvez imaginer un objet comme une "fiche" décrivant quelque chose avec différentes propriétés.

### Création et accès aux propriétés

```javascript
const personne = {
  nom: "Dupont",
  prenom: "Jean",
  age: 30,
  adresse: {
    rue: "1 rue des Lilas",
    ville: "Paris",
  },
};

// Accès aux propriétés
personne.nom; // "Dupont"
personne["prenom"]; // "Jean"
personne.adresse.ville; // "Paris"

// Ajout/modification de propriétés
personne.email = "jean.dupont@exemple.com";
personne.age = 31;

// Suppression de propriétés
delete personne.email;
```

**Explications :**

**Création d'un objet :**

- Les objets sont définis entre accolades `{}`
- Chaque propriété est composée d'une clé et d'une valeur, séparées par deux-points `:`
- Les propriétés sont séparées par des virgules
- La valeur peut être de n'importe quel type, y compris un autre objet

**Accès aux propriétés :**

- **Notation point** (`objet.propriete`) : Plus simple et lisible, mais ne fonctionne que si le nom de la propriété est un identifiant valide.
- **Notation crochet** (`objet["propriete"]`) : Plus flexible, permet d'utiliser des noms de propriétés avec des caractères spéciaux ou des espaces. Vous pouvez aussi utiliser des variables pour accéder aux propriétés.

**Modification et ajout :**

- Pour ajouter une nouvelle propriété, il suffit de l'assigner
- Pour modifier une propriété existante, même syntaxe
- Utilisez `delete` pour supprimer une propriété

**Objet imbriqué :**

- Dans l'exemple, `adresse` est un objet à l'intérieur de l'objet `personne`
- Pour accéder aux propriétés imbriquées, chaînez la notation point : `personne.adresse.ville`

**Lien avec les exercices :**

- Exercice 4 : Vous créez et manipulez un objet personne similaire à cet exemple.

### Méthodes d'objet

```javascript
const voiture = {
  marque: "Toyota",
  modele: "Corolla",
  annee: 2020,
  demarrer: function () {
    return "Vroum vroum !";
  },
  // Syntaxe abrégée pour les méthodes
  klaxonner() {
    return "Beep beep !";
  },
};

voiture.demarrer(); // "Vroum vroum !"
voiture.klaxonner(); // "Beep beep !"
```

**Explications :**

**Méthodes :**

- Une méthode est simplement une fonction qui est une propriété d'un objet
- Elles permettent d'ajouter des comportements (actions) aux objets
- Il y a deux façons de définir une méthode:
  - `méthode: function() {}`
  - `méthode() {}` (syntaxe abrégée, plus moderne)

**Le mot-clé `this` :**

- À l'intérieur d'une méthode, `this` fait référence à l'objet lui-même
- Cela vous permet d'accéder aux autres propriétés de l'objet

```javascript
const personne = {
  nom: "Dupont",
  prenom: "Jean",
  direBonjour() {
    return `Bonjour, je m'appelle ${this.prenom} ${this.nom}`;
  },
};

personne.direBonjour(); // "Bonjour, je m'appelle Jean Dupont"
```

**Différence entre méthodes d'objet et fonctions :**

- Une méthode est simplement une fonction attachée à un objet
- Une fonction est indépendante et n'est pas liée à un objet particulier

**Lien avec les exercices :**

- Exercice 4 : Vous ajoutez des méthodes comme `sePresenter` et `ajouterHobby` à un objet personne.

## Console et Débogage

### Affichage dans la console

```javascript
console.log("Message simple");
console.error("Message d'erreur");
console.warn("Avertissement");
console.table(["pomme", "banane", "orange"]); // Affiche un tableau formaté
console.time("Timer");
// Code à chronométrer
console.timeEnd("Timer"); // Affiche le temps écoulé
```

**Explications :**

**Pourquoi utiliser la console ?**

- La console est l'outil de base pour déboguer vos programmes JavaScript
- Elle vous permet de voir les valeurs des variables à différents moments de l'exécution
- Elle aide à comprendre ce qui se passe dans votre code

**Méthodes principales :**

- `console.log()` : Affiche des informations générales
- `console.error()` : Affiche des messages d'erreur (généralement en rouge)
- `console.warn()` : Affiche des avertissements (généralement en jaune)
- `console.table()` : Affiche des données tabulaires de façon plus lisible
- `console.time()` et `console.timeEnd()` : Mesurent le temps d'exécution d'un bloc de code

**Trucs et astuces :**

- Vous pouvez afficher plusieurs valeurs en les séparant par des virgules:

  ```javascript
  let nom = "Jean";
  let age = 30;
  console.log("Personne:", nom, age); // "Personne: Jean 30"
  ```

- Pour inspecter un objet complet, passez-le simplement à console.log:

  ```javascript
  console.log(personne); // Affiche tout l'objet avec ses propriétés
  ```

- Pour déboguer une fonction, ajoutez des console.log à des points stratégiques:

  ```javascript
  function calculer(a, b) {
    console.log("Valeurs reçues:", a, b);
    let resultat = a * b;
    console.log("Résultat:", resultat);
    return resultat;
  }
  ```

**Lien avec les exercices :**

- Tous les exercices utilisent console.log pour afficher les résultats
- Dans l'exercice 5, vous pouvez l'utiliser pour déboguer vos algorithmes

### Erreurs courantes et débogage

**Types d'erreurs courants :**

1. **Erreurs de syntaxe** : Fautes de frappe, parenthèses manquantes, etc.

   ```javascript
   // Erreur: il manque une parenthèse fermante
   if (x === 3 {
     console.log("x vaut 3");
   }
   ```

2. **Erreurs de référence** : Tentative d'utiliser une variable non définie.

   ```javascript
   // Erreur: maVariable n'est pas définie
   console.log(maVariable);
   ```

3. **Erreurs de type** : Tentative d'utiliser une méthode sur un type inapproprié.

   ```javascript
   // Erreur: null n'a pas de méthode toUpperCase
   let texte = null;
   texte.toUpperCase();
   ```

4. **Erreurs logiques** : Le code s'exécute mais ne fait pas ce que vous voulez.

   ```javascript
   // Erreur logique: la fonction renvoie toujours 0
   function difference(a, b) {
     return a - a; // au lieu de a - b
   }
   ```

**Techniques de débogage :**

1. **Utiliser console.log** pour voir la valeur des variables à différents moments.
2. **Décomposer le problème** en parties plus petites et tester chaque partie séparément.
3. **Vérifier les types** des variables en utilisant `typeof`.

   ```javascript
   console.log(typeof maVariable); // "string", "number", "object", etc.
   ```

4. **Lire attentivement les messages d'erreur** - ils contiennent souvent des indices sur où se trouve le problème.

**Lien avec les exercices :**
Ces techniques seront utiles dans tous les exercices, mais particulièrement dans l'exercice 5 où vous devez résoudre des problèmes algorithmiques plus complexes.

## Stratégies de Résolution de Problèmes

1. **Comprendre le problème**

   - Qu'est-ce qui est demandé exactement ?
   - Quelles sont les entrées et les sorties attendues ?
   - Y a-t-il des cas particuliers ou des contraintes ?

   **Exemple :** Pour la fonction `estPalindrome` de l'exercice 5, vous devez comprendre qu'un palindrome se lit identiquement dans les deux sens, en ignorant les espaces et la casse.

2. **Décomposer le problème**

   - Diviser le problème en sous-problèmes plus simples
   - Résoudre chaque sous-problème séparément

   **Exemple :** Pour vérifier si une chaîne est un palindrome, vous pouvez :

   1. Nettoyer la chaîne (enlever espaces, convertir en minuscules)
   2. Inverser la chaîne
   3. Comparer la chaîne originale avec la version inversée

3. **Planifier la solution**

   - Écrire les étapes de résolution en pseudo-code
   - Identifier les structures de données et algorithmes nécessaires

   **Exemple (pseudo-code) :**

   ```text
   FONCTION estPalindrome(chaine):
     chaine_nettoyee = enlever_espaces_et_convertir_minuscules(chaine)
     chaine_inversee = inverser(chaine_nettoyee)
     SI chaine_nettoyee EST ÉGAL À chaine_inversee:
       RETOURNER vrai
     SINON:
       RETOURNER faux
   ```

4. **Implémenter en code**

   - Transformer le pseudo-code en JavaScript
   - Commencer par une solution fonctionnelle avant d'optimiser

   **Exemple (implémentation) :**

   ```javascript
   function estPalindrome(chaine) {
     // Nettoyer la chaîne
     const chaineNettoyee = chaine.toLowerCase().replace(/\s/g, "");
     // Inverser
     const chaineInversee = chaineNettoyee.split("").reverse().join("");
     // Comparer
     return chaineNettoyee === chaineInversee;
   }
   ```

5. **Tester et déboguer**

   - Vérifier avec des exemples variés
   - Rechercher les erreurs et les corriger

   **Exemple (tests) :**

   ```javascript
   console.log(estPalindrome("radar")); // true
   console.log(estPalindrome("hello")); // false
   console.log(estPalindrome("A man a plan a canal Panama")); // true
   ```

6. **Optimiser si nécessaire**

   - Améliorer la lisibilité du code
   - Optimiser la performance si pertinent

   **Exemple (optimisation) :**

   ```javascript
   function estPalindrome(chaine) {
     // Version plus efficace qui compare les caractères directement
     const chaineNettoyee = chaine.toLowerCase().replace(/\s/g, "");

     // Comparer caractère par caractère de chaque côté
     for (let i = 0; i < Math.floor(chaineNettoyee.length / 2); i++) {
       if (
         chaineNettoyee[i] !== chaineNettoyee[chaineNettoyee.length - 1 - i]
       ) {
         return false;
       }
     }
     return true;
   }
   ```

**Conseil final :** La clé pour résoudre des problèmes de programmation est la pratique régulière. Plus vous résolvez de problèmes, plus vous devenez à l'aise avec ces stratégies et meilleur vous devenez en programmation.

**Lien avec les exercices :**
Ces stratégies sont particulièrement importantes pour l'exercice 5, mais elles s'appliquent à tous les exercices et à la programmation en général.
