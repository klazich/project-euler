export const problem = 15
export const statement = 'How many such routes are there through a 20×20 grid?'

function answer() {
  const n = 20

  for (var i = 1, c = 1; i <= n; i++) c = (c * (n + i)) / i
  return c
}

export const result = answer()
