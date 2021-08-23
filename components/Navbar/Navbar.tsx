type Props = {
  brand: string
}

const Navbar = ({ brand }: Props): JSX.Element => (
  <div className="mb-2 shadow-lg navbar bg-primary text-primary-content rounded-box">
    <div className="flex-1 px-2 mx-2">
      <span className="text-lg font-bold">{brand}</span>
    </div>
    <div className="flex-none">
      <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">
        🌝 light 🌚 dark
      </button>
    </div>
  </div>
)

export default Navbar
