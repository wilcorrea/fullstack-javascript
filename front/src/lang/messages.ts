import ptBr from 'src/lang/pt-br'
import { Record } from 'src/app/Agnostic/interfaces'

/**
 * The standard messages list
 * @type {Record}
 */
export const messages: Record = { 'pt-br': ptBr }

/**
 * Set the messages
 * Can be used to replace or add new messages
 * @param {string} alias
 * @param {Record} newLocale
 */
export const setMessages = (alias: string, newLocale: Record) => {
  messages[alias] = newLocale
}

/**
 * Get the messages
 * @param {string} alias
 * @returns {Record}
 */
export const getMessages = (alias: string): Record => {
  return messages[alias]
}

/**
 * Export getMessages as default
 * @param {string} locale
 * @returns {Record}
 */
export default getMessages
