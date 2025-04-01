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

addTaskBtn.addEventListener('click', addTask); // Bouton "Ajouter" 
taskInput.addEventListener('keypress', function(e) { 
if (e.key === 'Enter') { // Si la touche pressée est "Entrée" 
addTask(); 
} 
});

function addTask() { 
    // 1. Récupérer le texte saisi et supprimer les espaces inutiles 
    const taskText = taskInput.value.trim(); 
    // 2. Vérifier si le texte n'est pas vide 
    if (taskText !== '') { 
        // 3. Créer un objet représentant la nouvelle tâche 
        const newTask = { 
            id: Date.now(), // Identifiant unique (timestamp actuel) 
            text: taskText, // Texte de la tâche 
            completed: false // Par défaut, la tâche n'est pas terminée 
        }; 
         
        // 4. Ajouter la tâche au tableau `tasks` 
        tasks.push(newTask); 
         
        // 5. Sauvegarder dans le localStorage 
        saveTasks(); 
         
        // 6. Afficher la tâche dans l'interface 
        renderTask(newTask); 
         
        // 7. Vider le champ de saisie 
        taskInput.value = ''; 
    } 
} 