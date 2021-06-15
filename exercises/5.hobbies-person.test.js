const persons = [
  { name: "Olle", age: 22, hobbies: ["football", "food"] },
  { name: "Albin", age: 12, hobbies: ["football", "running"] },
  { name: "Lisa", age: 44, hobbies: ["music", "movies"] },
  { name: "Anna", age: -1, hobbies: ["dancing", "animals"] },
  { name: "Sven", age: 68, hobbies: ["music", "bridge"] },
  { name: "Pia", age: 26, hobbies: undefined },
];

function uniqueHobbies(personList) {
  // Return a list of unique hobbies for all persons
  const allHobbies = personList.reduce(
    (acc, currentValue) => acc.concat(currentValue.hobbies),
    []
  );
  console.log(allHobbies);
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
