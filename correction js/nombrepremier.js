function estPremier(nombre){
    // vérifier si le nombre est négatif et inférieur à 1 alors retourner false
    if(nombre <= 1){
        return false;
    }
    //Cas particulier pour le nombre 2
    if(nombre == 2){
        return true;
    }
    //Vérifier si le nombre est pair
    if(nombre % 2 == 0){
        return false;
    }
    //Vérifier si le nombre est divisible par un nombre impair jus'qu'à sa racine carrée
    const racineCarree = Math.sqrt(nombre);

    for(let i=3; i<=racineCarree;i+=2){
        if(nombre % i == 0){
            return false;
        }
    }
    // Si le nombre n'est pas divisible par aucun nombre impair, il est premier
    return true;
}
// Exemple d'utilisation de la fonction estPremier
console.log(estPremier(7)); // true
console.log(estPremier(10)); // false
console.log(estPremier(2)); // true
console.log(estPremier(1)); // false
console.log(estPremier(-5)); // false