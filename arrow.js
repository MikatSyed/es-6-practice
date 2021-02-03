// function doubleIt(num){
// return num * 2;
// }

// const doubleIt = function(num){
//     return num * 2;
// }


//arrow function
const doubleIt = num => num* 2;
const add = (x,y) => x + y;
const gives7 = () => 7;
const doMath =(x,y) =>{
    const sum = x + y ;
    const diff = x - y;
    const result = sum * diff;
    return result ;
}



 const result = doubleIt(20);
 const sum = add(20,70);
 const result7 = gives7();
 const total = doMath(7,5);
 console.log(result);
 console.log(sum);
 console.log(result7);
 console.log(total);