/*
 * Correction Exercice 6 : Manipulation du DOM et Gestion des Événements
 */

// Partie 2 : Sélection des éléments du DOM
// Sélectionner les éléments nécessaires du DOM
const tacheForm = document.getElementById("tache-form");
const tacheInput = document.getElementById("tache-input");
const tacheListe = document.getElementById("tache-liste");

// Partie 3 : Ajout de tâches
// Fonction pour ajouter une nouvelle tâche
function ajouterTache() {
  // Récupérer la valeur du champ de saisie et supprimer les espaces inutiles
  const texte = tacheInput.value.trim();

  // Vérifier que le texte n'est pas vide
  if (texte !== "") {
    // Créer un nouvel élément de liste
    const nouveauLi = document.createElement("li");

    // Créer un span pour le texte de la tâche (pour pouvoir le styler séparément)
    const tacheTexte = document.createElement("span");
    tacheTexte.textContent = texte;
    tacheTexte.className = "tache-texte";

    // Ajouter un gestionnaire d'événement pour marquer comme terminé
    tacheTexte.addEventListener("click", function () {
      basculerTermine(nouveauLi);
    });

    // Créer un bouton pour supprimer la tâche
    const supprimerBtn = document.createElement("button");
    supprimerBtn.textContent = "Supprimer";
    supprimerBtn.className = "supprimer-btn";

    // Ajouter un gestionnaire d'événement pour supprimer
    supprimerBtn.addEventListener("click", function () {
      supprimerTache(nouveauLi);
    });

    // Ajouter le texte et le bouton à l'élément de liste
    nouveauLi.appendChild(tacheTexte);
    nouveauLi.appendChild(supprimerBtn);

    // Ajouter l'élément de liste à la liste des tâches
    tacheListe.appendChild(nouveauLi);

    // Vider le champ de saisie
    tacheInput.value = "";

    // Remettre le focus sur le champ de saisie pour faciliter l'ajout d'autres tâches
    tacheInput.focus();
  }
}

// Partie 4 : Suppression et marquage des tâches
// Fonction pour supprimer une tâche
function supprimerTache(element) {
  // Supprimer l'élément de liste de son parent (la liste ul)
  tacheListe.removeChild(element);
}

// Fonction pour marquer une tâche comme terminée ou non
function basculerTermine(element) {
  // Ajouter ou enlever la classe 'terminee' à l'élément
  element.classList.toggle("terminee");
}

// Partie 3 & 4 : Gestionnaires d'événements
// Gestionnaire d'événement pour le formulaire
tacheForm.addEventListener("submit", function (event) {
  // Empêcher le comportement par défaut du formulaire (rechargement de la page)
  event.preventDefault();

  // Appeler la fonction pour ajouter une tâche
  ajouterTache();
});

/*
 * Partie 5 : Améliorations (optionnel) - Persistance avec localStorage
 *
 * Voici comment vous pourriez implémenter la persistance des tâches :
 */

// Charger les tâches depuis localStorage au chargement de la page
function chargerTaches() {
  // Récupérer les tâches depuis localStorage
  const tachesSauvegardees = localStorage.getItem("taches");

  // Vérifier si des tâches sont sauvegardées
  if (tachesSauvegardees) {
    // Convertir la chaîne JSON en tableau d'objets
    const taches = JSON.parse(tachesSauvegardees);

    // Ajouter chaque tâche à la liste
    taches.forEach((tache) => {
      // Créer un nouvel élément de liste
      const nouveauLi = document.createElement("li");
      if (tache.terminee) {
        nouveauLi.classList.add("terminee");
      }

      // Créer le span pour le texte
      const tacheTexte = document.createElement("span");
      tacheTexte.textContent = tache.texte;
      tacheTexte.className = "tache-texte";
      tacheTexte.addEventListener("click", function () {
        basculerTermine(nouveauLi);
        sauvegarderTaches();
      });

      // Créer le bouton supprimer
      const supprimerBtn = document.createElement("button");
      supprimerBtn.textContent = "Supprimer";
      supprimerBtn.className = "supprimer-btn";
      supprimerBtn.addEventListener("click", function () {
        supprimerTache(nouveauLi);
        sauvegarderTaches();
      });

      // Assembler et ajouter à la liste
      nouveauLi.appendChild(tacheTexte);
      nouveauLi.appendChild(supprimerBtn);
      tacheListe.appendChild(nouveauLi);
    });
  }
}

