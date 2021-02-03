const person = { name : 'jack', age:23, address: 'california', institution: 'oxford university' ,nationnality : 'london'}


const{ address,institution,age,nationnality} = person;

// const address = person.address;
// const institution = person.institution;
// console.log(address, nationnality);
// console.log(institution, age);

const friends = [ 'riaz','nahin','mortuja','shovo','rafi','munna','rahat'];
const [ first,second,third,...last4] = friends;

const complexObject ={
    name : 'z',
    info:{
        address:"mirpur",
        leader:"azim khan"
    }

}

const{leader} =complexObject.info





console.log(first,second,third);
console.log(last4);
