function solution(x) {
  var answer = x
    .toString()
    .split("")
    .reduce((a, b) => a + parseInt(b), 0);
  return x % answer === 0 ? true : false;
}
