import index from 'src/app/Components/index'

describe('index', () => {
  /**
   * @test
   */
  it('try to import the root of components and global resources', () => {
    expect(index).toEqual(true)
  })
})
