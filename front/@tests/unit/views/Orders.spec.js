import { shallowMount } from '@vue/test-utils'
import Orders from 'src/views/Orders.vue'
import $lang from 'src/lang'

import AppTable from 'src/app/Components/Table/AppTable'
import AppPagination from 'src/app/Components/Pagination/AppPagination'
import Http from 'src/app/DataSource/Http'

describe('Orders', () => {
  const mock = { orders: [{ id: 1 }] }
  const offset = 0
  const limit = 5
  Http.mockRegister(`/orders/search/offset=${offset}/limit=${limit}`, mock)

  const wrapper = shallowMount(
    Orders,
    { components: { AppTable, AppPagination }, mocks: { $lang } }
  )

  /**
   * @test
   */
  it('check component markup', () => {
    expect(wrapper.html()).toContain(`<h1>${$lang('views.orders.title')}</h1>`)
  })

  /**
   * @test
   */
  it('method assignRecords', () => {
    wrapper.vm.table.records = []
    wrapper.vm.offset = offset
    wrapper.vm.limit = limit
    wrapper.vm.assignRecords(mock)
    expect(1).toEqual(wrapper.vm.table.records[0].id)
  })

  /**
   * @test
   */
  it('method assignRecordsFinish', () => {
    wrapper.vm.offset = 1
    wrapper.vm.assignRecordsFinish()
    expect(false).toEqual(wrapper.vm.table.loading)
  })

  /**
   * @test
   */
  it('method fetchRecords', async () => {
    wrapper.vm.table.records = []
    wrapper.vm.offset = offset
    wrapper.vm.limit = limit
    await wrapper.vm.fetchRecords()
    expect(mock.orders).toEqual(wrapper.vm.table.records)
  })

  /**
   * @test
   */
  it('method paginationUpdateOffset', async () => {
    wrapper.vm.table.records = []
    wrapper.vm.offset = offset
    wrapper.vm.limit = limit
    await wrapper.vm.paginationUpdateOffset({ offset })
    expect(mock.orders).toEqual(wrapper.vm.table.records)
  })

  /**
   * @test
   */
  it('method paginationToTop', () => {
    wrapper.vm.paginationToTop()
    expect(1).toEqual(1)
  })

  /**
   * @test
   */
  it('method loadingShow', () => {
    wrapper.vm.loadingShow()
    expect(true).toEqual(wrapper.vm.table.loading)
  })

  /**
   * @test
   */
  it('method loadingHide', () => {
    wrapper.vm.loadingHide()
    expect(false).toEqual(wrapper.vm.table.loading)
  })

  /**
   * @test
   */
  test('should render content correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
