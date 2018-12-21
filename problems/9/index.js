export const problem = 9
export const statement =
  'There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.'

const isPythagorean = (a, b, c) => a ** 2 + b ** 2 === c ** 2

function answer() {
  let a = 1
  let b = a + 1
  let c

  while (a < 1000) {
    while (b < 1000 && b > a) {
      c = 1000 - a - b
      if (c < b) break
      if (isPythagorean(a, b, c)) return a * b * c
      b += 1
    }
    a += 1
    b = a + 1
  }
}

export const result = 31875000
