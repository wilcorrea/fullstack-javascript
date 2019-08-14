import Schema from 'src/app/Agnostic/Schema'
import { orderPath } from './routeFile'
import { amount, customer, payments, status } from 'src/domains/Order/helperTable'
import { hookFetchRecord, statuStyling, statusFormatting } from 'src/domains/Order/helperForm'
import $lang from 'src/lang'
import orderCustomer from './Components/OrderConsumer.vue'

/**
 * @type {OrderSchema}
 */
export default class OrderSchema extends Schema {
  /**
   * Construct a new OrderSchema
   */
  construct () {
    this.namespace = 'order'

    // create the field id to table and form
    // TableLink is a formatter to create links
    this.addField('id')
      .setTableAvailable(true)
      .setTableWidth('150px')
      .setTableLink(`${orderPath}/:id`)
      .setFormAvailable(true)
      .setFormComponent(
        'app-content',
        { left: 'list_alt', right: 'filter_none', label: $lang('domains.order.id.form') }
      )
      .setFormWidth(60)

    // create the field to get the amount and show in table and form
    // TableFormat will be used to mask the values
    this.addField('amount.total')
      .setTableAvailable(true)
      .setTableTextAlign('right')
      .setTableWidth('140px')
      .setTableFormat(amount)

    // include the payments to table
    this.addField('payments')
      .setTableAvailable(true)
      .setTableTextAlign('center')
      .setTableWidth('60px')
      .setTableHeight('1.3em')
      .setTableComponent(payments)

    // include the payments to table
    this.addField('status')
      .setTableAvailable(true)
      .setTableStyle(() => ({ 'height': '1.6em', 'max-width': '90px', 'white-space': 'normal' }))
      .setTableComponent(status)
      .setFormAvailable(true)
      .setFormComponent(
        'app-content',
        { left: 'access_time', label: '', styling: statuStyling, formatting: statusFormatting }
      )
      .setFormWidth(40)

    this.addField('createdAt')
      .setTableAvailable(true)
      .fieldIsDate()

    this.addField('customer.ownId')
      .setFormAvailable(true)
      .setFormComponent('app-content', { left: 'whatshot', right: 'filter_none' })

    this.addField('customer')
      .setTableAvailable(true)
      .setTableStyle(() => ({ 'display': 'flex', 'height': '2.6em' }))
      .setTableComponent(customer)
      .setFormAvailable(true)
      .setFormComponent(orderCustomer)

    this.addField('separator')
      .setFormAvailable(true)
      .setFormComponent('app-separator')

    this.addHook('fetch:record', hookFetchRecord)
  }
}
