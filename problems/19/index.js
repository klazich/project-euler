export const problem = 19
export const statement =
  'How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?'

// - 1 Jan 1900 was a Monday.
// - Thirty days has September, April, June and November.
//   All the rest have thirty-one,
//   Saving February alone,
//   Which has twenty-eight, rain or shine.
//   And on leap years, twenty-nine.
// - A leap year occurs on any year evenly divisible by 4, but not on a century
//   unless it is divisible by 400.

const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

function* time(start = [1, 1, 1901], weekday = 2) {
  let [day, month, year] = start

  while (true) {
    if (month === 2 && day >= 28) {
      if (
        year % 4 === 0 &&
        (!(year % 100 === 0) || year % 400 === 0) &&
        day === 28
      ) {
        day += 1
      } else {
        month += 1
        day = 1
      }
    } else if (
      (month === 4 || month === 6 || month === 10 || month === 11) &&
      day === 30
    ) {
      month += 1
      day = 1
    } else if (day === 31) {
      day = 1
      if (month === 12) {
        month = 1
        year += 1
      } else {
        month += 1
      }
    } else {
      day += 1
    }

    if (weekday === 7) weekday = 1
    else weekday += 1

    yield [day, month, year, weekday]
  }
}

function answer() {
  let iter = time([1, 1, 1901])
  let [day, month, year, weekday] = [1, 1, 1901, 2]
  let sum = 0

  while (year <= 2000) {
    ;[day, month, year, weekday] = iter.next().value
    if (day === 1 && weekday === 1) {
      console.log(day, month, year, weekday)
      sum += 1
    }
  }

  return sum
}

export const result = answer()
