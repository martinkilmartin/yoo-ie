import renderer from 'react-test-renderer'
import Footer from './Footer'

test('Footer displays copyright with current year and brand', () => {
  const brand = 'Acme Teo.'
  const footerRenderer = renderer.create(<Footer brand={brand} />)
  const tree = footerRenderer.toJSON()
  expect(tree).toMatchSnapshot()
  const footerInstance = footerRenderer.root
  const footerElement = footerInstance.findByProps({
    className:
      'w-full max-w-screen-xl px-4 py-8 mx-auto bg-primary text-primary-content rounded-box',
  })
  expect(
    footerElement.findByProps({
      className:
        'flex items-center justify-center pt-10 font-light text-center sm:pt-12',
    }).children[0]
  ).toEqual(`© ${new Date().getFullYear()} ${brand}`)
})

test('Footer displays links and copyright with current year and brand', () => {
  const footerLinks = ['abcdefgh', 'ijklmn', 'opq', 'rst', 'uvwxyz']
  const brand = 'Acme Teo.'
  const footerRenderer = renderer.create(
    <Footer brand={brand} links={footerLinks} />
  )
  const tree = footerRenderer.toJSON()
  expect(tree).toMatchSnapshot()
  const footerInstance = footerRenderer.root
  const footerElement = footerInstance.findByProps({
    className:
      'w-full max-w-screen-xl px-4 py-8 mx-auto bg-primary text-primary-content rounded-box',
  })
  expect(
    footerElement.findByProps({
      className:
        'flex items-center justify-center pt-10 font-light text-center sm:pt-12',
    }).children[0]
  ).toEqual(`© ${new Date().getFullYear()} ${brand}`)
})
