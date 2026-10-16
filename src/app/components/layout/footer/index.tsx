import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="studio-footer">
      <section className="studio-footer-top" aria-label="Studio and links">
        <Link className="studio-brand" href="/">
          <Image
            className="studio-logo"
            src="/images/logo/ts-industries-transparent.png"
            alt="Ts Industries — Thulane Sigasa"
            width={1774}
            height={887}
            sizes="132px"
          />
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
      </section>
      <section
        className="studio-footer-bottom"
        aria-label="Copyright and policies"
      >
        <span>© {new Date().getFullYear()} Ts Industries</span>
        <span>Based in South Africa. Building for everywhere.</span>
        <nav aria-label="Legal">
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms-of-service">Terms</Link>
        </nav>
      </section>
    </footer>
  );
}
