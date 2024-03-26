import './styles/app.scss'
import './styles/header.scss'
import './styles/content.scss'
import './styles/footer.scss'

import { _ } from '@utils/i18n'
import { list } from '@utils'

const App = (selector, data) => {
  const container = document.querySelector(selector)
  if (!container) {
    throw new Error(`Unknown container: ${container}`)
  }
  
  function render(container, data) {
    const {
      title,
      features,
      plans,
      footer_links
    } = data

    container.innerHTML += `
      <div class="header">
        <img class='header__cross' src="images/Cross.png">
      </div>

      <div class="content">
        <div class="title">
          ${title}
        </div>
        <div class="features">
          ${
            list(features, feature => `
              <div class="features__item">
                <img src="${feature.background}" class="features__item-background">
                <div class="features__item-mask"></div>
                <div class="features__item-title">
                  ${feature.title}
                </div>
              </div>
            `)
          }
        </div>
        <div class="plan-selector">
          <div class="plan-selector__list">
            ${
              list(plans, plan => `
                <div class="plan-selector__item ${plan.is_best?'plan-selector__item--best': ''}" data-href="${plan.href}">
                  <div class="plan-selector__item--side">
                    <div class="plan-selector__item--title">
                      ${plan.title}
                    </div>
                    ${
                      plan.year_price? `
                        <div class="plan-selector__item--year-price">
                          ${ _('Just {{price}} per year').replace('{{price}}', plan.year_price) }
                        </div>
                      `: ''
                    }
                  </div>
                  <div class="plan-selector__item--side">
                    <div class="plan-selector__item--price">
                      ${ _('{{price}} <br>per week').replace('{{price}}', plan.price) }
                    </div>
                  </div>
                  ${
                    plan.is_best? `
                      <div class="plan-selector__item--highlight">
                        ${_('BEST OFFER')}
                      </div>
                    `: ''
                  }
                </div>
              `)
            }
          </div>
          <a class="plan-selector__button" href="#">
            ${_('Continue')}
          </a>
        </div>
      </div>

      <div class="footer">
        <div class="footer__links">
          ${
            list(footer_links, link => `
              <a href="${link.href ?? '#'}" class="footer__link">
                ${link.text}
              </a>
            `)
          }
        </div>
      </div>
    `
  }

  function setupPlanSelector(container) {
    const plan_selector_items = container.querySelectorAll('.plan-selector__item')
    
    // Выделяем первый элемент списка
    plan_selector_items[0].classList.add('plan-selector__item--selected')
    
    // Назначаем элементам списка обработчик события click
    plan_selector_items.forEach(item => item.addEventListener('click',
      event => {
        const selected = event.target.closest('.plan-selector__item')

        // Снимаем все прошлые выделения и подсвечиваем нажатый элемент
        const old_selected = container.querySelectorAll('.plan-selector__item--selected')
        old_selected.forEach(_ => _.classList.remove('plan-selector__item--selected'))

        selected.classList.add('plan-selector__item--selected')

        // Меняем ссылку
        const link_button = container.querySelector('.plan-selector__button')
        link_button.href = selected.dataset.href
      }
    ))
  }
  
  render(container, data)
  setupPlanSelector(container)
}

App('body', {
  title: _('Get Unlimited <br>Access'),
  features: [
    {
      title: _('Unlimited Art <br>Creation'),
      background: 'images/feature1.png'
    },
    {
      title: _('Exclusive <br>Styles'),
      background: 'images/feature2.png'
    },
    {
      title: _('Magic Avatars <br>With 20% Off'),
      background: 'images/feature3.png'
    }
  ],
  plans: [
    {
      title: _('YEARLY ACCESS'),
      href: 'https://apple.com',
      year_price: '$39.99',
      price: '$0.48',
      is_best: true
    },
    {
      title: _('WEEKLY ACCESS'),
      href: 'https://google.com',
      price: '$6.99'
    }
  ],
  footer_links: [
    { text: _('Terms of Use') },
    { text: _('Privacy Policy') },
    { text: _('Restore') }
  ]
})
