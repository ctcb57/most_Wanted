"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      let foundPerson = searchByName(people);
      mainMenu(foundPerson, people);
      break;
    case 'no':
    //use yesNo function to search for traits in yes no tree
      // TODO: search by traits
      // alerts for each person returned for each criteria
      // call this function Guess Who, start with criteria with largest search result, i.e. age, eye color, in descending amounts
      break;
      default:
    app(people); // restart app //create an alert saying no match found
      break;
  }
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */
//dynamically add spouse name
  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");
  // Create a function to gather info for each case with an alert
  switch(displayOption){
    case "info":
        console.log(displayInfo(person));
        alert(displayInfo(person));// TODO: get person's info
    break;
    case "family":
        console.log(displayId(person));
        // console.log(displayFamily(person));
        // alert(displayFamily(person)); //descendants + spouse
    // TODO: get person's family
    break;
    case "descendants": //need recursion here
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
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

  // let capFirstName = upperCaseFirstLetter(firstName);
  // let capLastName = upperCaseFirstLetter(lastName);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  });

  // let morePeople = people;
 	// morePeople = searchbyGender
 	// 	morePeople = searchbyAge(morePeople);
  // Dynamically add age
  // Dynamically add alternate names and nicknames, such as Bob for Robert, or The Grey Man, or Flamingo
  // create a function that searches the array and finds a match
  // TODO: find the person using the name they entered
  return foundPerson[0];
}

// searchByName(data);

// function findCriter(people){
  
// }
//two possible methods:
//method one: attempt recursion to the point where it calls to a specified location within the object
//method two: use switch case in conjunction with a prompt


// console.log(data.prototype);

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}


// When looking for descendants or family(link it to the main menu)
function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display(basically going to show the object)
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
    return(personInfo);
}
function displayFamily(person){
    let personInfo = "First Name: " + person.firstName + "\n";
    personInfo += "Last Name: " + person.lastName + "\n";
    personInfo += "currentSpouse: " + person.currentSpouse + "\n";
    return personInfo;
}
// function displayDescendants(person){
//     let personInfo = person.id;
//     for(let i = 0; i < data.length; i++)
//         if(person.id = person[i].parents);
//     return person[i];
// }

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
// promptFor function ensures they answer the question with our provided options, in this case 'yes' or 'no'
// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
