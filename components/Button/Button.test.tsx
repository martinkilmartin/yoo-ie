import renderer from 'react-test-renderer'
import Button from './Button'

test('Button displays text', () => {
  const buttonText = 'Push Me'
  const buttonRenderer = renderer.create(<Button text={buttonText} />)
  const tree = buttonRenderer.toJSON()
  expect(tree).toMatchSnapshot()
  const buttonInstance = buttonRenderer.root
  expect(buttonInstance.findByProps({ className: 'btn' }).children).toEqual([
    buttonText,
  ])
})

test('Button displays text and is small', () => {
  const buttonText = 'Push Me'
  const buttonSize = 'sm'
  const buttonRenderer = renderer.create(
    <Button text={buttonText} size={buttonSize} />
  )
  const tree = buttonRenderer.toJSON()
  expect(tree).toMatchSnapshot()
  const buttonInstance = buttonRenderer.root
  expect(
    buttonInstance.findByProps({ className: 'btn  btn-sm' }).children
  ).toEqual([buttonText])
})

test('Button displays text and is small and wide', () => {
  const buttonText = 'Push Me'
  const buttonSize = 'sm'
  const buttonWidth = 'wide'
  const buttonRenderer = renderer.create(
    <Button text={buttonText} size={buttonSize} shape={buttonWidth} />
  )
  const tree = buttonRenderer.toJSON()
  expect(tree).toMatchSnapshot()
  const buttonInstance = buttonRenderer.root
  expect(
    buttonInstance.findByProps({ className: 'btn  btn-sm  btn-wide' }).children
  ).toEqual([buttonText])
})
