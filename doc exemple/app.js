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