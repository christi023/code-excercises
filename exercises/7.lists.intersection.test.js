const persons1 = ["knut", "olle", "kalle", "nisse", "ebba", "olivia", "bo"];

const persons2 = [
  "sven",
  "kalle",
  "orvar",
  "johanna",
  "olivia",
  "knut",
  "elba",
];

// Filter method creates a new array
function getSharedNames(list1, list2) {
  // filter first list
  const lists = list1.filter((list) => {
    // compare both list and return a new array list that includes same value
    return list2.includes(list);
  });

  return lists;
}

test("Returns a list of shared names", () => {
  const result = getSharedNames(persons1, persons2);

  expect(result).toEqual(["knut", "kalle", "olivia"]);
});

// Hint
// Array.filter
