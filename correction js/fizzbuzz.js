for(let i=1; i<=30; i++){
    //vérifier si le nombre est divisible par 3 et 5
    // afficher "FizzBuzz"
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    // vérifier si le nombre est divisible par 3
    // afficher "Fizz"
    }else if(i % 3 === 0){
        console.log("Fizz");
    // vérifier si le nombre est divisible par 5
    // afficher "Buzz"
    }else if(i % 5 === 0){
        console.log("Buzz");
    }else{
    //afficher le nombre
        console.log(i);
    }
}