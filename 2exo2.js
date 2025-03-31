function estPalindrome(str) {
    
    str = str.replace(/\s+/g, '').toLowerCase();
    
    
    let strInverse = str.split('').reverse().join('');
    
    if (str === strInverse) {
        console.log("C'est un palindrome.");
    } else {
        console.log("Ce n'est pas un palindrome.");
    }
}

