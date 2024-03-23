const importLang = async (lang_code) => {
  const { default: data } = await import(`../langs/${lang_code}.json`)
  return data
}

const importLangs = async (langs) => {
  const promises = langs.map(importLang)
  const data = await Promise.all(promises)
  return langs.reduce((result, lang_code, idx) => {
    return { ...result, [lang_code]: data[idx] }
  }, {})
}

export const langs = await importLangs(['de', 'en', 'es', 'fr', 'ja', 'pt'])

export const _ = (str) => {
  const window_search = window.location.search
  const url_params = new URLSearchParams(window_search)
  const system_lang = url_params.get('lang')
  let lang = langs[system_lang]
  if (!lang) {
    lang = langs['en']
  }
  lang ??= {}
  const translated = lang[str] ?? ''
  return translated
}
