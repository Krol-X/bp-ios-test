import './style.scss'
import { newComponent } from '@utils/components.js'
import { _ } from '@utils/i18n'

export const setupHeader = newComponent(`
  <div class="header">
    <div class='header__cross'>
      <img src="images/Cross.png">
    </div>
  </div>
`)
