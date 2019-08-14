import { status as statusCommon } from 'src/domains/Common/helperTable'
import { get } from 'src/app/Util/general'
import { money } from 'src/app/Util/currency'
import { color } from 'src/app/Util/ui'

import { statusBackgrounds } from './helper'

let random

/**
 * @param value
 * @returns {string}
 */
export const amount = ({ value }) => money(value)

/**
 * @returns {Object}
 */
export const paymentMethods = () => ({
  CREDIT_CARD: 'credit_card',
  DEBIT_CARD: 'sd_card',
  BOLETO: 'receipt',
  ONLINE_BANK_FINANCING: 'account_balance',
  ONLINE_BANK_DEBIT: 'account_balance_wallet',
  WALLET: 'attach_money'
})

/**
 * @param {CreateElement} h
 * @param record
 * @returns {Array<VNode>}
 */
export const payments = ({ h, record }) => {
  const method = get(record, 'payments.[0].fundingInstrument.method')
  return [h('app-icon', { props: { name: get(paymentMethods(), method, 'warning') } })]
}

/**
 * @param {CreateElement} h
 * @param record
 * @returns {Array<VNode>}
 */
export const status = ({ h, value }) => {
  const lang = 'domains.order.status'
  return statusCommon(statusBackgrounds(), value, lang)({ h })
}

/**
 * @param {CreateElement} h
 * @param {any} value
 * @returns {Array<VNode>}
 */
export const customer = ({ h, value }) => {
  const style = {
    'height': '30px',
    // 'display': 'flex',
    // 'align-items': 'center',
    // 'justify-content': 'center',
    'margin-left': '14px',
    'max-width': '18vw',
    'overflow': 'hidden',
    'text-overflow': 'ellipsis',
    'white-space': 'nowrap',
    'padding': '10px 0 0 0'
  }
  if (random === undefined) {
    // random = confirm('Generate random colors to user avatars?')
  }
  const name = get(value, 'fullname')
  const props = {
    letter: name.substring(0, 1),
    background: random ? color() : undefined,
    color: random ? color() : undefined
  }
  return [
    h('app-avatar', { props }),
    h('div', { style }, name)
  ]
}
