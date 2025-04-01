// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//    }
//    let somme= arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7]+arr[8]+arr[9];
//    let moyenne = somme/arr.length;
//    console.log("la moyenne est: "+moyenne);
   
   let tab = [12, 5, 25, 200, 15];


   let moyenne = tab.reduce((acc, curr) => acc + curr, 0) / tab.length;
   
   console.log(moyenne);