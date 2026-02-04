function product() {
  var result = 1;

  for (var i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}

document.write(product(3, 4, 5) + "<br/>");
document.write(product(9, 8) + "<br/>");
document.write(product(10) + "<br/>");
document.write(product() + "<br/>");
