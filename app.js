"use strict"

function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no':", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      let foundPerson = searchByName(people);
      mainMenu(foundPerson, people);
      break;
    case 'no':
      let traitNumberSearch = promptFor("Do you want to search for all traits or one trait? Enter 'all' or 'one':", allOne).toLowerCase();
      switch(traitNumberSearch){
        case 'all':
          multiTraitSearch(data);
          break;
        case 'one':
          singleTraitSearch(data);
          break;
      }
      break;
  }
}


// Menu function to call once you find who you are looking for
function mainMenu(person, people){
  if(!person){
    alert("Could not find that individual.");
    return app(people); 
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");
  switch(displayOption){
    case "info":
        console.log(displayInfo(person));
        displayInfo(person);
        return;
    case "family":
        createFamily(data, person);
        return;
    case "descendants": 
        alert(printDescendantNames(findDescendants(data, person)));
        return;
    case "restart":
    app(people); 
    break;
    case "quit":
    return;
    default:
    return mainMenu(person, people); 
  }
}
function upperCaseFirstLetter(phrase){
    let separate = phrase.split(" "); 

    for(let i = 0; i < separate.length; i++){
        separate[i] = separate[i].charAt(0).toUpperCase() + separate[i].substring(1).toLowerCase();
    }
    return separate.join(" ");
}

function searchByName(people){
  let firstName = upperCaseFirstLetter(promptFor("What is the person's first name?", chars));
  let lastName = upperCaseFirstLetter(promptFor("What is the person's last name?", chars));

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  });

  return foundPerson[0];
}

function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  alert(personInfo);
}
function displayInfo(person){
    let personInfo = "First Name: " + person.firstName + "\n";
    personInfo += "Last Name: " + person.lastName + "\n";
    personInfo += "gender: " + person.gender + "\n";
    personInfo += "dob: " + person.dob + "\n";
    personInfo += "height: " + person.height + "\n";
    personInfo += "weight: " + person.weight + "\n";
    personInfo += "eyeColor: " + person.eyeColor + "\n";
    personInfo += "occupation: " + person.occupation + "\n";
    alert(personInfo);
    return(personInfo);
}
function displayFamily(person){
    let personInfo = "First Name: " + person.firstName + "\n";
    personInfo += "Last Name: " + person.lastName + "\n";
    personInfo += "currentSpouse: " + person.currentSpouse + "\n";
    return personInfo;
}
function searchByGender(array, str){
  let genderInput = promptFor("Enter gender 'female', 'male', or 'unknown:", feMale);
  let foundGender = array.filter(function(person){
        if(person.gender == genderInput){
          console.log(person.firstName + " " + person.lastName);
          return true;
        }
        else{
          return false;
        }
  });
    return foundGender;
}
function searchByEyeColor(array, response){
  let eyeInput = promptFor("Enter eye color 'blue', 'black', 'brown', 'hazel', 'green', or 'unknown':", eyeColorChoice);
  let foundEyeColor = array.filter(function(person){
        if(person.eyeColor == eyeInput){
          console.log(person.firstName + " " + person.lastName);
            return true;
        }
        else{
          return false;
        }     
  });
  return foundEyeColor;
}
function searchByHeight(array, response){
  let heightInput = promptFor("Enter height in inches (ex. 5ft. 8in. is '68'):", chars);
  let foundHeight = array.filter(function(person){
        if(person.height == heightInput){
          console.log(person.firstName + " " + person.lastName);
            return true;
        }
        else{
          return false;
        }     
  });
  return foundHeight;
}
function searchByWeight(array, response){
  let weightInput = promptFor("Enter weight:", chars);
  let foundWeight = array.filter(function(person){
        if(person.weight == weightInput){
          console.log(person.firstName + " " + person.lastName);
            return true;
        }
        else{
          return false;
        }     
  });
  return foundWeight;
}
function searchByOccupation(array, response){
  let occupationInput = promptFor("Enter occupation:", chars);
  let foundOccupation = array.filter(function(person){
        if(person.occupation == occupationInput){
          console.log(person.firstName + " " + person.lastName);
            return true;
        }
        else{
          return false;
        }     
  });
  return foundOccupation;
}

