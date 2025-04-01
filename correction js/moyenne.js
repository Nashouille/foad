function calculateAverage(array) {
    if (array.length === 0) return 0; // Gérer le cas d'un tableau vide
    // Utiliser reduce pour calculer la somme des éléments du tableau
    // et diviser par la longueur du tableau pour obtenir la moyenne
    const sum = array.reduce((acc, num) => acc + num, 0);
    return sum / array.length;
}

// Exemple d'utilisation
console.log(calculateAverage([10, 20, 30])); // 20
console.log(calculateAverage([])); // 0