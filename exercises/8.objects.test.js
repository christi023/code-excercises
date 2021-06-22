const originalPerson = { name: "Olle", age: 22, hobbies: ["football", "food"] };

function extendObject(person) {
  // Clone the object and add
  // music as a hobby
  // eyeColor = blue
  // without changing the original object
  let hobbies = [...person.hobbies, "music"];
  let eyeColor = "blue";

  const newPerson = { ...person, eyeColor, hobbies };

  return newPerson;
}

test("Clone and extend object", () => {
  const clonedPerson = extendObject(originalPerson);

  expect(clonedPerson).toEqual({
    name: "Olle",
    age: 22,
    hobbies: ["football", "food", "music"],
    eyeColor: "blue",
  });

  expect(originalPerson).toEqual({
    name: "Olle",
    age: 22,
    hobbies: ["football", "food"],
  });
});

// Hint
// Object spread
