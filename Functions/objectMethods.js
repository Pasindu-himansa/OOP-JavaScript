function displayDetails(testscore, testscore2) {
  document.write(this.id + "<br/>");
  document.write(this.name + "<br/>");
  document.write(testscore + "<br/>");
  document.write(testscore2 + "<br/>");
}

var student1 = {
  id: 1,
  name: "Bob",
};

var student2 = {
  id: 2,
  name: "John",
};

this.id = 3;
this.name = "Mary";

var displayForStudent1 = displayDetails.bind(student1, 10);
displayForStudent1();

var displayForStudent2 = displayDetails.bind(student2, 20);
displayForStudent2();

displayForStudent2.displayDetails = displayForStudent1;

displayForStudent2.displayDetails(40);
