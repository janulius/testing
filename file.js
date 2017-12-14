function* race() {
  var lap1 = yield 20;
  assert(lap1 === 35);
  return 55;
}

var r = race();
var lap2 = r.next();
// => {value: 20, done: false}
var lap3 = r.next(35);
// => {value: 55, done: true}