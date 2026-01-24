var obj1 = new Object();

obj2 = obj1;

obj1.myProperty = "All the power is within you";

obj1 = null;
obj2 = null;

var products = new Array();
var date = new Date();
var err = new Error("Something went wrong");
var myFunction = new Function(`document.write('Hello')`);
var regEx = new RegExp("\\d+");

//document.write(obj2.myProperty);

myFunction();
