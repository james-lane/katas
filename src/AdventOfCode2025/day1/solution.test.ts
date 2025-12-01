import { part1 } from './solution'

const exampleInput = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`

const puzzleInput = ``

describe('part1', () => {
  it('should pass example test', () => {
    const res = part1(exampleInput)

    expect(res).toEqual(3)
  })

  // it('should return expected result for puzzle input', () => {
  //   const res = part1(puzzleInput)

  //   expect(res).toEqual(3569916)
  // })
})

// describe('part2', () => {
//   it('should pass example test', () => {
//     const res = part2(exampleInput)

//     expect(res).toEqual(31)
//   })

//   it('should return expected result for puzzle input', () => {
//     const res = part2(puzzleInput)

//     expect(res).toEqual(26407426)
//   })
// })
