import { shallowMount } from '@vue/test-utils'
import Order from 'src/views/Order.vue'
import $lang from 'src/lang'
import $util from 'src/app/Util'
import Http from 'src/app/DataSource/Http'
import AppForm from 'src/app/Components/Form/AppForm'

describe('Order', () => {
  const mock = { order: { id: 1 } }
  Http.mockRegister(`/orders/get/${mock.order.id}`, mock)

  const wrapper = shallowMount(
    Order,
    {
      propsData: mock.order,
      mocks: { $lang, $util },
      components: { AppForm }
    }
  )

  /**
   * @test
   */
  it('check component markup', () => {
    expect(wrapper.html()).toContain(`<h2>${$lang('views.order.title')}</h2>`)
  })

  /**
   * @test
   */
  it('method assignRecord', () => {
    wrapper.vm.assignRecord(mock)
    expect(mock.order.id).toEqual(wrapper.vm.record.id)
  })

  /**
   * @test
   */
  it('method fetchRecord', async () => {
    await wrapper.vm.fetchRecord(mock.order.id)
    expect(mock.order).toEqual(wrapper.vm.record)
  })

  /**
   * @test
   */
  test('should render content correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
