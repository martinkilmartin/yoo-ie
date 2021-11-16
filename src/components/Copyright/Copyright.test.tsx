import renderer from 'react-test-renderer'
import Copyright from './Copyright'

test('Copyright displays current year and brand', () => {
  const brand = 'Acme Teo.'
  const copyrightRenderer = renderer.create(<Copyright brand={brand} />)
  const tree = copyrightRenderer.toJSON()
  expect(tree).toMatchSnapshot()
  const copyrightInstance = copyrightRenderer.root
  expect(copyrightInstance.findByType('p').children[0]).toEqual(
    `© ${new Date().getFullYear()} ${brand}`
  )
})
