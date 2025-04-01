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