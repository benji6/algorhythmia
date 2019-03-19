function* pascalsTriangleGenerator () {
  let prevRow = [1]
  yield prevRow
  while (true) {
    const row = [1]
    for (let i = 1; i < prevRow.length; i++) {
      row[i] = prevRow[i - 1] + prevRow[i]
    }
    row.push(1)
    yield prevRow = row
  }
}
