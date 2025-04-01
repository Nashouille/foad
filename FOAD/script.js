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

const taskText = taskInput.value.trim(); 
if (taskText !== '') {} 
const newTask = { 
    id: Date.now(), // Un ID unique basé sur le timestamp actuel 
    text: taskText, // Le texte de la tâche 
completed: false // Non terminée par défaut 
};
tasks.push(newTask); 
saveTasks(); 
renderTask(newTask); 
taskInput.value = ''; 

addTaskBtn.addEventListener('click', addTask); 
taskInput.addEventListener('keypress', function(e) { 
    if (e.key === 'Enter') { 
        addTask(); 
    } 
}); 
 
function addTask() { 
    const taskText = taskInput.value.trim(); 
     
    if (taskText !== '') { 
        // Créer un nouvel objet tâche 
        const newTask = { 
            id: Date.now(), // Utilisation du timestamp comme ID unique 
            text: taskText, 
            completed: false 
        };
           // Ajouter la tâche au tableau 
           tasks.push(newTask); 
         
           // Sauvegarder dans le localStorage 
           saveTasks(); 
            
           // Afficher la tâche 
           renderTask(newTask); 
            
           // Vider le champ de saisie 
           taskInput.value = ''; 
       } 
   }


   function renderTask(task) { 
    // Créer l'élément li 
    const li = document.createElement('li'); 
    li.className = 'task-item'; 
    li.dataset.id = task.id; 
     
    // Créer la checkbox 
    const checkbox = document.createElement('input'); 
    checkbox.type = 'checkbox'; 
    checkbox.checked = task.completed; 
    checkbox.addEventListener('change', toggleTask); 
     
    // Créer le span pour le texte 
    const span = document.createElement('span'); 
    span.className = 'task-text'; 
    span.textContent = task.text; 
    if (task.completed) { 
        span.classList.add('completed'); 
    } 
     
    // Créer le bouton de suppression 
    const deleteBtn = document.createElement('button'); 
    deleteBtn.className = 'delete-btn'; 
    deleteBtn.textContent = 'Supprimer'; 
    deleteBtn.addEventListener('click', deleteTask); 
     
    // Assembler les éléments 
    li.appendChild(checkbox); 
    li.appendChild(span); 
    li.appendChild(deleteBtn); 
     
    // Ajouter à la liste 
    taskList.appendChild(li); 
} 
 
function loadTasks() { 
    // Récupérer les tâches depuis le localStorage 
    const savedTasks = localStorage.getItem('tasks'); 
     
    if (savedTasks) { 
        tasks = JSON.parse(savedTasks); 
         
        // Afficher toutes les tâches 
        tasks.forEach(task => { 
            renderTask(task); 
        }); 
    } 
} 

function deleteTask(e) { 
    // Trouver l'ID de la tâche 
    const taskId = parseInt(e.target.parentElement.dataset.id); 
     
    // Filtrer le tableau pour supprimer la tâche 
    tasks = tasks.filter(task => task.id !== taskId); 
     
    // Sauvegarder 
    saveTasks(); 
     
    // Supprimer de l'interface 
    e.target.parentElement.remove(); 
} 
function saveTasks() { 
    localStorage.setItem('tasks', JSON.stringify(tasks)); 
    }