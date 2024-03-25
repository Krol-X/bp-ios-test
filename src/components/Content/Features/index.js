import './style.scss'
import { newComponent } from '@utils/components.js'
import { _ } from '@utils/i18n'

export const setupFeatures = newComponent(`
  <div class="content__features">
  {{#features}}
    <div class="features__item">
      <img src="{{background}}" class="features__item-background">
      <div class="features__item-mask"></div>
      <div class="features__item-title">
        {{{title}}}
      </div>
    </div>
  {{/features}}
  </div>
`)
