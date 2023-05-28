export const i18n = {
  defaultLocale: 'tt',
  locales: ['tt', 'en', 'ru', 'ttlat'],
} as const

export type Locale = typeof i18n['locales'][number]
