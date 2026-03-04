function myAsyncFunction() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("working asyncronously");
    }, 2000);
  });
  return promise;
}

myAsyncFunction().then(() => console.log("Work done"));
