const persons = [
  { name: "Olle", age: 22, youth: false },
  { name: "Albin", age: 12, youth: true },
  { name: "Lisa", age: 44, youth: false },
  { name: "Anna", age: 17, youth: true },
  { name: "Sven", age: 68, youth: false },
  { name: "Pia", age: 26, youth: false },
];

function sortPersons(personList) {
  // Filter out all persons that are youths
}

test("Returns a list of all youths", () => {
  const result = listYouths(persons);

  expect(result.length).toBe(2);
});

// Hint
// Array.filter
