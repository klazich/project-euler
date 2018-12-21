export const problem = 5
export const statement =
  'What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?'

import { numbersTo } from '../helpers'

const divisors = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11]

function answer() {
  const count = numbersTo(20)

  let flag = false

  for (let n of count) {
    flag = true
    for (let div of divisors) {
      if (n % div !== 0) {
        flag = false
        break
      }
      if (flag) return n
    }
    if (n > 10000) return 0
  }
}

export const result = answer()
