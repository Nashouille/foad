function estPremier(n) {
    if (n <= 1)return false;
    if (n <= 3)return true;

    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 2){
        if (n % i === 0) return false;
    }

    return true;
} 
let nombre = 27;
console.log(`${nombre} est${estPremier(nombre) ? " bien" : " pas du tout"} un nombre premier `);