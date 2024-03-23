import './style.scss'
import { newComponent } from '@utils/components.js'
import { _ } from '@utils/i18n'

import { setupFeatures } from './Features'
import { setupPlanSelector } from './PlanSelector'

export const setupContent = newComponent(
  `
  <div class="content">
    <div class='content__title'>
      {{{title}}}
    </div>
    <div class='content__features'>
    </div>
    <div class='content__plan-selector'>
    </div>
  </div>
`,
  () => {
    setupFeatures('.content__features', {
      features: [
        _('Unlimited Art <br>Creation'),
        _('Exclusive <br>Styles'),
        _('Magic Avatars <br>With 20% Off')
      ]
    })
    setupPlanSelector('.content__plan-selector', {
      plans: [
        {
          title: _('YEARLY ACCESS'),
          has_year_price: 'show',
          year_price: '$39.99',
          price: '$0.48',
          is_best: 'is-best',
          selected: 'item--selected'
        },
        {
          title: _('WEEKLY ACCESS'),
          price: '$6.99'
        }
      ]
    })
  }
)
