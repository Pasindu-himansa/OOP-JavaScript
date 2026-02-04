function add(num1, num2) {
  document.write(arguments.length + "<br/>");
  if (arguments.length == 3) {
    return arguments[0] + arguments[1] + arguments[2];
  } else {
    return arguments[0] + arguments[1];
  }
}
document.write(add(2, 3, 4));
