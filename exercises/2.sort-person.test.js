const persons = [
  { name: "Olle", age: 22, youth: false },
  { name: "Albin", age: 12, youth: true },
  { name: "Lisa", age: 44, youth: false },
  { name: "Anna", age: 17, youth: true },
  { name: "Sven", age: 68, youth: false },
  { name: "Pia", age: 26, youth: false },
];

function sortPersons(personList) {
  // Sort persons
}

test("Returns a sorted list of persons", () => {
  const result = sortPersons(persons);

  expect(result).toEqual([
    { name: "Albin", age: 12, youth: true },
    { name: "Anna", age: 17, youth: true },
    { name: "Olle", age: 22, youth: false },
    { name: "Pia", age: 26, youth: false },
    { name: "Lisa", age: 44, youth: false },
    { name: "Sven", age: 68, youth: false },
  ]);
});
