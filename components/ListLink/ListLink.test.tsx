import renderer from 'react-test-renderer'
import ListLink from './ListLink'

test('ListLink exists with class', () => {
  const listLinkText = 'Click Me!'
  const listLinkRenderer = renderer.create(<ListLink text={listLinkText} />)
  const tree = listLinkRenderer.toJSON()
  expect(tree).toMatchSnapshot()
  const listLinkInstance = listLinkRenderer.root
  expect(
    listLinkInstance.findByProps({
      className: 'my-2',
    }).children.length
  ).toEqual(1)
  expect(
    listLinkInstance.findByProps({
      className: 'transition-colors duration-200 hover:text-neutral-focus',
    }).children[0]
  ).toEqual(listLinkText)
})