// Sauvegarder les tâches dans localStorage
function sauvegarderTaches() {
  // Récupérer toutes les tâches de la liste
  const tachesElements = tacheListe.querySelectorAll("li");

  // Créer un tableau pour stocker les données des tâches
  const taches = [];

  // Pour chaque élément de liste, extraire les données nécessaires
  tachesElements.forEach((tache) => {
    const texte = tache.querySelector(".tache-texte").textContent;
    const terminee = tache.classList.contains("terminee");
    taches.push({ texte, terminee });
  });

  // Convertir le tableau en chaîne JSON et sauvegarder dans localStorage
  localStorage.setItem("taches", JSON.stringify(taches));
}

// Modifier les fonctions pour inclure la sauvegarde
// Fonction modifiée pour ajouter une tâche
function ajouterTache() {
  const texte = tacheInput.value.trim();
  if (texte !== "") {
    // Code existant pour créer l'élément...
    const nouveauLi = document.createElement("li");

    const tacheTexte = document.createElement("span");
    tacheTexte.textContent = texte;
    tacheTexte.className = "tache-texte";

    tacheTexte.addEventListener("click", function () {
      basculerTermine(nouveauLi);
      sauvegarderTaches(); // Sauvegarder après modification
    });

    const supprimerBtn = document.createElement("button");
    supprimerBtn.textContent = "Supprimer";
    supprimerBtn.className = "supprimer-btn";

    supprimerBtn.addEventListener("click", function () {
      supprimerTache(nouveauLi);
      sauvegarderTaches(); // Sauvegarder après suppression
    });

    nouveauLi.appendChild(tacheTexte);
    nouveauLi.appendChild(supprimerBtn);
    tacheListe.appendChild(nouveauLi);

    tacheInput.value = "";
    tacheInput.focus();

    // Sauvegarder les tâches après ajout
    sauvegarderTaches();
  }
}

// Charger les tâches au démarrage
// Décommentez cette ligne pour activer la persistance avec localStorage
// chargerTaches();

/*
 * Points importants à comprendre :
 *
 * 1. Manipulation du DOM:
 *    - document.getElementById(): sélectionne un élément par son ID
 *    - document.createElement(): crée un nouvel élément
 *    - element.appendChild(): ajoute un enfant à un élément
 *    - element.removeChild(): supprime un enfant d'un élément
 *    - element.classList.toggle(): ajoute ou supprime une classe CSS
 *
 * 2. Gestion des événements:
 *    - element.addEventListener(): ajoute un gestionnaire d'événement
 *    - event.preventDefault(): empêche le comportement par défaut d'un événement
 *
 * 3. Formulaires:
 *    - Le comportement par défaut d'un formulaire est de recharger la page
 *    - Le gestionnaire d'événement 'submit' est déclenché lorsqu'un utilisateur soumet un formulaire
 *
 * 4. Manipulation de texte:
 *    - input.value: accède à la valeur d'un champ de saisie
 *    - String.trim(): supprime les espaces au début et à la fin d'une chaîne
 *
 * 5. localStorage:
 *    - localStorage.getItem(): récupère des données
 *    - localStorage.setItem(): sauvegarde des données
 *    - JSON.stringify(): convertit un objet JavaScript en chaîne JSON
 *    - JSON.parse(): convertit une chaîne JSON en objet JavaScript
 */
