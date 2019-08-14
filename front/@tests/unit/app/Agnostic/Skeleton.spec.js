import Skeleton from 'src/app/Agnostic/Skeleton'

describe('Skeleton', () => {
  /**
   * @test
   */
  it('Skeleton singleton method', () => {
    class Stub extends Skeleton {
      construct () {}
    }

    const a = Stub.instance()
    const b = Stub.instance()
    expect(a).toEqual(b)
  })

  /**
   * @test
   */
  it('Skeleton construct method', () => {
    class Stub extends Skeleton {}

    const perform = () => new Stub()
    expect(perform).toThrow(Error)
  })

  /**
   * @test
   */
  it('Skeleton addField method', () => {
    class Stub extends Skeleton {
      construct () {
        this.addField('id')
      }
    }

    const stub = new Stub()
    const perform = () => stub.addField('id')
    expect(perform).toThrow(Error)
    stub.addField('other', { label: 'Test' })
    expect(stub.getField('other')).toEqual({ key: 'other', label: 'Test' })
  })

  /**
   * @test
   */
  it('Skeleton setField method', () => {
    class Stub extends Skeleton {
      construct () {
        this.addField('id')
      }
    }

    const stub = new Stub()
    expect(() => stub.setField('invalid', {})).toThrow(Error)
    expect(() => stub.setField('id', { key: 'invalid' })).toThrow(Error)
    stub.setField('id', { label: 'ID' })
    expect(stub.getField('id')).toEqual({ key: 'id', label: 'ID' })
  })

  /**
   * @test
   */
  it('Skeleton getField method', () => {
    class Stub extends Skeleton {
      construct () {
        this.addField('id')
      }
    }

    const stub = new Stub()
    expect(stub.getField('id')).toEqual({ key: 'id', label: '' })
    const perform = () => stub.getField('invalid')
    expect(perform).toThrow(Error)
  })

  /**
   * @test
   */
  it('Skeleton columns method', () => {
    class Stub extends Skeleton {
      construct () {
        this.addField('id', { tableAvailable: true })
      }
    }

    expect(new Stub().columns()).toEqual([{
      'align': '',
      'formatter': undefined,
      'height': '',
      'key': 'id',
      'label': '',
      'stylish': undefined,
      'width': ''
    }])
  })
})
