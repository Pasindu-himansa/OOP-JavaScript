function Doctor(name) {
  this.name = name;
}

Doctor.prototype.toString = function () {
  return "[Doctor " + this.name + "]";
};

function Surgeon(name, type) {
  this.name = name;
  this.type = type;
}

Surgeon.prototype = new Doctor();
Surgeon.prototype.constructor = Surgeon;

Surgeon.prototype.toString = function () {
  return "[Surgeon " + this.name + "type" + this.type + "]";
};
