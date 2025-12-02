export const part1 = (input: string) => {
  const ranges: string[] = input.split(',')

  const invalidIds: number[] = []

  ranges.forEach((range) => {
    const firstInRange = parseInt(range.split('-')[0])
    const lastInRange = parseInt(range.split('-')[1])

    for (let currentNumber = firstInRange; currentNumber <= lastInRange; currentNumber++) {
      const numberAsString = currentNumber.toString()
      const numberLength = numberAsString.length

      const firstHalf = numberAsString.substring(0, numberLength / 2)
      const lastHalf = numberAsString.substring(numberLength / 2)

      if (firstHalf === lastHalf) {
        invalidIds.push(currentNumber)
      }
    }
  })

  return invalidIds.reduce((a, b) => a + b)
}

export const part2 = (input: string) => {
  const ranges: string[] = input.split(',')

  const invalidIds: number[] = []

  ranges.forEach((range) => {
    const firstInRange = parseInt(range.split('-')[0])
    const lastInRange = parseInt(range.split('-')[1])

    for (let currentNumber = firstInRange; currentNumber <= lastInRange; currentNumber++) {
      const numberAsString = currentNumber.toString()
      const numberLength = numberAsString.length

      const eachChar = numberAsString

      const firstHalf = numberAsString.substring(0, numberLength / 2)
      const lastHalf = numberAsString.substring(numberLength / 2)

      if (firstHalf === lastHalf) {
        invalidIds.push(currentNumber)
      }
    }
  })

  return invalidIds.reduce((a, b) => a + b)
}
