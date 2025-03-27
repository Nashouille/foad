const nombre = 5; 

for (let i = 1; i <= 10; i++) {
    console.log(`${nombre} x ${i} = ${nombre * i}`);
}



const tableau = [3, 7, 2, 9, 12, 5]; 
let max = tableau[0]; 

for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] > max) {
        max = tableau[i]; 
    }
}

console.log(`La valeur maximale est : ${max}`);



const n = 5; 
let factorielle = 1; 

for (let i = 1; i <= n; i++) {
    factorielle *= i; 
}

console.log(`La factorielle de ${n} est : ${factorielle}`);




