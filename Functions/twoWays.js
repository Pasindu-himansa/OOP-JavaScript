document.write(evenOrOdd(10) + "<br/>");

function evenOrOdd(num) {
  if (num % 2 == 0) {
    return "Even";
  } else return "Odd";
}

evenOrOdd = new Function();

var e = evenOrOdd;

var evenOrOdd2 = function (num) {
  if (num % 2 == 0) {
    return "Even";
  } else return "Odd";
};

document.write(evenOrOdd2(5) + "<br/>");
