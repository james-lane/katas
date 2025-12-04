import { convertMatrixToCoords, createMatrix, getAdjacents } from '../../helpers/matrix'

export const part1 = (input: string) => {
  const instructions = createMatrix(input)
  let count = 0

  const adjacents = getAdjacents(instructions)

  adjacents.forEach(({ element, adjacent }) => {
    if (element === '@' && adjacent.filter((e) => e === '@').length < 4) count++
  })

  console.log('🚀 ~ part1 ~ count:', count)
  return count
}

export const part2 = (input: string) => {}
