import { about, layout, welcome } from 'src/modules/Dashboard/routeFile'

describe('Layout', () => {
  /**
   * @test
   */
  it('dashboard: should render content correctly', async () => {
    const aboutComponent = await about()
    const layoutComponent = await layout()
    const welcomeComponent = await welcome()
    expect(typeof aboutComponent.default).toEqual('object')
    expect(typeof layoutComponent.default).toEqual('object')
    expect(typeof welcomeComponent.default).toEqual('object')
  })
})
