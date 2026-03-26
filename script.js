let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

// 🔍 Loop → Match → Extract → Return
function lookUpProfile(name, property) {

  for (let i = 0; i < contacts.length; i++) {          // loop through each contact
    let contact = contacts[i];                         // current contact object

    if (contact.firstName === name) {                  // check if this is the right person

      if (contact[property] !== undefined) {           // check if property exists (dynamic key)
        return contact[property];                      // return the value immediately
      } else {
        return "No such property";                     // person found, but property missing
      }

    }

    // if no match → loop continues automatically
  }

  return "No such contact";                            // only runs if loop finishes with no match
}

// ▶️ test call
lookUpProfile("Kristian", "lastName");