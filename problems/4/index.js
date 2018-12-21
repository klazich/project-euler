export const problem = 4
export const statement =
  'Find the largest palindrome made from the product of two 3-digit numbers.'

import { numbersFrom } from '../helpers'

function isPalindrome(n) {
  let s = `${n}`.split('')
  while (s.length > 1) {
    const x = s.shift()
    const y = s.pop()
    if (x !== y) return false
  }
  return true
}

function* palindromesFrom(start, end = 0) {
  const count = numbersFrom(start, end)
  for (let n of count) {
    if (isPalindrome(n)) yield n
  }
}

function answer() {
  const max = 999 * 999
  const min = 100 * 100
  const pals = palindromesFrom(max, min)

  for (let pal of pals) {
    const top = Math.floor(Math.sqrt(pal))
    const count = numbersFrom(top, 100)
    for (let x of count) {
      const div = pal / x
      const mod = pal % x
      if (mod === 0 && div > 99 && div < 1000) return pal
    }
  }
}

export const result = 906609
