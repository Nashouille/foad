//tableau
// Créer un tableau de 5 entiers et afficher la valeur maximale du tableau
let array = [3,7,12,9,5];
// crééation d'une variable max qui va contenir la valeur maximale du tableau
let max = array[0];

// on va parcourir le tableau pour trouver la valeur maximale
// on commence par la première valeur du tableau
// on va comparer chaque valeur du tableau avec la valeur maximale
for(let i=1; i<=array.length;i++){
    // si la valeur actuelle est supérieure à la valeur maximale
    // on va mettre à jour la valeur maximale
    if(array[i]>max){
        // on met à jour la valeur maximale
        // on va mettre à jour la valeur maximale
        max = array[i];
    }
}
console.log("La valeur maximale du tableau array est : "+max);