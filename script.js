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

// 🔍 Loop → find matching contact → then extract requested property
function lookUpProfile(name, property) {

  for (let i = 0; i < contacts.length; i++) {           // standard for loop: start at 0, run while < length, increment i
    let contact = contacts[i];                          // grab current object using index (array[i])

    if (contact.firstName === name) {                   // check if THIS object matches the name argument

      // nested if: only runs if we found the correct contact
      if (contact[property] !== undefined) {            // bracket notation → use variable as key (dynamic access)
        return contact[property];                       // return the value stored at that key (e.g. "lastName" → "Vos")
      } else {
        return "No such property";                      // contact exists but key doesn't exist on object
      }

    }

    // if no match → loop continues to next contact automatically
  }

  return "No such contact";                             // runs ONLY if loop finishes with no match found
}

// ▶️ test call
lookUpProfile("Kristian", "lastName");