import Link from "next/link";
export default function Footer() {
  return (
    <footer className="studio-footer">
      <div className="studio-footer-top">
        <Link className="studio-brand" href="/">
          ts<span>✳</span>
          <small>INDUSTRIES</small>
        </Link>
        <p>
          Thoughtful design.
          <br />
          Software with purpose.
        </p>
        <nav aria-label="Footer navigation">
          <Link href="/#works">Selected work</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/faq">FAQs</Link>
          <Link href="/certificates">Certificates</Link>
        </nav>
        <nav aria-label="Social links">
          <a
            href="https://github.com/thulanesigasa"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/thulanesigasa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href="mailto:pharezsigasa@gmail.com">Email ↗</a>
        </nav>
      </div>
      <div className="studio-footer-bottom">
        <span>© {new Date().getFullYear()} TS Industries</span>
        <span>Based in South Africa. Building for everywhere.</span>
        <div>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms-of-service">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
