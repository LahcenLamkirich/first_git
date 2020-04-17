
const names =  [
	{name:"lahcen" , note:18},
	{name:"Karim" , note:17},
	{name:"lamkirich" , note:16},
	{name:"Ahmed" , note:15},
	{name:"Mohamed" , note:14},
	{name:"Ismail" , note:12},
];

// this is for For boucle
	// for(student of names) {
	// 	console.log(student.name + ' ' + student.note);
	// }

// and this is for foreach 

names.forEach(function(person) {
	console.log(person.name)
});

// and for the map using the charmap

names.map(person => console.log(`The result is : ${person.name} and the note is ${person.note}`));


function employeur(...arsg) {
	console.log(arsg);
}
employeur("lahcen" , "lamkirich" , "Lala Hassna");

var numbers = ['4' , '9' , '16'] ;

numbers.map(person => console.log(Math.sqrt(person)));


const cities = ['tanger' , 'rabat' , 'Agdz' , 'Kech'];
const countries = ['Morocco' , 'Usa' , 'egypt'] ;
const newArray = [...cities , ...countries] ;
console.log(newArray);

const person = {
	name : 'Lahcen',
	age : '19'
};

	for(i=0; i<person.length;i++){
		console.log(i.name);
	}


// function getPerson({name , age}){
// 	return name + ' ' + age ;
// }

// console.log(getPerson(person));

var numbers_test = ['10' , '12' , '14' , '16'] ;

numbers_test.map(function(testtest){
	console.log(testtest)
});