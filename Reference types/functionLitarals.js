function hello(name) {
  return "Hello" + " " + name + "<br/>";
}
var name = "Pasindu";
document.write(hello(name));

var regEx = /\d+ /;

document.write(typeof hello + "<br/>");
document.write(typeof regEx + "<br/>");
