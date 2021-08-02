import renderer from 'react-test-renderer'
import Copyright from './Copyright'

test('Copyright displays current year and brand', () => {
  const brand = 'Acme Teo.'
  const copyrightRenderer = renderer.create(<Copyright brand={brand} />)
  const tree = copyrightRenderer.toJSON()
  expect(tree).toMatchSnapshot()
  const copyrightInstance = copyrightRenderer.root
  expect(
    copyrightInstance.findByProps({
      className:
        'flex items-center justify-center pt-10 font-light text-center sm:pt-12',
    }).children[0]
  ).toEqual(`© ${new Date().getFullYear()} ${brand}`)
})
