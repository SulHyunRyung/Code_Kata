function solution(absolutes, signs) {
  return absolutes.reduce((a, b, c) => a + b * (signs[c] ? 1 : -1), 0);
}
