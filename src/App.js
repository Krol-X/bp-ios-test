import './App.scss'
import { newComponent } from '@utils/components.js'
import { _ } from '@utils/i18n'

import { setupHeader } from '@components/Header'
import { setupContent } from '@components/Content'
import { setupFooter } from '@components/Footer'

const setupApp = newComponent(`
  <div class='app-container'>
    <div id="header"></div>
    <div id="content"></div>
    <div id="footer"></div>
  </div>
`, () => {
  setupHeader('#header')

  setupContent('#content', {
    title: _('Get Unlimited <br>Access')
  })

  setupFooter('#footer')
})

setupApp('#app', {})
