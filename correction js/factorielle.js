//factorielle

//variable pour nombre entier
let nombre = 10;
//variable pour la factorielle
let factorielle = 1;

//faire une boucle pour parcourir le tableau jusqu'à nombre
for(let i=1; i<=nombre;i++){
    //calculer la factorielle
    factorielle = factorielle*i;
}
console.log("La factorielle de "+nombre+" est : "+factorielle);