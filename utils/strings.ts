export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const isUpperCase = (str: string) => {
  return str === str.toUpperCase()
}

export const convertSymbols = (input: string, cyr: string, lat: string) => {
  return input.split('').map(function (char) {
    if (char.toLowerCase() === cyr.toLowerCase()) {
      if (char === char.toUpperCase()) {
        return lat.toUpperCase()
      } else {
        return lat.toLowerCase()
      }
    } else {
      return char
    }
  }).join('')
}

export const hightlightSymbol = (str: string, symbol: string) => {
  return str.replace(new RegExp(symbol, 'gi'), `<span style="color: green">$&</span>`)
}

export const getSymbolFromStringOrArray = (str: string | string[], index: number) => {
  return Array.isArray(str) ? str[index] : str
}
