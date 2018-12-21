export const problem = 4
export const statement = 'Find the largest palindrome made from the product of two 3-digit numbers.'

function isPalindrome(n) {
  let s = `${n}`.split('')
  while (s.length > 1) {
    const x = s.shift()
    const y = s.pop()
    if(x !== y) return false
  }
  return true
}

export const result = isPalindrome(1234321)