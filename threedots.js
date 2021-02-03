const num1 = [10,12,14, 16,18];
const num2 = [3,7,9,11,15];
const num3 = [27,32,67,88];
//const total = num1.concat(num2).concat([5]).concat(num3);
const total = [ ...num1,...num2,5,99,...num3];
console.log(total);


const businessman = 660;
const minister = 450 ;
const cricketer = 250;
const highest = [ 760,450,950];
//const maximum = Math.max(businessman,minister,cricketer);
const maximum = Math.max(...highest);
console.log(maximum);