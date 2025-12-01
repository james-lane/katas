export const part1 = (input: string) => {
  const inputRows: string[] = input.split('\n')

  let zeroCount = 0
  let pointer = 50

  for (let rowIndex = 0; rowIndex < inputRows.length; rowIndex++) {
    let row = inputRows[rowIndex]

    if (row.startsWith('L')) {
      for (let index = 0; index < parseInt(row.substring(1)); index++) {
        pointer--

        if (pointer === 100 || pointer === -100) {
          pointer = 0
        }
      }
    }

    if (row.startsWith('R')) {
      for (let index = 0; index < parseInt(row.substring(1)); index++) {
        pointer++

        if (pointer === 100 || pointer === -100) {
          pointer = 0
        }
      }
    }

    if (pointer === 0) zeroCount++
  }

  return zeroCount
}

export const part2 = (input: string) => {
  const inputRows: string[] = input.split('\n')

  let zeroCount = 0
  let pointer = 50

  for (let rowIndex = 0; rowIndex < inputRows.length; rowIndex++) {
    let row = inputRows[rowIndex]

    if (row.startsWith('L')) {
      for (let index = 0; index < parseInt(row.substring(1)); index++) {
        pointer--

        if (pointer === 100 || pointer === -100) {
          pointer = 0
        }

        if (pointer === 0) zeroCount++
      }
    }

    if (row.startsWith('R')) {
      for (let index = 0; index < parseInt(row.substring(1)); index++) {
        pointer++

        if (pointer === 100 || pointer === -100) {
          pointer = 0
        }

        if (pointer === 0) zeroCount++
      }
    }
  }

  return zeroCount
}
