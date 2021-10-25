import renderer from 'react-test-renderer'
import TextArea from './TextArea'

test('TextArea displays label and text-area-input', () => {
  const title = 'Message'
  const placeholder = 'Enter your message here'
  const textAreaRenderer = renderer.create(
    <TextArea title={title} placeholder={placeholder} />
  )
  const tree = textAreaRenderer.toJSON()
  expect(tree).toMatchSnapshot()
  const textAreaInstance = textAreaRenderer.root
  expect(
    textAreaInstance.findByProps({
      className: 'label-text',
    }).children[0]
  ).toEqual(title)
  expect(
    textAreaInstance.findByProps({
      className: 'h-24 textarea textarea-bordered textarea-primary',
    }).props.placeholder
  ).toEqual(placeholder)
})

test('TextArea displays text-area-input without label', () => {
  const placeholder = 'Enter your message here'
  const textAreaRenderer = renderer.create(
    <TextArea placeholder={placeholder} />
  )
  const tree = textAreaRenderer.toJSON()
  expect(tree).toMatchSnapshot()
  const textAreaInstance = textAreaRenderer.root
  expect(
    textAreaInstance.findByProps({
      className: 'form-control',
    }).children.length
  ).toEqual(1)
  expect(
    textAreaInstance.findByProps({
      className: 'h-24 textarea textarea-bordered textarea-primary',
    }).props.placeholder
  ).toEqual(placeholder)
})
