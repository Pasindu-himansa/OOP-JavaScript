function evenOrOdd(num) {
  document.write(arguments[2] + "<br/>");
  document.write(arguments.length + "<br/>");
  document.write(evenOrOdd.length + "<br/>");
  if (num % 2 == 0) {
    return "Even";
  } else return "Odd";
}

var e = evenOrOdd;

document.write(e(10, 20, 30, 40, 50) + "<br/>");

var evenOrOdd2 = function (num) {
  if (num % 2 == 0) {
    return "Even";
  } else return "Odd";
};

document.write(evenOrOdd2(5) + "<br/>");
