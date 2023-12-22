function solution(age) {
  let now = new Date();
  let nowYear = now.getFullYear();
  var answer = nowYear - age;
  return answer;
}
