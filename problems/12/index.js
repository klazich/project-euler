export const problem = 12
export const statement =
  'What is the value of the first triangle number to have over five hundred divisors?'

function* triNumbers() {
  let count = 1
  let sum = 0
  while (true) {
    yield (sum += count++)
  }
}

function tau(num) {
  var n = num
  var i = 2
  var p = 1

  if (num === 1) return 1

  while (i * i <= n) {
    var c = 1
    while (n % i === 0) {
      n /= i
      c++
    }
    i++
    p *= c
  }

  if (n === num || n > 1) p *= 1 + 1

  return p
}

function answer() {
  var n = 1
  var d = 1

  while (tau(d) <= 500) {
    n++
    d += n
  }
  return d
}
export const result = answer()
