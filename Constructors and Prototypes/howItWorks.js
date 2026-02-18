var myObj = {};

console.log(myObj.toString());

myObj.toString = function () {
  return "My toString Method";
};

delete myObj.toString;

console.log(myObj.toString());

delete myObj.toString;

console.log(myObj.toString());
