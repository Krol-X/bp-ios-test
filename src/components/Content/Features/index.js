import './style.scss'
import { newComponent } from '@utils/components.js'
import { _ } from '@utils/i18n'

export const setupFeatures = newComponent(`
  <div class="content__features">
  {{#features}}
    <div class="features__item">
      <div class="features__item-title">
        {{{.}}}
      </div>
    </div>
  {{/features}}
  </div>
`)
