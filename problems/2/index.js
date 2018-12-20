export const problem = 2
export const statement =
  'By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.'

import { makeFibonacci } from '../../helpers'

const notEven = n => n % 2 !== 0
const sum = (a, b) => a + b

const fibs = [...makeFibonacci(4000000)]

export const result = fibs.filter(notEven).reduce(sum)
