import renderer from 'react-test-renderer'
import Button from './Button'

test('Button displays text', () => {
  const button = renderer.create(<Button text="Push Me" />)
  const tree = button.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button displays text and is small', () => {
  const button = renderer.create(<Button text="Push Me" size="sm" />)
  const tree = button.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button displays text and is small and wide', () => {
  const button = renderer.create(
    <Button text="Push Me" size="sm" shape="wide" />
  )
  const tree = button.toJSON()
  expect(tree).toMatchSnapshot()
})
