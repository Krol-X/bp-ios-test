import templayed from 'templayed'

export function newComponent(html, after_create, handlers = {}) {
  return (selector, data = {}, is_inner) => {
    const element = document.querySelector(selector)
    if (!element) return null
    Object.keys(handlers).forEach((event) => {
      element.addEventListener(event, handlers[event])
    })
    const template = templayed(html)
    const update = (data, is_inner) => {
      if (is_inner) {
        element.innerHTML = template(data)
      } else {
        element.outerHTML = template(data)
      }
    }
    update(data, is_inner)
    if (after_create) after_create(element)
    return update
  }
}
