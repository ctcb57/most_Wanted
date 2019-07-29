<<<<<<< HEAD
"use strict"

// function createParentIdArrays(array){//Creates 2 Arrays of parent id
//     let test2 = [];
//     let a = array.map(a => a.parents[0]);
//     let b = array.map(a => a.parents[1]);
//     test2.push(a);
//     test2.push(b);
//     return test2;
// }
=======
let parent = data[8];
// console.log(person);

//this function takes the person that is taken from the prompt and pulls their ID number
function pullIdNumber(parent){
    let id = parent.id;
    return id;
}
// let testiD = (pullIdNumber(person));


// 822843554

function createParentIdArrays(array){//Creates 2 Arrays of parent id
    let test2 = [];
    let a = array.map(a => a.parents[0]);
    let b = array.map(a => a.parents[1]);
    test2.push(a);
    test2.push(b);
    return test2;
}

// let testArray = createParentIdArrays(data);
// console.log(testArray);
>>>>>>> 50e9748d197ebb2527e42969dfc1ffe57f2e7500

// let a = data.map(a => a.parents[0]);
// console.log(a);

<<<<<<< HEAD
// function searchForParentMatch(array, value){
//     let indexes = [], i = -1, j = -1;
//     while((i = array[0].indexOf(value, i + 1)) != -1){
//         indexes.push(i);
//     }
//     while((j = array[1].indexOf(value, j + 1)) != -1){
//         indexes.push(j);
//     }
//     return indexes;
// }
=======
function searchForParentMatch(array, value){
    let indexes = [], i = -1, j = -1;
    while((i = array[0].indexOf(value, i + 1)) != -1){
        indexes.push(i);
    }
    while((j = array[1].indexOf(value, j + 1)) != -1){
        indexes.push(j);
    }
    return indexes;
}
>>>>>>> 50e9748d197ebb2527e42969dfc1ffe57f2e7500

// let testChildArray = searchForParentMatch(testArray, 693243224);
// console.log(testChildArray);

<<<<<<< HEAD
// function convertIndexToObject(array, childIndex){
//     let objectArray = [];
//     for(let i = 0; i < array.length && i < childIndex.length; i++){
//             // console.log(people[i]);
//             objectArray.push(array[childIndex[i]]);
//         }
    
//     // console.log(objectArray);
//     return objectArray;
// }
=======
function convertIndexToObject(array, childIndex){
    let objectArray = [];
    for(let i = 0; i < array.length && i < childIndex.length; i++){
            objectArray.push(array[childIndex[i]]);
        }
    return objectArray;
}
>>>>>>> 50e9748d197ebb2527e42969dfc1ffe57f2e7500
// console.log(convertIndexToObject(data, testChildArray));

// convertIndexToObject(data, )
// console.log(searchForParentMatch(testArray, 693243224));

// searches the array and returns an array of the indexes where the match occurs
// function getAllIndexes(arr, val) {
//     var indexes = [], i = -1;
//     while ((i = arr.indexOf(val, i+1)) != -1){
//         indexes.push(i);
//     }
//     return indexes;
// }

// console.log(getAllIndexes(a, 693243224));

function printChildNames(objectArray){
    let listOfNames = [];
    for(let i = 0; i < objectArray.length; i++){
        let personInfo = "Child: " + objectArray[i].firstName + " " + objectArray[i].lastName;
        // console.log(personInfo);
        listOfNames.push(personInfo);
    }
    return listOfNames;
}


// final product of the function
function findChild(array, parent){
    let separateArrays = createParentIdArrays(array);
    let idMatch = searchForParentMatch(separateArrays, parent.id);
    let children = convertIndexToObject(data, idMatch);
    let childrenNames = (printChildNames(children));
    return childrenNames;
}

