var project = {
  name: "Road Work",
};

console.log(project.hasOwnProperty("name"));
Object.create(Object.prototype, {
  name: {
    configurable: true,
    enumerable: true,
    value: "Road Work",
    writable: true,
  },
});
