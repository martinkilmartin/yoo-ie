import { TextArea, TextInput } from '../../components/Form'
import { Button } from '../../components/Button'

const Contact = (): JSX.Element => (
  <div className="justify-center max-w-full shadow-2xl card bg-base-100 hero-content">
    <div className="card-body">
      <TextArea title="Message" placeholder="Enter your query here" />
      <TextInput title="Email" placeholder="email" />
      <div className="mt-6 form-control">
        <Button text="Send" />
      </div>
    </div>
  </div>
)

export default Contact
