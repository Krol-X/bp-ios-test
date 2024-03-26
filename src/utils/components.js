import templayed from 'templayed'

import { isString } from './index.js'

export function newComponent(html, tag, classes, after_hook) {
  return (selector_comp, data = {}, insert_policy) => {
    let container = selector_comp
    if (isString(selector_comp)) {
      container = document.querySelector(selector_comp)
    }
    if (!container) return null
    
    const element = document.createElement('div')
    element.classList = classes
    container.appendChild(element)

    const template = templayed(html)

    const update = (data, insert_policy) => {
      if (insert_policy === 'append') {
        element.innerHTML += template(data)
      } else {
        element.innerHTML = template(data)
      }
    }
    update(data, insert_policy)

    if (after_hook) {
      after_hook(element, data, update)
    }

    const component_api = {}

    component_api.next = (fun) => {
      fun(element, data, update)
      return component_api
    }

    component_api.on = (event, fun) => {
      element.addEventListener(event, fun)
      return component_api
    }

    return component_api
  }
}
