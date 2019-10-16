const bp = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
}

const mq = n => {
  const bpArray = Object.keys(bp).map(key => [key, bp[key]])

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (min-width: ${size}px)`]
    return acc
  }, [])

  return result
}

export default mq
