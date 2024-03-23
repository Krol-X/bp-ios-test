import './style.scss'
import { newComponent } from '@utils/components.js'
import { _ } from '@utils/i18n'

export const setupFooter = newComponent(`
  <div class="footer">
    <a href='#' class='footer_item'>
      ${_('Terms of Use')}
    </a>
    <a href='#' class='footer_item'>
      ${_('Privacy Policy')}
    </a>
    <a href='#' class='footer_item'>
      ${_('Restore')}
    </a>
  </div>
`)
