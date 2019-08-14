import { gql } from 'apollo-server-express'
import OrderDataSource from './OrderDataSource'

/**
 * @returns {Array}
 */
export const OrderQuery = () => [
  'order(id: String!): Order',
  'orders(limit: Int, offset: Int): [Order]'
]

/**
 * @returns {DocumentNode}
 */
export const OrderType = () => gql`
  type Order {
    id: String,
    ownId: String,
    amount: Amount,
    items: [ OrderItem ],
    customer: Customer,
    payments: [ Payment ],
    receivers: [ Receiver ],
    events: [ Event ],
    refunds: [ Refund ],
    entries: [ Entry ],
    platform: String,
    status: String,
    createdAt: String
  }

  type Subtotals {
    items: Int
  }

  type Amount {
    subtotals: Subtotals,
    total: Int,
    fees: Int,
    refunds: Int,
    liquid: Int,
    otherReceivers: Int,
    currency: String
  }

  type OrderItem {
    product: String,
    price: Float
  }

  type Customer {
    id: String,
    ownId: String,
    fullname: String,
    email: String,
    phone: Phone,
    birthDate: String,
    taxDocument: Document,
    addresses: [ Address ],
    fundingInstrucments: [ FundingInstrucment ]
  }

  type Payment {
    id: String,
    status: String,
    amount: Amount,
    installmentCount: Int,
    fundingInstrument: FundingInstrucment,
    fees: [ Fee ],
    blocks: [ Block ],
    events: [ Event ],
    createdAt: String,
    updatedAt: String,
    delayCapture: Boolean,
    isMultiPayment: Boolean
  }
  
  type Fee {
    type: String,
    amount: Float
  }

  type Phone {
    countryCode: String
  }

  type Document {
    number: String
  }

  type Address {
    type: String,
    street: String,
    streetNumber: String,
    complement: String,
    district: String,
    city: String,
    state: String,
    country: String,
    zipCode: String
  }

  type Receiver {
    type: String,
    moipAccount: MoipAccount,
    amount: Amount
  }

  type MoipAccount {
    id: String,
    login: String,
    fullname: String
  }

  type Event {
    type: String,
    createdAt: String,
    description: String
  }

  type FundingInstrucment {
    creditCard: CreditCard,
    isPresential: Boolean,
    method: String,
    institution: String
  }
  
  type CreditCard {
    id: String,
    customerOwnId: String,
    brand: String,
    first6: String,
    last4: String,
    store: Boolean
  }

  type Refund {
    unknown: String
  }

  type Block {
    unknown: String
  }

  type Entry {
    unknown: String
  }
`

/**
 * @returns {Object}
 */
export const OrderResolver = () => ({
  order: (root, { id }) => OrderDataSource.build().get(id),
  orders: (root, { offset, limit }) => OrderDataSource.build().search(offset, limit)
})
