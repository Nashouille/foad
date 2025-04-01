
function calculerMoyenne(tab) {
    
    if (tab.length === 0) {
      return 0; 
    }
  
    
    const somme = tab.reduce((acc, valeur) => acc + valeur, 0);
  
    
    return somme / tab.length;
  }
  
  
  let tableau = [70, 400, 40, 40, 50];
  
  const moyenne = calculerMoyenne(tableau);
  console.log(`La moyenne des éléments du tableau est : ${moyenne}`);
  