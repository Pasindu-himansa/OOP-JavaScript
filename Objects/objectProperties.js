var course1 = {
  name: " JavaScript fundamentals", //[Put]
};

var course2 = new Object();
course2.name = "ReactJS"; // [Put]
course1.name = "End to end Java project"; // [Set]

course1.description = "Master Java Project Development"; // [Put]

delete course1.description;

console.log("description" in course1);
console.log("name" in course1);

console.log("toString" in course1);
console.log(course1.hasOwnProperty("toString"));
