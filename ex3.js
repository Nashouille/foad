const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const secret = Math.floor(Math.random() * 100) + 1;
let tentative = 0;

console.log("Bienvenue dans le jeu du nombre mystère !");
console.log("Essayez de deviner un nombre entre 1 et 100.");

function deviner() {
    rl.question('Entrez un nombre : ', (reponse) => {
        const nombre = parseInt(reponse, 10);
        tentative++;

        if (isNaN(nombre) || nombre < 1 || nombre > 100) {
            console.log("Veuillez entrer un nombre valide entre 1 et 100 !");
            return deviner();
        }

        if (nombre < secret) {
            console.log("Trop petit ! Essayez encore.");
            deviner();
        } else if (nombre > secret) {
            console.log("Trop grand ! Essayez encore.");
            deviner();
        } else {
            console.log(`Bravo ! Vous avez trouvé le nombre ${secret} en ${tentative} tentatives.`);
            rl.close();
        }
    });
}

deviner();
