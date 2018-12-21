export const problem = 6
export const statement =
  'Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.'

const sumNtr = n => (n * (n + 1)) / 2
const sumNtrSqr = n => (n * (n + 1) * (2 * n + 1)) / 6

function answer() {
  const n = 100
  return sumNtr(n) ** 2 - sumNtrSqr(n)
}

export const result = 25164150