function findDescendants(array, parent){
    let descendants = [];
    let nonDescendants = [];
    let separateArrays = createParentIdArrays(array);
    let idMatch = searchForParentMatch(separateArrays, parent.id);
    let children = convertIndexToObject(data, idMatch);
    for(let i = 0; i < children.length; i++){
        descendants.push(children[i]);
        let grandchildCheck = findDescendants(data, children[i]);
        if(!Array.isArray(grandchildCheck) || !grandchildCheck.length){
            nonDescendants.push(grandchildCheck);
        }
        else{
            descendants.push(grandchildCheck[0]); 
        }
    }
    return descendants;
    
}

alert(printChildNames(findDescendants(data, parent)));




// if(!Array.isArray(grandchildCheck) || !grandchildCheck.length){
//     nonDescendants.push(grandchildCheck);
// }
// else{
//     descendants.push(grandchildCheck); 
// }

// console.log(findChild(data, parent));


// / let foundParents = data.map(function(e){
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

// function searchByHeightWeight(array, response){
// 	let heightInput = prompt("Enter height:");
// 	let weightInput = prompt("Enter weight:");
// 	let foundHeight = searchByHeight(data, heightInput);
// 	let foundHeightWeight = searchByWeight(foundHeight, weightInput);
// 	return foundHeightWeight;
// }

// function multiTraitSearch(array, response){
// 	let weightResult = [];
// 	let genderInput = prompt("Enter gender:");
// 	let genderResult = searchByGender(data, genderInput);
// 	let eyeColorInput = prompt("Enter eye color:");
// 	let eyeColorResult = searchByEyeColor(genderResult, eyeColorInput);
// 	let occupationInput = prompt("Enter occupation:");
// 	let occupationResult = searchByOccupation(eyeColorResult, occupationInput);
// 	let heightInput = prompt("Enter height in inches:");
// 	let heightResult = searchByHeight(occupationResult, heightInput);
// 	let weightInput = prompt("Enter weight:");
// 	weightResult = searchByWeight(heightResult, weightInput);
	// let ageInput = prompt("Enter age:");
	// ageResult = searchByAge(weightResult, ageInput);
// 	return weightResult;
// }
// console.log(multiTraitSearch(data));

// function traitSearch(array, response){
// 	let result = [];
// 	let searchTrait = promptFor("Do you know any traits of the person you are looking for? If yes enter one of the following: 'gender', 'age', 'height', 'weight', 'eye color', or 'occupation'. If no enter 'no'.", chars);
//         switch(searchTrait){
//           case 'gender':
//           let genderInput = promptFor("Enter gender:", chars);
//           console.log(searchByGender(data, genderInput));

//           break;
//           case 'age':
//           let ageInput = promptFor("Enter age:", chars);
//           console.log(searchByAge(people, ageInput));
//           break;
//           case 'height':
//           let heightInput = promptFor("Enter height in inches (ex. 5ft. 8in. is '68'):", chars);
//           console.log(searchByHeight(people, heightInput));
//           break;
//           case 'weight':
//           let weightInput = promptFor("Enter weight:", chars);
//           console.log(searchByWeight(people, weightInput));
//           break;
//           case 'eye color':
//           let eyeInput = promptFor("Enter eye color:", chars);
//           console.log(searchByEyeColor(people, eyeInput));
//           break;
//           case 'occupation':
//           let occupationInput = promptFor("Enter occupation:", chars);
//           console.log(searchByOccupation(people, occupationInput));
//           break;
// }




// function displayInfo(person){
//     let personInfo = "First Name: " + person.firstName + "\n";
//     personInfo += "Last Name: " + person.lastName + "\n";
//     personInfo += "gender: " + person.gender + "\n";
//     personInfo += "dob: " + person.dob + "\n";
//     personInfo += "height: " + person.height + "\n";
//     personInfo += "weight: " + person.weight + "\n";
//     personInfo += "eyeColor: " + person.eyeColor + "\n";
//     personInfo += "occupation: " + person.occupation + "\n";
//     alert(personInfo);
//     return(personInfo);
// }

// function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  // let personInfo = "First Name: " + person.firstName + "\n";
  // personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display(basically going to show the object)
//   alert(personInfo);
// }


