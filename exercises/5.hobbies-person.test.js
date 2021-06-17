const persons = [
  { name: "Olle", age: 22, hobbies: ["football", "food"] },
  { name: "Albin", age: 12, hobbies: ["football", "running"] },
  { name: "Lisa", age: 44, hobbies: ["music", "movies"] },
  { name: "Anna", age: -1, hobbies: ["dancing", "animals"] },
  { name: "Sven", age: 68, hobbies: ["music", "bridge"] },
  { name: "Pia", age: 26, hobbies: undefined },
];

function uniqueHobbies(personList) {
  let result = personList.reduce((acc, person) => {
    let hasHobbies = !!acc.find((a) => a.hobbies === person.hobbies);
    //hasHobbies ? (hasHobbies.hobbies = [...new Set(hasHobbies.hobbies.concat(person.hobbies))) : acc.push(person)
    if (!hasHobbies) {
      // return Array.from(new Set(acc.concat(person.hobbies)));
      return [...new Set(acc.concat(person.hobbies))];
    }

    return acc;
  }, []);

  return result;
}

//  removeDuplicateProducts(persons);

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
