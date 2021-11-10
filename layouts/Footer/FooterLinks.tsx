type Props = {
  links: {
    title: string
    urls: {
      path: string
      text: string
    }[]
  }[]
}

const FooterLinks = ({ links }: Props): JSX.Element => (
  <div className="grid-rows footer">
    {links.map((link, i) => (
      <div key={i}>
        <span className="opacity-100 footer-title">{link.title}</span>
        {link.urls.map((link, index) => (
          <a key={index} href={link.path} className="link link-hover">
            {link.text}
          </a>
        ))}
      </div>
    ))}
  </div>
)

export default FooterLinks
