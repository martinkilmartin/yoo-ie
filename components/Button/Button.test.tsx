import renderer from 'react-test-renderer'
import Button from './Button'

test('Button displays text', () => {
  const button = renderer.create(<Button text="Push Me" />)
  const tree = button.toJSON()
  expect(tree).toMatchSnapshot()
})
