export const problem = 7
export const statement = 'What is the 10001st prime number?'

import { primes } from '../helpers'

function answer() {
  const iter = primes()
  let prime

  for (let i = 0; i < 10001; i += 1) {
    prime = iter.next().value
  }

  return prime
}

export const result = 104743
