const instructorWithLongestName = function(instructors) {
  let longestName = instructors[0].name;
  let indexOfLongestName = 0;
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > longestName.length) {
      longestName = instructors[i].name;
      indexOfLongestName = i
    }
  }
  return instructors[indexOfLongestName]
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));