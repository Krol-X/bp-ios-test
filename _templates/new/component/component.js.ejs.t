---
to: <%= absPath %>/<%= component_name %>/index.js
---
import './style.scss'
import { newComponent } from '@utils/components.js'
import { _ } from '@utils/i18n'

export const setup<%= Component_name %> = newComponent(`
  <div class="<%= h.changeCase.paramCase(component_name) %>">
  </div>
`)
