/*
 * Exercice 6 : Manipulation du DOM et Gestion des Événements
 *
 * Objectif : Apprendre à manipuler le DOM et à gérer les événements en JavaScript.
 *
 * Instructions :
 * Nous allons créer une petite application de liste de tâches (Todo List).
 *
 * Partie 1 : Structure HTML
 * Créez un fichier HTML (perso/exercices/06_dom_events.html) avec la structure suivante :
 * - Un titre "Ma Liste de Tâches"
 * - Un formulaire avec un champ de saisie et un bouton "Ajouter"
 * - Une liste non ordonnée (ul) avec l'id "tache-liste"
 * - N'oubliez pas d'inclure ce fichier JavaScript dans votre HTML
 *
 * Partie 2 : Sélection des éléments du DOM
 * 1. Sélectionnez et stockez dans des variables :
 *    - Le formulaire
 *    - Le champ de saisie
 *    - La liste des tâches (ul)
 *
 * Partie 3 : Ajout de tâches
 * 1. Créez une fonction 'ajouterTache' qui :
 *    - Récupère la valeur du champ de saisie
 *    - Vérifie que cette valeur n'est pas vide
 *    - Crée un nouvel élément de liste (li)
 *    - Ajoute le texte de la tâche à cet élément
 *    - Ajoute cet élément à la liste des tâches
 *    - Vide le champ de saisie
 *
 * 2. Ajoutez un gestionnaire d'événement 'submit' au formulaire qui :
 *    - Empêche le comportement par défaut du formulaire
 *    - Appelle la fonction ajouterTache
 *
 * Partie 4 : Suppression et marquage des tâches
 * 1. Modifiez la fonction 'ajouterTache' pour :
 *    - Ajouter un bouton "Supprimer" à chaque élément de liste
 *    - Ajouter une fonctionnalité pour marquer une tâche comme terminée
 *      lorsqu'on clique dessus (par exemple en barrant le texte)
 *
 * 2. Créez une fonction 'supprimerTache' qui :
 *    - Supprime l'élément de liste parent du bouton cliqué
 *
 * 3. Créez une fonction 'basculerTermine' qui :
 *    - Ajoute ou enlève une classe CSS à l'élément de liste pour le marquer comme terminé
 *
 * 4. Ajoutez les gestionnaires d'événements appropriés aux boutons et éléments de liste
 *
 * Partie 5 : Améliorations (optionnel)
 * 1. Ajoutez la possibilité de filtrer les tâches (toutes, terminées, à faire)
 * 2. Ajoutez la persistance locale en utilisant localStorage
 * 3. Ajoutez la possibilité de modifier une tâche existante
 *
 * Structure recommandée :
 * 1. Sélectionnez d'abord tous les éléments du DOM nécessaires
 * 2. Définissez les fonctions pour ajouter, supprimer et marquer les tâches
 * 3. Ajoutez les gestionnaires d'événements
 * 4. Testez votre application en ajoutant et gérant des tâches
 */

// Votre code commence ici
