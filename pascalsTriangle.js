const pascalsTriangle = n => {
  const triangle = []
  if (n < 1) return triangle
  triangle.push([1])
  for (let i = 1; i < n; i++) {
    const row = []
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1)
      } else {
        const prevRow = triangle[i - 1]
        row.push(prevRow[j - 1] + prevRow[j])
      }
    }
    triangle.push(row)
  }
  return triangle
}
