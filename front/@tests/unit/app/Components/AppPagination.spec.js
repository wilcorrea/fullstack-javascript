import { shallowMount } from '@vue/test-utils'
import $lang from 'src/lang'
import AppPagination from 'src/app/Components/Pagination/AppPagination'
import AppIcon from 'src/app/Components/Icon/AppIcon'

describe('AppPagination', () => {
  const spy = jest.spyOn(console, 'error')
  shallowMount(AppPagination, { components: { AppIcon } })

  /**
   * @test
   */
  it('"offset" is required', () => {
    expect(spy).toBeCalledWith(expect.stringContaining('[Vue warn]: Missing required prop: "offset"'))
  })

  /**
   * @test
   */
  it('"limit" is required', () => {
    expect(spy).toBeCalledWith(expect.stringContaining('[Vue warn]: Missing required prop: "limit"'))
  })

  const offset = Math.round(Math.random() * 99)
  const limit = Math.round(Math.random() * 99)
  const wrapper = shallowMount(
    AppPagination,
    { components: { AppIcon }, propsData: { offset, limit } }
  )

  /**
   * @test
   */
  it('create markup with i18n correctly', () => {
    expect(wrapper.html()).toMatch('' +
      '<div class="app-pagination">' +
      '<button class="app-pagination__append">' +
      $lang('app.components.pagination.more') +
      '</button>' +
      '<button class="app-pagination__to-top">' +
      '<app-icon-stub name="arrow_upward"></app-icon-stub>' +
      '</button>' +
      '</div>')
  })

  /**
   * @test
   */
  it('test pagination management', () => {
    expect(wrapper.vm.offset).toBe(offset)
    expect(wrapper.vm.limit).toBe(limit)
    // noinspection JSUnresolvedFunction
    const nextOffset = wrapper.vm.nextPage()
    expect(wrapper.vm.page).toBe(1)
    expect(nextOffset).toEqual((wrapper.vm.page) * limit)
  })

  /**
   * @test
   */
  test('should render content correctly', () => {
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
