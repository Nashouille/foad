function perimetre(largeur, longueur) { 
    let resultat = 0; 
    // test si au moins un paramètre reçu 
    if (!largeur) { 
        resultat = 0; 
    } 
    else { 
        if (!longueur) {                        // 1 param recu : carré 
            resultat = 4 * largeur; 
        } 
        else { 
            if (arguments.length == 2) {        // 2 param : rectangle 
                resultat = (largeur + longueur) * 2; 
            } 
            else {                              // polygone 
                for (i in arguments) resultat += arguments[i]; 
            } 
        } 
        console.log(resultat); 
    } 
} 
perimetre();                // affiche  0 
perimetre(5);               // affiche 20 
perimetre(9, 6);            // affiche 30 
perimetre(3, 7, 20, 8);     // affiche 38