function estPremier(n) {
    if (n <= 1) return false; 
    if (n <= 3) return true; 

    if (n % 2 === 0 || n % 3 === 0) return false; 

    for (let i = 5; i * i <= n; i += 2) { 
        if (n % i === 0) return false;
    }

    return true;
}


const nombre = 29; 
console.log(`${nombre} est${estPremier(nombre) ? "" : " pas"} un nombre premier.`);



function triBulles(tableau) {
    let n = tableau.length;
    let echange; 

    do {
        echange = false;
        for (let i = 0; i < n - 1; i++) {
            if (tableau[i] > tableau[i + 1]) {
                
                [tableau[i], tableau[i + 1]] = [tableau[i + 1], tableau[i]];
                echange = true;
            }
        }
        n--; 
    } while (echange);

    return tableau;
}


const tableau = [5, 2, 9, 1, 3, 7];
console.log("Tableau trié :", triBulles(tableau));



