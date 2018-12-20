import problems from './problems'

export default function(n) {
  return problems.filter(({ problem }) => problem === n)
}
