export const problem = 10
export const statement = 'Find the sum of all the primes below two million.'

import { primes } from '../helpers'

function answer() {
  const iter = primes()
  let sum = 0
  for (let prime of iter) {
    if (prime >= 2000000) return sum
    sum += prime
  }
}

export const result = 142913828922
