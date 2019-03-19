const sieve = n => {
  const xs = [...Array(n + 1).keys()]
  xs[0] = xs[1] = 0
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (!xs[i]) continue
    for (let j = i ** 2; j <= n; j += i) xs[j] = 0
  }
  return xs.filter(Boolean)
}
