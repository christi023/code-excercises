const persons = [
  { name: "Olle", age: 22, hobbies: ["football", "food"] },
  { name: "Albin", age: 12, hobbies: ["football", "running"] },
  { name: "Lisa", age: 44, hobbies: ["music", "movies"] },
  { name: "Anna", age: -1, hobbies: ["dancing", "animals"] },
  { name: "Sven", age: 68, hobbies: ["music", "bridge"] },
  { name: "Pia", age: 26, hobbies: undefined },
];

function uniqueHobbies(personList) {
  // Return a lisst of uniqe hobbies for all persons
}

test("Returns a list of all unique hobbies.", () => {
  const result = uniqueHobbies(persons);

  expect(result).toEqual([
    "football",
    "food",
    "running",
    "music",
    "movies",
    "dancing",
    "animals",
    "bridge",
  ]);
});

// Hint
// Array.reduce
