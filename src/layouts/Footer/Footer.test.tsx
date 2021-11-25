import { BRAND } from '@constants/CONTENT'
import renderer from 'react-test-renderer'
import Footer from './Footer'

test('Footer displays copyright with current year and brand', () => {
  const footerRenderer = renderer.create(<Footer />)
  const tree = footerRenderer.toJSON()
  expect(tree).toMatchSnapshot()
  const footerInstance = footerRenderer.root
  const footerElement = footerInstance.findByProps({
    className: 'p-10 footer bg-primary text-primary-content footer-center',
  })
  expect(footerElement.findByType('p').children[0]).toEqual(
    `© ${new Date().getFullYear()} ${BRAND}`
  )
})
