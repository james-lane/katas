export const part1 = (input: string) => {
  const banks: string[] = input.split('\n')
  const highestJoltages: number[] = []

  banks.forEach((bank) => {
    const bankNumberArray = bank.split('').map((e) => parseInt(e))

    let batteryOne = bankNumberArray.toSorted((a, b) => a - b).at(-1)
    if (batteryOne === bankNumberArray.at(-1)) batteryOne = bankNumberArray.toSorted((a, b) => a - b).at(-2)

    const batteryTwoSubBank = bankNumberArray.slice(bankNumberArray.findIndex((e) => e === batteryOne) + 1)
    const batteryTwo = batteryTwoSubBank.toSorted((a, b) => a - b).at(-1)

    highestJoltages.push(parseInt(`${batteryOne}${batteryTwo}`))
  })

  return highestJoltages.reduce((a, b) => a + b)
}

export const part2 = (input: string) => {
  const banks: string[] = input.split('\n')
  const highestJoltages: number[] = []

  banks.forEach((bank) => {
    const bankNumberArray = bank.split('')
    const joltage: number[] = []
    let maxLength = 12

    bankNumberArray.forEach((number, i, arr) => {
      const highestNumber = findHighestNumberWithNAfter(arr, maxLength)
      // if (parseInt(number) === highestNumber) joltage.push(parseInt(number))
      maxLength--
    })
  })

  return highestJoltages.reduce((a, b) => a + b, 0)
}

export const findHighestNumberWithNAfter = (input: string[], N: number) => {
  const arr = input.map((e) => parseInt(e))
  let highestNumber = arr[0]
  let remaining = arr.slice(1).map((e) => e.toString())

  for (let index = 0; index < arr.length; index++) {
    const currentlyRemaining = arr.slice(index + 1)
    if (arr[index + 1] > highestNumber && currentlyRemaining.length > N) {
      highestNumber = arr[index + 1]
      remaining = arr.slice(index + 1).map((e) => e.toString())
    }
  }

  return { highestNumber, remaining }
}

export const generateNumber = (input: string[], numberLength = 12) => {
  const generatedNumber: number[] = []
  let arrToCheck = input
  console.log('🚀 ~ generateNumber ~ arrToCheck:', arrToCheck)
  const { highestNumber, remaining } = findHighestNumberWithNAfter(input, numberLength)
  console.log('🚀 ~ generateNumber ~ highestNumber:', highestNumber)
  console.log('🚀 ~ generateNumber ~ remaining:', remaining)

  console.log(generatedNumber)
  return parseInt(generatedNumber.join(''))
}
