
function compterVoyelles(chaine) {
  
    chaine = chaine.toLowerCase();
    
  
    const voyelles = ['a', 'e', 'i', 'o', 'u'];
    
   
    let compteur = 0;
  
    
    for (let i = 0; i < chaine.length; i++) {
     
      if (voyelles.includes(chaine[i])) {
        compteur++;
      }
    }
  
    return compteur;
  }
  
  
  const maChaine = "Bonjour tout le monde";
  
  const nombreDeVoyelles = compterVoyelles(maChaine);
  
  console.log(`La chaîne "${maChaine}" contient ${nombreDeVoyelles} voyelles.`);
  