import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo-wrap">
            <Image
              src={getImgPath("/images/logo/logo.svg")}
              alt="T.s Indurstries logo"
              width={40}
              height={40}
              style={{ borderRadius: "50%", border: "2px solid rgba(254,67,0,0.4)" }}
            />
            <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.1rem" }}>
              T.s Indurstries
            </span>
          </div>
          <p className="footer-text">
            © {new Date().getFullYear()} T.s Indurstries &middot; Built with passion &middot;{" "}
            <a href="https://ts-industries.co.za" target="_blank" rel="noopener noreferrer">
              ts-industries.co.za
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
