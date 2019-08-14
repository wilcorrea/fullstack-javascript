import $lang, { getLocale, setLocale } from 'src/lang'
import { setMessages, getMessages } from 'src/lang/messages'
import pages from 'src/lang/pt-br/pages'
import { i18n } from 'src/settings'

describe('index', () => {
  const current = i18n()
  /**
   * @test
   */
  it('check i18n is configured correctly', () => {
    expect(typeof current).toEqual('string')
  })

  const messages = { foo: { bar: 'Hello world!' } }
  setMessages('ru', messages)

  /**
   * @test
   */
  it('test setMessages and getMessages from messages', () => {
    expect(messages).toEqual(getMessages('ru'))
  })
  setLocale('ru')

  /**
   * @test
   */
  it('messages with a new locate', () => {
    expect(messages).toEqual(getMessages('ru'))
  })

  /**
   * @test
   */
  it('check if locale is changed correctly', () => {
    expect(getLocale()).toEqual('ru')
  })

  /**
   * @test
   */
  it('get the sentence from new local using lang', () => {
    expect($lang('foo.bar')).toEqual('Hello world!')
  })

  /**
   * @test
   */
  it('test the breadcrumb resolution of /dashboard/orders/:id', () => {
    const id = String(Math.round(Math.random() * 100))
    expect(pages['/dashboard/orders/:id'].crumb({ route: { params: { id } } }))
      .toEqual(id)
  })
})
