let n = 22;
for (let i = 2; i<= n; i++){
    let stars = "* ".repeat (i);
    let space = ' '.repeat (n-i);
    console.log(space+stars);
}


function rpyra(rows){
    for(let i = 0; i <=rows; i++){
        let spaces = "  ".repeat(rows-i)
        let stars = "* ".repeat(i)
        let pyramid = "* ".repeat(i)
        console.log(spaces + stars + pyramid)
    }
}

rpyra(20)

