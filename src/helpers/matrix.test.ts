import {
  createMatrix,
  getHorizontals,
  getReversedHorizontals,
  getVerticals,
  getReversedVerticals,
  getDiagonalsToBottomLeft,
  getDiagonalsToBottomRight,
  getDiagonalsToTopRight,
  getDiagonalsToTopLeft,
  getAdjacents,
  getElemByCoords,
} from './matrix'

const strMatrix = `ABC
DEF
GHI`

const matrix = [
  ['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I'],
]

describe('createMatrix', () => {
  it('should create a matrix from multiline string', () => {
    expect(createMatrix(strMatrix)).toEqual([
      ['A', 'B', 'C'],
      ['D', 'E', 'F'],
      ['G', 'H', 'I'],
    ])
  })
})

describe('getHorizontals', () => {
  it('should return horizontal values', () => {
    expect(getHorizontals(matrix)).toEqual([
      ['A', 'B', 'C'],
      ['D', 'E', 'F'],
      ['G', 'H', 'I'],
    ])
  })
})

describe('getReversedHorizontals', () => {
  it('should return reversed horizontal values', () => {
    expect(getReversedHorizontals(matrix)).toEqual([
      ['C', 'B', 'A'],
      ['F', 'E', 'D'],
      ['I', 'H', 'G'],
    ])
  })
})

describe('getVerticals', () => {
  it('should return vertical values', () => {
    expect(getVerticals(matrix)).toEqual([
      ['A', 'D', 'G'],
      ['B', 'E', 'H'],
      ['C', 'F', 'I'],
    ])
  })
})

describe('getReversedVerticals', () => {
  it('should return reversed vertical values', () => {
    expect(getReversedVerticals(matrix)).toEqual([
      ['G', 'D', 'A'],
      ['H', 'E', 'B'],
      ['I', 'F', 'C'],
    ])
  })
})

describe('getDiagonals', () => {
  it('should return diagonal values', () => {
    expect(getDiagonalsToTopLeft(matrix.map((arr) => arr.slice()))).toEqual([
      ['G'],
      ['H', 'D'],
      ['I', 'E', 'A'],
      ['F', 'B'],
      ['C'],
    ])
    expect(getDiagonalsToBottomLeft(matrix.map((arr) => arr.slice()))).toEqual([
      ['A'],
      ['B', 'D'],
      ['C', 'E', 'G'],
      ['F', 'H'],
      ['I'],
    ])
    expect(getDiagonalsToTopRight(matrix.map((arr) => arr.slice()))).toEqual([
      ['I'],
      ['H', 'F'],
      ['G', 'E', 'C'],
      ['D', 'B'],
      ['A'],
    ])
    expect(getDiagonalsToBottomRight(matrix.map((arr) => arr.slice()))).toEqual([
      ['C'],
      ['B', 'F'],
      ['A', 'E', 'I'],
      ['D', 'H'],
      ['G'],
    ])
  })
})

describe.only('getAdjacent functions', () => {
  it.only('getAdjacents should return adjacent values for each item', () => {
    expect(getAdjacents(matrix)).toEqual([
      { element: 'A', adjacent: ['B', 'E', 'D'] },
      { element: 'B', adjacent: ['C', 'F', 'E', 'D', 'A'] },
      { element: 'C', adjacent: ['F', 'E', 'B'] },
      { element: 'D', adjacent: ['E', 'H', 'G', 'A', 'B'] },
      { element: 'E', adjacent: ['F', 'I', 'H', 'G', 'D', 'A', 'B', 'C'] },
      { element: 'F', adjacent: ['I', 'H', 'E', 'B', 'C'] },
      { element: 'G', adjacent: ['H', 'D', 'E'] },
      { element: 'H', adjacent: ['I', 'G', 'D', 'E', 'F'] },
      { element: 'I', adjacent: ['H', 'E', 'F'] },
    ])
  })

  it('getElemByCoords should return adjacent values for each item', () => {
    expect(getElemByCoords(matrix, [0, 0])).toEqual('A')
    expect(getElemByCoords(matrix, [0, 1])).toEqual('B')
    expect(getElemByCoords(matrix, [2, 0])).toEqual('G')
  })
})