function searchByAge(array, response){
  let selection = promptFor("Enter age:", chars);
  let foundAge = array.filter(function(person){
        if(person.age == selection){
          console.log(person.firstName + " " + person.lastName);
            return true;
        }
        else{
            return false;
        }  
  });
  return foundAge;
}



function getAge(str){
  let today = new Date();
  let birthDate = new Date(str);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function dynamicAge(array){
  for(let i = 0; i < array.length; i++){
    array[i].age = getAge(array[i].dob);
  }
}
dynamicAge(data);

function multiTraitSearch(array, response){
  let ageResult = [];
  let genderResult = [];
  let weightResult = [];
  genderResult = searchByGender(data);
    if(genderResult.length == 1){
      displayInfo(genderResult[0]);
      return;
    }
    else if(genderResult.length == 0){
      genderResult = data;
    }
  let eyeColorResult = searchByEyeColor(genderResult);
    if(eyeColorResult.length == 1){
      displayInfo(eyeColorResult[0]);
      return;
    }
    else if(eyeColorResult.length == 0){
      eyeColorResult = genderResult;
    }
  let occupationResult = searchByOccupation(eyeColorResult);
    if(occupationResult.length == 1){
      displayInfo(occupationResult[0]);
      return;
    }
    else if(occupationResult.length == 0){
      occupationResult = eyeColorResult;
    }
  let heightResult = searchByHeight(occupationResult);
    if(heightResult.length == 1){
      displayInfo(heightResult[0]);
      return;
    }
    else if(heightResult.length == 0){
      heightResult = occupationResult;
    }
  weightResult = searchByWeight(heightResult);
    if(weightResult.length == 1){
      displayInfo(weightResult[0]);
      return;
    }
    else if(weightResult.length == 0){
      weightResult = heightResult;
    }
    ageResult = searchByAge(weightResult);
      if(ageResult.length == 1){
        displayInfo(ageResult[0]);
        return;
      }
      else if(ageResult.length == 0){
        displayPeople(weightResult);
        return;
      }
      else{
        for(let i = 0; i < ageResult.length; i++){
          displayPeople(ageResult);
      }
      return ageResult;
      }
  }  

function singleTraitSearch(people){
      let searchTrait = promptFor("Enter one of the following: 'gender', 'age', 'height', 'weight', 'eye color', or 'occupation'. If not enter 'return'.", traitPrompt).toLowerCase();
        switch(searchTrait){
          case 'gender':
          alert(printSingleTraitNames(searchByGender(data)));
          break;
          case 'age':
          alert(printSingleTraitNames(searchByAge(data)));
          break;
          case 'height':
          alert(printSingleTraitNames(searchByHeight(data)));
          break;
          case 'weight':
          alert(printSingleTraitNames(searchByWeight(data)));
          break;
          case 'eye color':
          alert(printSingleTraitNames(searchByEyeColor(data)));
          break;
          case 'occupation':
          alert(printSingleTraitNames(searchByOccupation(data)));
          break;
          case 'return':
            app(people);
          break;
        }
}
function displayDescendants(person){
    let personInfo = person.id;
    for(let i = 0; i < data.length; i++)
        if(person.id = person[i].parents);
    return person[i];
}

function displayId(person){
    let personInfo = [];
    personInfo.push = person.id
    return personInfo;
}
// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}
function allOne(input){
  return input.toLowerCase() == "all" || input.toLowerCase() == "one";
}
function traitPrompt(input){
  return input.toLowerCase() == "gender" || input.toLowerCase() == "age" || input.toLowerCase() == "height" || input.toLowerCase() == "weight" || input.toLowerCase() == "eye color" || input.toLowerCase() == "occupation" || input.toLowerCase() == "return";
}
// helper function to pass in as default promptFor validation
function chars(input){
  return true;
}
function feMale(input){
  return input.toLowerCase() == "female" || input.toLowerCase() == "male" || input.toLowerCase() == 'unknown';
}
function eyeColorChoice(input){
  return input.toLowerCase() == "blue" || input.toLowerCase() == 'black' || input.toLowerCase() == 'brown' || input.toLowerCase() == 'hazel' || input.toLowerCase() == 'green' || input.toLowerCase() == 'unknown';
}

function pullIdNumber(parent){
  let id = parent.id;
  return id;
}

function createParentIdArrays(array){
  let test2 = [];
  let a = array.map(a => a.parents[0]);
  let b = array.map(a => a.parents[1]);
  test2.push(a);
  test2.push(b);
  return test2;
}

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

function convertIndexToObject(array, childIndex){
  let objectArray = [];
  for(let i = 0; i < array.length && i < childIndex.length; i++){
          objectArray.push(array[childIndex[i]]);
      }
  return objectArray;
}

function printChildNames(objectArray){
  let listOfNames = [];
  for(let i = 0; i < objectArray.length; i++){
      let personInfo = "Child: " + objectArray[i].firstName + " " + objectArray[i].lastName + "\n";
      console.log(personInfo);
      listOfNames.push(personInfo);
  }
  return listOfNames;
}

function printSingleTraitNames(objectArray){
  let listOfNames = [];
  for(let i = 0; i < objectArray.length; i++){
      let personInfo = objectArray[i].firstName + " " + objectArray[i].lastName;
      listOfNames.push(personInfo);
  }
  return listOfNames;
}
function printDescendantNames(objectArray){
  let listOfNames = [];
  for(let i = 0; i < objectArray.length; i++){
      let personInfo = "Descendant: " + objectArray[i].firstName + " " + objectArray[i].lastName + "\n";
      console.log(personInfo);
      listOfNames.push(personInfo);
  }
  return listOfNames;
}

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

function verifySiblingIdMatch(array, person){
  siblingArray = [];
  personArray = [];
  for(let i = 0; i < array.length; i++){
      if(array[i].id != person.id){
          siblingArray.push(array[i]);
      }
      else{
          siblingArray.push(array[i]);
      }
  }
  return siblingArray;
}

function removePersonFromArray(array, person){
  let siblings = [];
  for(let i = 0; i < array.length; i++){
      if(array[i].id != person.id){
          siblings.push(array[i]);
      }
  }
  return siblings;
}

function printSiblingNames(objectArray){
  let listOfNames = [];
  for(let i = 0; i < objectArray.length; i++){
      let personInfo = "Sibling: " + objectArray[i].firstName + " " + objectArray[i].lastName;
      listOfNames.push(personInfo);
  }
  return listOfNames;
}

function findSiblings(array, person){
  if(person.parents.length == 0){
      console.log("No Siblings")
  }
  else{
      let separateArrays = createParentIdArrays(array);
      let parent1Match = searchForParentMatch(separateArrays, person.parents[0]);
      let parent2Match = searchForParentMatch(separateArrays, person.parents[1]);
      let intersection = parent1Match.filter(element => parent2Match.includes(element));
      let childrenObjects = convertIndexToObject(data, intersection);
      let siblingObjects = removePersonFromArray(childrenObjects, person);
      let siblingNames = printSiblingNames(siblingObjects);
      return siblingNames;
  }
}

function currentSpouseMatch(array, person){
  for(let i = 0; i < array.length; i++){
      if(array[i].id == person.currentSpouse){
          let spouse = "Spouse: " + array[i].firstName + " " + array[i].lastName;
          return spouse;
      }
  }
}

function firstParentMatch(array, person){
  for(let i = 0; i < array.length; i++){
      if(array[i].id == person.parents[0]){
          let parent1 = "Parent: " + array[i].firstName + " " + array[i].lastName;
          return parent1;
      }
  }
}

function secondParentMatch(array, person){
  for(let i = 0; i < array.length; i++){
      if(array[i].id == person.parents[1]){
          let parent2 = "Parent: " + array[i].firstName + " " + array[i].lastName;
          return parent2;
      }
  }
}

function createFamily(array, person){
  let family = [];
  family.push(findChild(array, person));
  family.push(findSiblings(array, person));
  family.push(currentSpouseMatch(array, person))
  family.push(firstParentMatch(array, person));
  family.push(secondParentMatch(array, person));
  let filtered = family.filter(function (el) {
      return el != null;
    });
  alert(filtered.join("\n"));
}

