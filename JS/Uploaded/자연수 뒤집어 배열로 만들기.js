function solution(n) {
  return (n = n
    .toString()
    .split("")
    .reverse()
    .map((ele) => parseInt(ele)));
}
