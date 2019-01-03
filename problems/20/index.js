export const problem = 20
export const statement = 'Find the sum of the digits in the number 100!'

function factorialRec(n) {
  return n === 0 ? 1 : n * factorial(n - 1)
}

function factorial(n) {
  let acc = BigInt(1)
  let i = BigInt(n)
  while (i > 0) {
    acc = acc * i--
  }
  return acc
}

function answer() {
  let factors = factorial(100)
  let digits = `${factors}`
    .replace('n', '')
    .split('')
    .map(e => parseInt(e))
  return digits.reduce((p, c) => p + c)
}

export const result = 648
