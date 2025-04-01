function drawTree(height) {
    let tree = "";
    
    // Dessiner l'arbre
    for (let i = 1; i <= height; i++) {
        // Calculer les espaces et les étoiles pour chaque ligne
        // Créer une chaîne de caractères pour chaque ligne
        let spaces = " ".repeat(height - i);
        // Créer une chaîne de caractères pour les étoiles
        // Répéter l'étoile pour chaque ligne
        // On utilise trim() pour enlever les espaces à la fin de la ligne
        let stars = "* ".repeat(i);
        tree += spaces + stars.trim() + "\n";
    }
    
    console.log(tree);
}

drawTree(30);