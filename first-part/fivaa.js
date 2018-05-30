function fivaa(n){

    for (let index = n; index > 0; index--) {
        let result = [index-1, index-1];
        for (let j = 0; j < index; j++) {
            result.push(index+1);
        }
        console.log(result.join(''));
    }

}

fivaa(5);