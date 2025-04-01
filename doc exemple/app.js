let titre = document.getElementById("titre");
titre.setAttribute("class", "rouge");
console.log(titre);

titre.innerHTML = "Ouais";

let infosOrange = document.getElementsByClassName("orange");
console.log(infosOrange);


let tousLesLiEtOl = document.querySelectorAll("li,ol");
console.log(tousLesLiEtOl)



let mesParagraphes = document.getElementsByTagName('p');

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("btn").addEventListener("click", function(){
        let monInput = document.getElementById("nom").value;

        alert(monInput);
    });
});

let btn1 = document.getElementById('btn1');

btn1.addEventListener("click", function(){
    let element = document.body;
    element.classList.toggle("dark-mode");
});


let btn2 = document.getElementById("button1");
 let btn3 = document.getElementById("button2");

 function courrir(){
    document.getElementById('speedyDepart').style.display="none";
    document.getElementById('speedyCourt').style.display="block";
}

function restart(){
    document.getElementById('speedyDepart').style.display="block";
    document.getElementById('speedyCourt').style.display="none";
}

btn2.addEventListener("click",courrir);
btn3.addEventListener("click",restart);



     
let div = document.getElementById('changement');
 div.addEventListener('click', function() {
      
div.style.backgroundColor = 'blue';
div.style.color = 'white';
 });

        
let paragraphe = document.getElementById('monParagraphe');
let bouton = document.getElementById('btnHighlight');

        
bouton.addEventListener('click', function() {
            
paragraphe.classList.add('highlight');
});





document.addEventListener('click', function()  {
    let deleteButtons = document.querySelectorAll('.Pear');

    deleteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const listItem = event.target.parentElement;
            listItem.remove();
        });
    });
});



//correction


// Sélectionne l'élément par son ID 
const element = document.getElementById("demo"); 
// Modifie son contenu textuel 
element.textContent = "Bonjour le monde!"; 



const bouton3 = document.getElementById("monBouton"); 
bouton3.addEventListener("click", function() { 
console.log("Vous avez cliqué!"); 
}); 


const div1 = document.getElementById("monDiv"); 
div1.addEventListener("click", function() { 
div1.style.backgroundColor = "blue"; 
div1.style.color = "white"; 
}); 


const liste = document.getElementById("maListe"); 
for (let i = 1; i <= 3; i++) { 
const item = document.createElement("li"); 
item.textContent = `Item ${i}`; 
liste.appendChild(item); 
} 