const persons = [
  { name: "Olle", age: 22, youth: false },
  { name: "Albin", age: 12, youth: true },
  { name: "Lisa", age: 44, youth: false },
  { name: "Anna", age: 17, youth: true },
  { name: "Sven", age: 68, youth: false },
  { name: "Pia", age: 26, youth: false },
];

function listYouths(personList) {
  // Filter out all persons that are youths
  const result1 = personList.filter((obj) => obj.youth === true);
  return result1;
}

listYouths(persons); // call the function with the array

test("Returns a list of all youths", () => {
  const result = listYouths(persons);

  expect(result.length).toBe(2);
});

// Hint
// Array.filter
