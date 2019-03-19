def sieve (n):
  xs = list(range(0, n + 1))
  xs[0] = xs[1] = 0
  for x in xs:
    if x:
      yield x
      for j in range(x ** 2, n + 1, x):
        xs[j] = 0
