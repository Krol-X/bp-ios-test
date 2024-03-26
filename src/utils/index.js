export const isString = (obj) => typeof obj === 'string' || obj instanceof String

export const list = (array, fun) => array.map(fun).join('')
