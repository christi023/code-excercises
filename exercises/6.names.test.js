const persons = [
  { name: "Olle", age: 22, hobbies: ["football", "food"] },
  { name: "Albin", age: 12, hobbies: ["football", "running"] },
  { name: "Lisa", age: 44, hobbies: ["music", "movies"] },
  { name: "Anna", age: 18, hobbies: ["dancing", "animals"] },
  { name: "Sven", age: 68, hobbies: ["music", "bridge"] },
  { name: "Pia", age: 26, hobbies: undefined },
];

function getNames(personList) {
  const personNames = personList.map((personName) => {
    return personName.name;
  });

  return personNames;
}

test("Returns a list of all names.", () => {
  const result = getNames(persons);

  expect(result).toEqual(["Olle", "Albin", "Lisa", "Anna", "Sven", "Pia"]);
});

// Hint
// Array.map