// function searchByGender(array, response){
// 	let foundGender = array.filter(function(person){
//     		if(person.gender == response){
//     			 console.log(person.firstName + " " + person.lastName);
//       			return true;
//     		}
//     		else{
//     			return false;
//     			console.log("No result with this trait");
//     		} 		
// 	});
// 	return foundGender;
// }

// function searchByEyeColor(array, response){
	// let eyeColorInput = promptFor("Enter eye color:", chars);
// 	let foundEyeColor = array.filter(function(person){
//     		if(person.eyeColor == response){
//     			console.log(person.firstName + " " + person.lastName);
//       			return true;
//     		}
//     		else{
//     			return false;
//     			console.log("No result with this trait");
//     		} 		
// 	});
// 	return foundEyeColor;
// }

// function searchByHeight(array, response){
// 	let foundHeight = array.filter(function(person){
//     		if(person.height == response){
//     			console.log(person.firstName + " " + person.lastName);
//       			return true;
//     		}
//     		else{
//     			return false;
//     			console.log("No result with this trait");
//     		} 		
// 	});
// 	return foundHeight;
// }

// function searchByWeight(array, response){
// 	let foundWeight = array.filter(function(person){
//     		if(person.weight == response){
//     			console.log(person.firstName + " " + person.lastName);
//       			return true;
//     		}
//     		else{
//     			return false;
//     			console.log("No result with this trait");
//     		} 		
// 	});
// 	return foundWeight;
// }

// function searchByAge(array, response){
// 	let foundAge = array.filter(function(person){
//     		if(person.age == response){
//     				console.log(person.firstName + " " + person.lastName);
//       			return true;
//     		}
//     		else{
//     			return false;
//     			console.log("No result with this trait");
//     		} 		
// 	});
// 	return foundAge;
// }

// function searchByOccupation(array, response){
// 	let foundOccupation = array.filter(function(person){
//     		if(person.occupation == response){
//     			console.log(person.firstName + " " + person.lastName);
//       			return true;
//     		}
//     		else{
//     			return false;
//     			console.log("No result with this trait");
//     		} 		
// 	});
// 	return foundOccupation;
// }

// function displayGender(array, person){
//     for (let i = 0; i < array.length; i++){
//       if(array[i].person.gender == male){
//         return person.firstName + " " + person.lastName;
//       }
//       else{
//         return person.firstName + " " + person.lastName;
//       }
//     }
// }
// console.log(displayGender(data));


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
// console.log(getAge(19920405));

// console.log(data.forEach(getAge));

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


<<<<<<< HEAD
// data.age = getAge(data.dob);
=======
// console.log(getAge(data[0].dob));
>>>>>>> 50e9748d197ebb2527e42969dfc1ffe57f2e7500

// console.log(getAge(data[1].dob));


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
// function findChild(array, index){//takes index value and returns child name
//     for (var i=0; i<array.length; i++) {
//         if(i == index){
//         return data[index].firstName + " " + data[index].lastName;
//         }
//     }
// }

// console.log(findChild(data, 16));

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

//function that returns an array of the indexes
// function getAllIndexes(arr, val) {
//     var indexes = [], i = -1;
//     while ((i = arr.indexOf(val, i+1)) != -1){
//         indexes.push(i);
//     }
//     return indexes;
// }

// console.log(getAllIndexes(a, 693243224));

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

//function that searches by gender
// function searchByGender(array, response){
//     let foundGender = array.filter(function(person){
//            if(person.gender == response){
//                  return true;
//            }
//            else{
//                return false;
//            }         
//     });
//     return foundGender;
// }
// console.log(searchByGender(data, "female"));
// function promptFor(question, valid){
//   do{
//     var response = prompt(question).trim();
//   } while(!response || !valid(response));
//   return response;
// }
// function chars(input){
//   return true; // default validation only
// }


//game plan:
//use the functions examples above in order to pull all of the parents arrays out of data
//then the function will search [0] and [1] of parents and identify the indexes where the match exists
//the function will then use the original array and pull the name from that index point which will then list a dependent