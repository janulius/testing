function* race() {
  var lap1 = yield 20;
  if (lap1 === 35) return 55;
}

var r = race();
var lap2 = r.next();
console.log(lap2)
// => {value: 20, done: false}
var lap3 = r.next(35);
console.log(lap3)
// => {value: 55, done: true}