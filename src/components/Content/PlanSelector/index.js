import './style.scss'
import { newComponent } from '@utils/components.js'
import { _ } from '@utils/i18n'

export const setupPlanSelector = newComponent(`
  <div class="plan-selector">
    <div class="plan-selector__list">
      {{#plans}}
        <div class="plan-selector__item button {{is_best}} {{selected}}">
          <div class="item__side">
            <div class="item__title">
              {{{title}}}
            </div>
            <div class="item__price--year {{has_year_price}} hidden">
              ${_('Just {{price}} per year')}
            </div>
          </div>
          <div class="item__side">
            <div class='item__price'>
              ${_('{{price}} <br>per week')}
            </div>
          </div>
          <div class="item__highlight hidden">
            ${_('BEST OFFER')}
          </div>
        </div>
      {{/plans}}
    </div>
    <button class="plan-selector__accept button">
      ${_('Continue')}
    </button>
  </div>
`)
