export const problem = 17
export const statement =
  'If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?'

const words001 = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
}
const words010 = {
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety',
}

function dictionary1(n) {
  return words001[n]
}

function dictionary10(n) {
  if (n < 20) return dictionary1(n)
  const tens = (n - (n % 10)) / 10
  const rest = n % 10
  let say = words010[tens]
  return rest === 0 ? say : say + `-${dictionary1(rest)}`
}

function dictionary100(n) {
  if (n < 100) return dictionary10(n)
  const hundred = (n - (n % 100)) / 100
  const rest = n % 100
  let say = `${dictionary1(hundred)} hundred`
  return rest === 0 ? say : say + ` and ${dictionary10(rest)}`
}

function dictionary1000(n) {
  return n === 1000 ? 'one thousand' : dictionary100(n)
}

function sayNumber(n) {
  return dictionary1000(n)
}

function answer() {
  let c = 1
  let sum = 0
  while (c <= 1000) {
    let words = sayNumber(c).replace(/[ -]/g, '')
    sum += words.length
    c += 1
  }
  return sum
}

export const result = 21124
