
const numeralToNumber = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

const numeralRegex = /^M*(C[DM]|D?C{0,3})(X[LC]|L?X{0,3})(I[VX]|V?I{0,3})$/

const isValidNumeral = str => typeof str === 'string' && numeralRegex.test(str)

function solution(numeral) {
  if (!isValidNumeral(numeral)) return 0
  let total = 0
  for (let i = 0; i < numeral.length; i++) {
      const number = numeralToNumber[numeral[i]]
      if (i === numeral.length - 1) return total + number
      const nextNumber = numeralToNumber[numeral[i + 1]]
      if (nextNumber <= number) {
          total += number
          continue
      }
      total += nextNumber - number
      i += 1
  }
  return total
}
