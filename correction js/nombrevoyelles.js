function countVowels(string) {
    const vowels = "aeiouyAEIOUY";
    return string.split('').filter(char => vowels.includes(char)).length;
}

// Exemple d'utilisation
console.log(countVowels("radar")); // 2
console.log(countVowels("hello world")); // 3