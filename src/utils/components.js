import templayed from 'templayed'

export function newComponent(html, update_hook) {
  return (selector, data = {}, is_inner) => {
    const element = document.querySelector(selector)
    if (!element) return null

    const template = templayed(html)

    const update = (data, is_inner) => {
      if (is_inner) {
        element.innerHTML = template(data)
      } else {
        element.outerHTML = template(data)
      }
      if (update_hook) {
        update_hook(element, update)
      }
    }
    update(data, is_inner)

    const component_api = {}

    component_api.next = (fun) => {
      fun(element, update)
      return component_api
    }

    component_api.on = (event, fun) => {
      element.addEventListener(event, fun)
      return component_api
    }

    return component_api
  }
}
