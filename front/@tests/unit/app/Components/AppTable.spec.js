import { shallowMount } from '@vue/test-utils'
import AppTable from 'src/app/Components/Table/AppTable'
import { html, link } from 'src/app/Components/Table/formatters'

// import $lang from 'src/lang'

describe('AppTable', () => {
  const spy = jest.spyOn(console, 'error')
  shallowMount(AppTable)

  /**
   * @test
   */
  it('"columns" is required', () => {
    expect(spy).toBeCalledWith(expect.stringContaining('[Vue warn]: Missing required prop: "columns"'))
  })

  const path = 'root'
  const fieldId = { key: 'id', label: 'ID', formatter: ({ value }) => value }
  const tabletLink = {
    key: 'name',
    label: 'tableLink',
    formatter: ({ h, column, value }) => link(h, column, value, `${path}/${value}`)
  }
  const tableFormat = {
    key: 'phone',
    label: 'tableFormat',
    formatter: ({ value, record, key }) => `${value}/${key}/${record[key]}`
  }
  const tableHtml = {
    key: 'address',
    label: 'tableHtml',
    formatter: ({ h, column, value }) => {
      // noinspection JSCheckFunctionSignatures
      return html({ h, value, render: ({ value }) => `<b>${value}</b>` })
    }
  }
  const tableComponent = {
    key: 'status',
    label: 'tableHtml',
    formatter: ({ h, value }) => [h('b', value)]
  }
  const columns = [fieldId, tabletLink, tableFormat, tableHtml, tableComponent]
  const record = { id: 1, name: 'Abc', phone: '333', address: '= )', status: 'face' }
  const records = [record]
  const wrapper = shallowMount(AppTable, { propsData: { columns, records } })

  /**
   * @test
   */
  it('create the table head', () => {
    expect(wrapper.find('table > thead > tr > th > .app-table__th').text())
      .toMatch(fieldId.label)
    expect(wrapper.find(`table > thead > tr > th > .app-table__${fieldId.key}`).text())
      .toMatch(fieldId.label)
  })

  const pathValue = (key, edge = '') => {
    return `tr > td.app-table__${key}--value > .app-table__td${edge}`
  }
  /**
   * @test
   */
  it('create the table body', () => {
    expect(wrapper.find(pathValue(fieldId.key)).text())
      .toMatch(String(record[fieldId.key]))
  })
  it('create the table body: tableLink', () => {
    expect(wrapper.find(pathValue(tabletLink.key, ' > a')).attributes('href'))
      .toMatch(`${path}/${record[tabletLink.key]}`)

    expect(wrapper.vm.$el).toMatchSnapshot('tableLink')
  })
  it('create the table body: tableFormat', () => {
    expect(wrapper.find(pathValue(tableFormat.key)).text())
      .toMatch(`${record[tableFormat.key]}/${tableFormat.key}/${record[tableFormat.key]}`)

    expect(wrapper.vm.$el).toMatchSnapshot('tableFormat')
  })
  it('create the table body: tableHtml', () => {
    expect(wrapper.find(pathValue(tableHtml.key, ' > span')).html())
      .toMatch(`<b>${record[tableHtml.key]}</b>`)

    expect(wrapper.vm.$el).toMatchSnapshot('tableHtml')
  })
  it('create the table body: tableComponent', () => {
    expect(wrapper.find(pathValue(tableComponent.key)).html())
      .toMatch(`<b>${record[tableComponent.key]}</b>`)

    expect(wrapper.vm.$el).toMatchSnapshot('tableComponent')
  })

  /**
   * @test
   */
  test('should render content correctly', () => {
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
