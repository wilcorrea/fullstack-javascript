/**
 * @param {string} template
 * @param {Array|Object} replaces
 * @param regex
 * @returns {string}
 */
export const replacement = (
  template: string,
  replaces: any,
  regex?: ((expression: string) => RegExp)
): string => {
  // cast the template to a new string
  const string = template
  // noinspection RegExpRedundantEscape
  let keyFy = (expression: string) => new RegExp(`\\{${expression}\\}`, 'g')
  if (regex) {
    keyFy = regex
  }
  const replace = (replacing: string, key: string, value: string) => {
    return replacing.replace(keyFy(key), value)
  }

  if (Array.isArray(replaces)) {
    return replaces.reduce(
      (replacing, value, index) => replace(replacing, String(index), String(value)),
      string
    )
  }

  if (typeof replaces === 'object') {
    return Object.keys(replaces).reduce(
      (replacing, key) => replace(replacing, key, String(replaces[key])),
      string
    )
  }

  return template
}

/**
 * @param {string} key
 * @returns {RegExp}
 */
export const regexByColon = (key: string) => new RegExp(`:${key}`, 'g')

/**
 * @param {string} content
 * @returns {string}
 */
export const breakLine = (content: string) => content.replace(/ /g, '<br>')
