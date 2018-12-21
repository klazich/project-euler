export const problem = 1
export const statement = `Find the sum of all the multiples of 3 or 5 below 1000.`

import { numbersTo } from '../helpers'

const isThreeMultiple = n => n % 3 === 0
const isFiveMultiple = n => n % 5 === 0
const isThreeOrFiveMultiple = n => isThreeMultiple(n) || isFiveMultiple(n)
const sum = (a, b) => a + b

function answer() {
  const oneToGrand = [...numbersTo(0, 1000, 1)]
  return oneToGrand.filter(isThreeOrFiveMultiple).reduce(sum)
}

export const result = 234168
