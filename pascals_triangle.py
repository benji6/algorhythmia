def pascals_triangle():
  row = []
  while True:
    l = len(row)
    row = [1 if i == 0 or i == l else row[i - 1] + row[i] for i in range(l + 1)]
    yield row
