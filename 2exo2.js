
function estPalindrome(str) {
    
    str = str.replace(/\s+/g, '').toLowerCase();
  
   
    return str === str.split('').reverse().join('');
  }
  
  
  let chaine = "kiwi";
  
  if (estPalindrome(chaine)) {
    console.log(`La chaîne "${chaine}" est un palindrome.`);
  } else {
    console.log(`La chaîne "${chaine}" n'est pas un palindrome.`);
  }
  