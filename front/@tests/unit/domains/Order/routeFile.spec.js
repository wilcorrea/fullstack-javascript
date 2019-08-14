import { index, orders, order } from 'src/domains/Order/routeFile'

describe('routeFile', () => {
  /**
   * @test
   */
  it('dashboard: should render content correctly', async () => {
    const indexComponent = await index()
    const ordersComponent = await orders()
    const orderComponent = await order()
    expect(typeof indexComponent.default).toEqual('object')
    expect(typeof ordersComponent.default).toEqual('object')
    expect(typeof orderComponent.default).toEqual('object')
  })
})
