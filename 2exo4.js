
function trierTableauAlphabétique(tab) {
    return tab.sort();
  }
  
  
  const tableauNonTrie = ["banane", "pomme", "abricot", "orange", "kiwi"];
  
  const tableauTrie = trierTableauAlphabétique(tableauNonTrie);
  
  console.log("Tableau trié en ordre alphabétique : ", tableauTrie);
  