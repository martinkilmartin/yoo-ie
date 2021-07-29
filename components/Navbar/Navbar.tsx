type Props = {
  brand: string
}

const Navbar = ({ brand }: Props) => (
  <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
    <div className="flex-1 px-2 mx-2">
      <span className="text-lg font-bold">{brand}</span>
    </div>
  </div>
)

export default Navbar
