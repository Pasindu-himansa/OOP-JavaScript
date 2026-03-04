function add({ num1 = 10, num2, num3 }) {
  console.log(num1 + num2 + num3); // 60
}

add({ num2: 20, num3: 30 });
