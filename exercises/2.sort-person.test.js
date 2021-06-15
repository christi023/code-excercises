const persons = [
  { name: "Olle", age: 22, youth: false },
  { name: "Albin", age: 12, youth: true },
  { name: "Lisa", age: 44, youth: false },
  { name: "Anna", age: 17, youth: true },
  { name: "Sven", age: 68, youth: false },
  { name: "Pia", age: 26, youth: false },
];

function sortPersonsOnAge(personList) {
  // Sort persons
  const result2 = personList.sort((a, b) => a.age - b.age); // sorting the array containing the reduced age in ascending order
  return result2;
}

sortPersonsOnAge(persons);

test("Returns a sorted list of persons", () => {
  const result = sortPersonsOnAge(persons);

  expect(result).toEqual([
    { name: "Albin", age: 12, youth: true },
    { name: "Anna", age: 17, youth: true },
    { name: "Olle", age: 22, youth: false },
    { name: "Pia", age: 26, youth: false },
    { name: "Lisa", age: 44, youth: false },
    { name: "Sven", age: 68, youth: false },
  ]);
});

// Hint
// Array.sort
