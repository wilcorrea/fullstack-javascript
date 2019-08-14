import GraphQL from 'src/app/DataSource/GraphQL'
import { GraphQLQuery } from 'src/app/DataSource/graphQL.d'

/**
 * @type {OrderService}
 */
export default class OrderService extends GraphQL {
  /**
   * @type {string}
   */
  namespace = '/orders'

  /**
   * @type {GraphQLQuery}
   */
  protected getter: GraphQLQuery = {
    name: 'order',
    query: `
    (id: "{id}") {
      id,
      ownId,
      status,
      amount {
        total
        fees
        refunds
        liquid
        otherReceivers
        currency
      },
      createdAt,
      customer {
        id,
        ownId,
        fullname,
        email,
        phone {
          countryCode
        },
        birthDate,
        taxDocument {
          number
        },
        addresses {
          type
          street
          streetNumber
          complement
          district
          city
          state
          country
          zipCode
        },
        fundingInstrucments {
          creditCard {
            id
            customerOwnId
            brand
            first6
            last4
            store
          }
          isPresential
          method
          institution
        }
      },
      items {
        product
        price
      },
      payments {
        id,
        amount {
          total
          fees
          refunds
          liquid
          otherReceivers
          currency
        },
        updatedAt,
        fundingInstrument {
          isPresential
          method
          institution
        }
      },
      platform
    }`
  }

  /**
   * @type {GraphQLQuery}
   */
  protected searcher: GraphQLQuery = {
    name: 'orders',
    query: `
    (offset: {offset}, limit: {limit}) {
      id,
      ownId,
      status,
      amount {
        total
        fees
        refunds
        liquid
        otherReceivers
        currency
      },
      createdAt,
      customer {
        fullname,
        email
      },
      items {
        product
        price
      },
      payments {
        id,
        amount {
          total
          fees
          refunds
          liquid
          otherReceivers
          currency
        },
        updatedAt,
        fundingInstrument {
          isPresential
          method
          institution
        }
      },
      platform
    }`
  }
}
