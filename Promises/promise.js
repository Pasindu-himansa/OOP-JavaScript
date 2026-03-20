function myAsyncFunction() {
  let promise = new Promise((resolve, reject) => {
    let error = true;
    setTimeout(() => {
      console.log("working asyncronously");
    }, 2000);
    if (error) {
      reject("Error");
    } else {
      resolve("Done");
    }
  });
  return promise;
}

myAsyncFunction()
  .then(
    (success) => console.log(success),
    //(error) => console.log(error),
  )
  .catch((error) => console.log(error));
