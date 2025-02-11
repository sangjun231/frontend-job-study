function solution(names) {
  // 결과를 저장할 빈 배열 생성
  let answer = [];
  // 배열을 5칸씩 건너뛰면서 순회
  for (let i = 0; i < names.length; i += 5) {
    // 각 그룹의 첫 번째 이름만 배열에 추가
    answer.push(names[i]);
  }
  return answer;
}
