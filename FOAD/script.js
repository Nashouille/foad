// 1. Sélection des éléments HTML dont nous aurons besoin 
// On les stocke dans des variables pour pouvoir les réutiliser 
const taskInput = document.getElementById('taskInput'); // Champ de 
saisie 
const addTaskBtn = document.getElementById('addTaskBtn'); // Bouton d'ajout 
const taskList = document.getElementById('taskList'); // Liste des 
tâches 
// 2. Initialisation du tableau qui contiendra toutes nos tâches 
// Chaque tâche sera un objet {id, text, completed} 
let tasks = []; // let car le contenu va changer 
// 3. Au chargement de la page, on vérifie si des tâches sont 
sauvegardées 
// dans le localStorage et on les charge si c'est le cas 
loadTasks(); 