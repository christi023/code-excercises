const persons = [
  { name: "Olle", age: 22, youth: false },
  { name: "Albin", age: 12, youth: true },
  { name: "Lisa", age: 44, youth: false },
  { name: "Anna", age: -1, youth: true },
  { name: "Sven", age: 68, youth: false },
  { name: "Pia", age: 26, youth: false },
];

function combinedAge(personList) {
  // Return the combines age of all person,
  // -1 Means the person didn't want to give age, so ignore that person
}

test("Returns the total sum of ages of all persons.", () => {
  const result = combinedAge(persons);

  expect(result).toBe(172);
});
