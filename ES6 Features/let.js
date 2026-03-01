function letDemo() {
  var i = 10;
  for (let i = 0; i <= 20; i++) {
    console.log(i);
  }
  for (let i = 0; i <= 20; i++) {
    var x = 10;
    console.log(i);
  }
  console.log(x);
  console.log(i);
}

letDemo();
