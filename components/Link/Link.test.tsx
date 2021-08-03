import renderer from 'react-test-renderer'
import Link from './Link'

test('Link displays text', () => {
  const linkText = 'Click Me!'
  const linkRenderer = renderer.create(<Link text={linkText} />)
  const tree = linkRenderer.toJSON()
  expect(tree).toMatchSnapshot()
  const linkInstance = linkRenderer.root
  expect(
    linkInstance.findByProps({
      className: 'transition-colors duration-200 hover:text-accent-focus',
    }).children[0]
  ).toEqual(linkText)
})
