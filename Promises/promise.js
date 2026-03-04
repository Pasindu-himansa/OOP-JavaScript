function myAsyncFunction() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("working asyncronously");
    }, 1000);
  });
  return promise;
}
