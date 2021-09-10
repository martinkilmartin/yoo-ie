import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'
import Dropdown from './Dropdown'

test('Dropdown default', () => {
  const message = 'hello world'
  const dropdownRenderer = renderer.create(
    <Dropdown>
      <p>{message}</p>
    </Dropdown>
  )
  const dropdownAsJSON = dropdownRenderer.toJSON()
  expect(dropdownAsJSON).toMatchSnapshot()
  const dropdownRoot = dropdownRenderer.root
  expect(
    dropdownRoot.findByProps({ className: 'm-1 btn btn-secondary' }).children[0]
  ).toEqual('Change Theme')
  expect(dropdownRoot.findByType('p').children[0]).toEqual(message)
})
