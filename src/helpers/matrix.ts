export const createMatrix = (input: string) => {
  return input.split('\n').map((row) => row.split(''))
}

export const getHorizontals = (input: any[][]) => {
  return input.map((row) => row)
}

export const getReversedHorizontals = (input: any[][]) => {
  return input.map((row) => row.toReversed())
}

export const getVerticals = (input: any[][]) => {
  const verticals: any[] = []

  let matrixWidth = 0
  input.forEach((row) => {
    if (row.length > matrixWidth) {
      matrixWidth = row.length
    }
  })

  for (let i = 0; i < matrixWidth; i++) {
    const vertical: any[] = []

    input.forEach((row) => {
      if (row[i]) {
        vertical.push(row[i])
      }
    })

    verticals.push(vertical)
  }

  return verticals
}

export const getReversedVerticals = (input: any[][]) => {
  const verticals: any[] = []
  let matrixWidth = 0

  input.forEach((row) => {
    if (row.length > matrixWidth) {
      matrixWidth = row.length
    }
  })

  for (let i = 0; i < matrixWidth; i++) {
    const vertical: any[] = []

    input.forEach((row) => {
      if (row[i]) {
        vertical.push(row[i])
      }
    })

    verticals.push(vertical.toReversed())
  }

  return verticals
}

export const getDiagonalsToBottomLeft = (input: any[][]) => {
  const diagonals: any[] = []
  let maxRow = 0

  do {
    const diagonal: any[] = []
    input.forEach((row, i) => {
      if (i <= maxRow) {
        const elementToPush = row.shift()
        elementToPush && diagonal.push(elementToPush)
      }

      if (i === input.length - 1) {
        maxRow++
      }
    })

    diagonals.push(diagonal)
  } while (input.some((row) => row.length > 0))

  return diagonals
}

export const getDiagonalsToBottomRight = (input: any[][]) => {
  const diagonals: any[] = []
  let maxRow = 0

  do {
    const diagonal: any[] = []
    input.forEach((row, i) => {
      if (i <= maxRow) {
        const elementToPush = row.pop()
        elementToPush && diagonal.push(elementToPush)
      }

      if (i === input.length - 1) {
        maxRow++
      }
    })

    diagonals.push(diagonal)
  } while (input.some((row) => row.length > 0))

  return diagonals
}

export const getDiagonalsToTopLeft = (input: any[][]) => {
  const diagonals: any[] = []
  let maxRow = 0

  do {
    const diagonal: any[] = []
    input.toReversed().forEach((row, i) => {
      if (i <= maxRow) {
        const elementToPush = row.shift()
        elementToPush && diagonal.push(elementToPush)
      }

      if (i === input.length - 1) {
        maxRow++
      }
    })

    diagonals.push(diagonal)
  } while (input.some((row) => row.length > 0))

  return diagonals
}

export const getDiagonalsToTopRight = (input: any[][]) => {
  const diagonals: any[] = []
  let maxRow = 0

  do {
    const diagonal: any[] = []
    input.toReversed().forEach((row, i) => {
      if (i <= maxRow) {
        const elementToPush = row.pop()
        elementToPush && diagonal.push(elementToPush)
      }

      if (i === input.length - 1) {
        maxRow++
      }
    })

    diagonals.push(diagonal)
  } while (input.some((row) => row.length > 0))

  return diagonals
}

export const getAdjacents = (input: any[][]) => {
  const list = convertMatrixToCoords(input)
  const adjacents: { element: any; adjacent: any[] }[] = []

  list.forEach((item) => {
    const adjacent = []

    const r = getElemByCoords(list, [item.coords[0], item.coords[1] + 1])
    if (r) adjacent.push(r)
    const br = getElemByCoords(list, [item.coords[0] + 1, item.coords[1] + 1])
    if (br) adjacent.push(br)
    const b = getElemByCoords(list, [item.coords[0] + 1, item.coords[1]])
    if (b) adjacent.push(b)
    const bl = getElemByCoords(list, [item.coords[0] + 1, item.coords[1] - 1])
    if (bl) adjacent.push(bl)
    const l = getElemByCoords(list, [item.coords[0], item.coords[1] - 1])
    if (l) adjacent.push(l)
    const tl = getElemByCoords(list, [item.coords[0] - 1, item.coords[1] - 1])
    if (tl) adjacent.push(tl)
    const t = getElemByCoords(list, [item.coords[0] - 1, item.coords[1]])
    if (t) adjacent.push(t)
    const tr = getElemByCoords(list, [item.coords[0] - 1, item.coords[1] + 1])
    if (tr) adjacent.push(tr)

    adjacents.push({ element: item.element, adjacent })
  })

  return adjacents
}

export const convertMatrixToCoords = (input: any[][]) => {
  const elementsWithCoords: { element: any; coords: number[] }[] = []

  for (let i = 0; i < input.length; i++) {
    const row = input[i]

    for (let j = 0; j < row.length; j++) {
      elementsWithCoords.push({ element: row[j], coords: [i, j] })
    }
  }

  return elementsWithCoords
}

export const getElemByCoords = (input: { element: any; coords: number[] }[], coords: number[]) => {
  return input.find((e) => e.coords.toString() === coords.toString())?.element
}
