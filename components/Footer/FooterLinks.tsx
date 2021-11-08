import Link from 'next/link'

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
        <span className="footer-title">{link.title}</span>
        {link.urls.map((link, index) => (
          <Link key={index} href={link.path}>
            <a className="link link-hover">{link.text}</a>
          </Link>
        ))}
      </div>
    ))}
  </div>
)

export default FooterLinks
