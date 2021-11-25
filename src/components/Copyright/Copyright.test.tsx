import { BRAND } from '@constants/CONTENT'
import renderer from 'react-test-renderer'
import Copyright from './Copyright'

test('Copyright displays current year and brand', () => {
  const copyrightRenderer = renderer.create(<Copyright />)
  const tree = copyrightRenderer.toJSON()
  expect(tree).toMatchSnapshot()
  const copyrightInstance = copyrightRenderer.root
  expect(copyrightInstance.findByType('p').children[0]).toEqual(
    `© ${new Date().getFullYear()} ${BRAND}`
  )
})
