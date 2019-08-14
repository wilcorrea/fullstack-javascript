import messages from './messages'
import { get } from 'src/app/Util/general'
import { i18n } from 'src/settings'

/**
 * Start with a default locale
 * @type {string}
 */
let locale = i18n()

/**
 * Set the current locale
 * @param {string} newLocale
 */
export const setLocale = (newLocale: string) => {
  locale = newLocale
}

/**
 * Get the current locale
 * @returns {string}
 */
export const getLocale = (): string => {
  return locale
}

/**
 * Lang is a featured i18n engine
 * We can change the locale and add more messages in realtime
 * I do not like some things in vue-i18n and other libs that I've tested, so that's it
 * @param {string} path
 * @param {string} fallback
 * @returns {*}
 */
export default (path: string, fallback: string = ''): any => {
  return get(messages(locale), path, fallback)
}
