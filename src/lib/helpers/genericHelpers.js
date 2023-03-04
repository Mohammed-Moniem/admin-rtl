//Filteration and Sorting
export const filterThrougAllObjectKeys = (arr, key, value) => {
  return arr.filter((item) => item[key] === value)
}

export const sortAccordingToSepcificKey = (array, key, order) => {
  return array.sort((a, b) => {
    if (order === 'asc') {
      return a[key] > b[key] ? 1 : -1
    } else {
      return a[key] < b[key] ? 1 : -1
    }
  })
}

export const valueMapper = (dtoArray, keysToAdd) => {
  dtoArray.forEach((dto) => {
    keysToAdd.forEach((key) => {
      dto[key[0]] = dto[key[1]]
    })
    return dto
  })
  return dtoArray
}

// map nested json to camelCase keys
export const toCamelCase = (obj) => {
  if (obj instanceof Array) {
    return obj.map((val) => toCamelCase(val))
  } else if (obj instanceof Object) {
    return Object.keys(obj).reduce((result, key) => {
      const val = obj[key]
      const newVal = val instanceof Object ? toCamelCase(val) : val
      return {
        ...result,
        [key.charAt(0).toLowerCase() + key.slice(1)]: newVal,
      }
    }, {})
  }
  return obj
}

// map nested json to PascalCase keys
export const toPascalCase = (obj) => {
  if (obj instanceof Array) {
    return obj.map((val) => toPascalCase(val))
  } else if (obj instanceof Object) {
    return Object.keys(obj).reduce((result, key) => {
      const val = obj[key]
      const newVal = val instanceof Object ? toPascalCase(val) : val
      return {
        ...result,
        [key.charAt(0).toUpperCase() + key.slice(1)]: newVal,
      }
    }, {})
  }
  return obj
}
