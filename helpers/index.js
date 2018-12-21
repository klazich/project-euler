const isEven = n => n % 2 === 0
const isOdd = n => n % 2 !== 0

function* numbers(start = 0, step = 1) {
  while (true) {
    yield start
    start += step
  }
}

function* take(length, iterable) {
  let count = 0
  for (let x of iterable) {
    if (count >= length) break
    yield x
    count += 1
  }
}

function* takeTo(to, iterable) {
  for (let x of iterable) {
    if (x > to) break
    yield x
  }
}

export function* numbersTo(start = 0, end = Infinity, step = 1) {
  const iter = numbers(start, step)
  for (let x of takeTo(end, iter)) yield x
}

export function* numbersFrom(start, end = 0, step = 1) {
  const iter = numbers(start, step * -1)
  for (let x of iter) {
    if (x <= end) return
    yield x
  }
}

export function* makeFibonacci(end = Infinity) {
  let pr1 = 0
  let pr2 = 1
  do {
    let cur = pr1
    pr1 = pr2
    pr2 = cur + pr1
    yield cur
  } while (pr2 < end)
}

export function* filterNonDivisible(div, iterable) {
  for (let n of iterable) {
    if (n === div) yield n
    else if (n % div !== 0) yield n
  }
}

export function* primes(start = 2, end = Infinity) {
  let iter = numbersTo(start, end)
  let count = start
  while (count < end) {
    count = iter.next().value
    if (!count) return
    yield count
    if (count === 1) continue
    iter = filterNonDivisible(count, iter)
  }
}
