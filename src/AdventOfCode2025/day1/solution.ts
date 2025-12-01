export const part1 = (input: string) => {
  const inputRows: string[] = input.split('\n')

  let zeroCount = 0
  let pointer = 50
  const min = 0
  const max = 100

  for (let rowIndex = 0; rowIndex < inputRows.length; rowIndex++) {
    let row = inputRows[rowIndex]
    console.log({ pointer, zeroCount }, row)

    if (row.startsWith('L')) {
      for (let index = 0; index < parseInt(row.substring(1)); index++) {
        pointer--
        if (pointer === max || pointer === max) pointer = max
        console.log('pointer after minus', pointer)
      }
    }

    if (row.startsWith('R')) {
      for (let index = 0; index < parseInt(row.substring(1)); index++) {
        pointer++
        if (pointer === max || pointer === max) pointer = min
        console.log('pointer after plus', pointer)
      }
    }

    if (pointer === min) zeroCount++
    console.log({ pointer, zeroCount })
  }

  return zeroCount
}

// export const part2 = (input: string) => {
//   const inputRows: string[] = input.split('\n')
// }
