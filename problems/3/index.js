export const problem = 3
export const statement =
  'What is the largest prime factor of the number 600851475143 ?'

import { primes } from '../helpers'

const n = 600851475143
const getPrimes = () => primes(2, n)

function answer() {
  let divisors = getPrimes()
  let divisor = divisors.next().value
  let largestDivisor = 1
  let x = n

  while (x > 1) {
    if (x % divisor === 0) {
      x = x / divisor
      divisors = getPrimes()
      divisor > largestDivisor ? (largestDivisor = divisor) : null
    }
    divisor = divisors.next().value
  }

  return largestDivisor
}

export const result = 6857
