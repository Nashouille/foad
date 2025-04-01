function isPalindrome(word) {
    // Convertir le mot en minuscules pour ignorer la casse
    const lowerCaseWord = word.toLowerCase();
    // Inverser le mot
    const reversedWord = lowerCaseWord.split('').reverse().join('');
    // Vérifier si le mot original est égal au mot inversé
    return lowerCaseWord === reversedWord;
}

// Exemple d'utilisation
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("hello")); // false








