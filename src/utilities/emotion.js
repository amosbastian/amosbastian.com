const lightBackground = "#edf2f7"
const lightTextColour = "#2d3748"
const lightProject = "#fff"
const lightProjectHover = "#f7fafc"
const lightHeader = "#f7fafc"

const themeLight = {
  background: lightBackground,
  textColour: lightTextColour,
  project: lightProject,
  projectHover: lightProjectHover,
  header: lightHeader,
}

const darkBackground = "#1a202c"
const darkTextColour = "#cbd5e0"
const darkProject = "#2d3748"
const darkProjectHover = "#4a5568"
const darkHeader = "#0d1017"

const themeDark = {
  background: darkBackground,
  textColour: darkTextColour,
  project: darkProject,
  projectHover: darkProjectHover,
  header: darkHeader,
}

export const theme = mode => (mode === "dark" ? themeDark : themeLight)

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
