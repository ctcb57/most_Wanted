// let foundParents = data.map(function(e){
//   return e.parents.e;
// }).indexOf(693243224);

// console.log(foundParents);

// let foundParent = data.findIndex(i => i.firstName.e === 693243224);

// console.log(foundParent);

// function getById(arr, value){ //returns child properties (note: not name) from array
//   for(let i = 0; i < arr.length ; i++){
//     if(arr[i].parents[0] == 693243224) return arr[i];
//   }
// }
// console.log(getById(data));

// let array = [];
// for(let i = 0; i < data.length; i++){
//     array.push(data[i].parents);
// }
// console.log(array);

// let hash = {};
// for(let i = 0 ; i < array.length; i += 1) {
//     hash[array[i]] = i;
// }

// let val = 693243224;

// if(hash.hasOwnProperty(val)) {
//     console.log(hash[val]);
// }

// // console.log(getById(data, 693243224));
// let foundArray = data[16].parents;
// console.log(foundArray);

// console.log(data[16].parents.length);
// let i = 0;
// while(i <)




// for(let i=0; i< data.length; i++){
//     let a = data[i];
//     // console.log(a);
//     for(let i = 0; i < a.parents.length; i++){
//         let result = a.parents[i];
//         console.log(result);
//     }
// }
// for(let i = 0; i < data.parents.length; i++){
//     console.log(data.map(data => data.parents[i]));
// }
// function findParentId(array, property){
// for(let i = 0; i < data.property.length; i++){
//     console.log(data.map(data => data.property[i]));
// }
// }
// findParentId(data, parents);

// function findParentId(array){//Creates 2 Arrays of parent id
// 	let test2 = [];
// 	let a = array.map(a => a.parents[0]);
// 	let b = array.map(a => a.parents[1]);
// 	test2.push(a);
// 	test2.push(b);
// 	return test2;
// }
// console.log(findParentId(data));
// function getAge(dateString) {
//     let today = new Date();
//     let birthDate = new Date(dateString);
//     let age = today.getFullYear() - birthDate.getFullYear();
//     let m = today.getMonth() - birthDate.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }
//     return age;
// }
// console.log(getAge(19920405))

// function getAge(str){ //gets age from string
// 	let today = new Date();
// 	let birthDate = new Date(str);
//     let m = today.getMonth() - birthDate.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }
//     let age = today.getFullYear() - birthDate.getFullYear();
//     return age;
// }
// console.log(getAge("4/5/1977"));

// function checkAge(array){ //attempt to get array of ages
// 	for(let i = 0, i.data.length, i++);
// 		[i] == age
// 	return data[i]person.firstName + " " + data[i]person.lastName;
// }
// console.log(getAge(data));

// let result = data.map(a => a.parents[0]);
// let result2 = data.map(a => a.parents[1]);
// console.log(result);
// console.log(result2);


// let testParentId = 693243224;

// function findPerson(array, index, property){
// for(let i =0; i < array.length; i++){
//     if(i == index){
//         let childName = array[i].property + " " + array[i].property;
//         console.log(childName);
//     }
// }
// }
// console.log(findPerson(16));



// let test = (Object.keys(data[16]));
// console.log(test);

// for(let i = 0; i < test.length; i++){
//     if(i === "firstName"){
//         console.log("found it");
//     }
// }
function findChild(array, index){//takes index value and returns child name
    for (var i=0; i<array.length; i++) {
        if(i == index){
        return data[index].firstName + " " + data[index].lastName;
        }
    }
}

console.log(findChild(data, 16));

// function findChild(array, obj){

// }


// Object.keys(data).forEach(function (key) {
//     console.log(data[key]);
//   });


// function getAllIndexes(arr, val){
//     var indexes = [], i = -1;
//     while ((i = arr.indexOf(val, i+1)) != -1){
//         indexes.push(i);
//         console.log(i);
//     }
//     return indexes;
// }

// function getAllIndexes(arr, val) {
//     var indexes = [], i = -1;
//     while ((i = arr.indexOf(val, i+1)) != -1){
//         indexes.push(i);
//     }
//     return indexes;
// }

// console.log(getAllIndexes(return, 693243224));

// let findParentIndex = result.indexOf(693243224);
// let findParentIndex2 = result2.indexOf(693243224);

// console.log(findParentIndex);
// console.log(findParentIndex2);

// let findParentIndexAgain = result.indexOf(693243224, 17);
// let findParentIndex2Again = result2.indexOf(693243224, 17);

// console.log(findParentIndexAgain);
// console.log(findParentIndex2Again);

// let repeat = result.indexOf(693243224, 18);
// let repeatAgain = result.indexOf(693243224, 19);
// let repeat2 = result.indexOf(693243224, 20);

// console.log(repeat);
// console.log(repeatAgain);
// console.log(repeat2);

//game plan:
//use the functions examples above in order to pull all of the parents arrays out of data
//then the function will search [0] and [1] of parents and identify the indexes where the match exists
//the function will then use the original array and pull the name from that index point which will then list a dependent