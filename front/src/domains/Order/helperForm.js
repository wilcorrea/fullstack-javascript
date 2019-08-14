import $lang from 'src/lang'
import { get } from 'src/app/Util/general'
import { breakLine } from 'src/app/Util/string'

import { statusBackgrounds, statusForegrounds } from './helper'

/**
 */
export const hookFetchRecord = function () {
  // this.form.fields.id.attrs.label = 'ha!'
}

/**
 * @param value
 * @returns {*}
 */
export const statuStyling = (value) => {
  if (!value) {
    return
  }
  const backgrounds = statusBackgrounds()
  const colors = statusForegrounds()
  return {
    background: get(backgrounds, value),
    color: get(colors, value)
  }
}

/**
 * @param value
 * @returns {*}
 */
export const statusFormatting = (value) => {
  if (!value) {
    return
  }
  return breakLine(String($lang(`domains.order.status.${value}`, value)).toUpperCase())
}
