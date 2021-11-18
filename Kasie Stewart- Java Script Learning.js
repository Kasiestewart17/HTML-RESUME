//var x ="Kasie Stewart";  single line
 Kasie is a superstar multiple line 

//learning about alert
alert('Hello World');

//learning about console.log
console.log('Hello World');
//console.error('This is an error');


// learning about variables- var, let and const
// focus on let and const
//focus on let

let age = 30;
age = 31;
age = 20;
console.log(age); 

//learning about const
//const cannot be changed
//let can be reassign
//const cannot be reassign 
// difference is to don't use const if you want to reassign the variables
//const makes your code more secure, easier to not have error
// with const you have to add a value.
//with let you don't 

// things to add to variables
//string, numbers, boolean, null, undefined,symbol 
const name = "Kasie";
const age = 20;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; 

console.log(name);
console.log(age);
//console.log(rating);
//console.log(isCool);
//console.log(x);
//console.log(y);
//console.log(z);

//concatenation
console.log("My name is " + name + " and I am "+age)
// Template String
console.log (`My name is ${name} and I am ${age}`)

const Hello = `My name is ${name} and I am ${age}`
console.log (Hello);

const s = "Hello, World!";
console.log (s.length);

const s = "Hello, World!";
console.log (s.toUpperCase());

//substring
const s = "Hello, World!";
console.log (s.substring(0,5));

const s = "Hello, World!";
console.log (s.split (''));
// Arrays- variables that hold multiple values. 

const fruits = ['apples', 'oranges', 'pears']

fruits[3] = 'grapes';

fruits.push('mangoes');

//fruits.unshift('pineapple');

//console.log(fruits);

const person = {
	firstName: 'Tonia',
	lastName: 'Stewart',
	age: 20,
	hobbies: ['music','movies','sports'],
	address: {
		street: '1600 harden street',
		city: 'Colombia',
		state: 'SC'
			}
}
 
 console.log(person);

 const todos = [
 {
 	id: 1,
 	text: 'Take out trash',
 	isCompleted: true
 },
 {
 	id: 2,
 	text: 'Meeting with boss',
 	isCompleted: true
 },
 {
 	id:3,
 	text: 'Dentist appt',
 	isCompleted: false
 }
 ];
 console.log(todos[1].text); 

 // For loops
 for(let i = 0; i <10; i++) {
 	console.log(`For loop Numbers: ${i}`);  

 }

 // While loop
 let i = 0;
 while(i < 10) 
 {
 	console.log(`While Loop Numbers: ${i}`);
 i++;
 }
*/


/*
let Arr1= ["A","B","C","D","E","F","G","H"];
console.log (" This print from A to H");
for(let i=0; i<=7;i++){
	console.log (Arr1[i]);

}

let Arr2= ["A","B","C","D","E","F","G","H"];
console.log ("This print from A to E");
for(let i=0; i<=4;i++){
	console.log (Arr2[i]);
}

let Arr3= ["A","B","C","D","E","F","G","H"];
console.log ("This print from C to H ");
for(let i=2; i<=7;i++){
	console.log (Arr3[i]);
}

let Arr4= ["A","B","C","D","E","F","G","H"];
console.log ("This print from A to H");
for(let i=0; i<=7; i+=2){
	console.log(Arr4[i]);
}

let Arr5= ["A","B","C","D","E","F","G","H"];
console.log ("This print from A to H 3");
for(let i=0; i<=7; i+=3 ){
	console.log (Arr5[i]);
}

let Arr6= ["A","B","C","D","E","F","G","H"];
console.log ("This print from C to H");
for(let i=2; i<=7; i+=3){
	console.log (Arr6[i]);
}
*/

/*let sky="blue";

if (sky == "blue"){
	console.log ("It is a good sunny day");

}
else if (sky == "red"){
	console.log ("It is a rainbow");
}
else {
	console.log ("Nothing");
}



var radius= window.prompt ("Please enter the radius of a circle");
let floatRadius= parseFloat(radius).toFixed(2);
//console.log(floatRadius); 

let area= 3.14*(floatRadius**2);

console.log(area)

*/

var input1 = parseInt(window.prompt ("Enter your first number"));
var input2= parseInt(window.prompt ("Enter your second number"));
var input3= parseInt(window.prompt ("Enter your third number"));



function findSmall(input1, input2, input3){
	let small = input1
	if (input2< small){
		small= input2

	}	 if (input3<small){
		small = input3
    }
    return small;
}
 var newSmall = findSmall(input1,input2,input3);
 console.log(newSmall)



function findLarge(input1,input2, input3){
		let large = input1
	if (input2> large){
		large= input2

	}	 if (input3>large){
		large = input3
	}
	return large;
}
 var newLarge = findLarge(input1,input2,input3);
 console.log(newLarge)




function findMedium (input1,input2, input3, small, large){
		let medium= input1
	if (input1!=small && input1!=large){
		medium=input1
	}  if (input2!=small&& input2!=large){
		medium=input2
	}  if (input3!=small&& input3!=large){
		medium=input3
	}
	return medium;
}
  var newMedium = findMedium (input1,input2,input3, newSmall, newLarge);
 console.log (newMedium)


function printValue(small,medium,large){
console.log ("small = " +small);
console.log ("medium = " +medium);
console.log ("large = " +large);
}
printValue(newSmall,newMedium,newLarge)

/*
printValue(newSmall,newMedium,newLarge);
def diagonalsSort(a):
    n = len(a)
    for i in range(n):
        temp = []
        j = i
        k = 0
        
        while j>=0 and k <n:
            temp = temp + [a[j][k]]
            j = j-1
            k = k+1
        temp.sort()
        x = i
        y = 0
        while j >=0 and k< n:
            a[j][k]= t[k]
            j = j+1
            k = k+1
    for m in range(1, n):
        t = []
        j = n -1
        k = m
        while j >=0 and k <n:
            t = t + [a[j][k]]
            j = j-1
            k = k+1
        t.sort()
        j = n -1
        k = m
        while j >= 0 and k < n:
            a[j][k] = t[n-1-j]
            j = j -1
            k = k + 1
            
    print(a)   




function addValue (){
    let a =4+2
    return a 
}
console.log(addValue())

let sum = addValue()
console.log (sum)
