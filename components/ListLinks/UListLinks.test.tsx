import renderer from 'react-test-renderer'
import UListLinks from './UListLinks'

test('UListLinks exists with class', () => {
  const uListLinksText = [
    'ABCDEF',
    'HIJKLMNOP',
    'QRS',
    'TUVWXYZ',
    '01234',
    '56789',
  ]
  const uListLinksRenderer = renderer.create(
    <UListLinks links={uListLinksText} />
  )
  const tree = uListLinksRenderer.toJSON()
  expect(tree).toMatchSnapshot()
  const uListLinksInstance = uListLinksRenderer.root
  expect(
    uListLinksInstance.findByProps({
      className:
        'flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light',
    }).children.length
  ).toEqual(6)
})
