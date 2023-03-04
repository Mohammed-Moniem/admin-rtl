const storage = window.localStorage

// Setters
export const setItem = (key, value) => {
  storage.setItem(key, value)
}

export const setObject = (key, value) => {
  storage.setItem(key, JSON.stringify(value))
}

// Getters
export const getItem = (key) => {
  return storage.getItem(key)
}

export const getObject = (key) => {
  const object = storage.getItem(key)
  if (object) {
    return JSON.parse(object)
  } else {
    return null
  }
}

export const clearStorage = () => {
  storage.clear()
}
