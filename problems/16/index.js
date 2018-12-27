export const problem = 16
export const statement = 'What is the sum of the digits of the number 2^1000?'

const largeNumber = 2 ** 1000
const sum = (a, b) => a + b

function answer() {
  return BigInt(largeNumber)
    .toString()
    .split('')
    .map(l => parseInt(l))
    .reduce(sum, 0)
}

export const result = 1366
