{
  //카카오 크레인 인형뽑기 게임 문제이며, 문제는 프로그래머스에 자세히 나와있다

  const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ]
  const moves = [1, 5, 3, 5, 1, 2, 1, 4]
  const returnResult = 4

  function solution(board, moves) {
    let result = []
    let counter = 0

    for (let i = 0; i < moves.length; i++) { //기계가 뽑을 순서와 일치하도록 moves 부터 루프를 시작
      for (let j = 0; j < board.length; j++) {
        const target = board[j][moves[i] - 1] //기계가 뽑는 곳
        if (target !== 0) { //인형이 그 자리에 있는경우
          if (!result.length) { //일단 비어있으면 
            result.push(target) //하나 넣어주고
          } else { //이미 있는경우 
            if (result[result.length - 1] === target) {//마지막으로 넣은 인형이 이제 막 뽑은 인형이랑 같은 경우
                result.pop() //마지막으로 넣은 인형을 제거
              counter = counter + 2 //기존에 넣은 인형과 넣을 인형의 수,
            } else {//같지 않은 경우
              result.push(target)
            }
          }
          board[j][moves[i] - 1] = 0 //뽑았던 자리는 0으로 대체
          break //뽑았으니 moves를 변경하기 위해 루프탈출
        }
      }
    }
    return counter
  }
  const result = solution(board, moves)

  console.log(result)
}
