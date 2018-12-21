import problems from './problems'

function answerProblem(n) {
  return problems.filter(({ problem }) => problem === n)
}

export default answerProblem
