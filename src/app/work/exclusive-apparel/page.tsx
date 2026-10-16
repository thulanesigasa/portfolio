import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Exclusive Apparel — TS Industries",
  description:
    "An e-commerce experience for Exclusive Apparel, combining brand storytelling, a photographic catalogue and connected shopping flows.",
  alternates: { canonical: "/work/exclusive-apparel/" },
};
export default function ExclusiveApparel() {
  return (
    <main className="studio-home">
      <article className="studio-case">
        <Link className="studio-text-link" href="/#works">
          ← Selected work
        </Link>
        <p className="studio-eyebrow" style={{ marginTop: 40 }}>
          COMMERCE / BRAND EXPERIENCE
        </p>
        <h1>Exclusive Apparel.</h1>
        <p>
          A clothing storefront with the confidence of a fashion editorial and
          the practical details of an online shop. Built around the brand’s
          everyday essentials for men, women and kids.
        </p>
        <dl className="studio-case-facts">
          <div>
            <dt>FOCUS</dt>
            <dd>E-commerce & web development</dd>
          </div>
          <div>
            <dt>DELIVERABLES</dt>
            <dd>Storefront, catalogue & shopping flows</dd>
          </div>
          <div>
            <dt>PROJECT STATUS</dt>
            <dd>Source available · launch managed by owner</dd>
          </div>
        </dl>
        <Image
          className="studio-case-cover"
          src="/images/work/exclusive-apparel.jpg"
          alt="Exclusive Apparel brand presentation"
          width={1200}
          height={630}
          priority
        />
        <div className="studio-case-story">
          <section>
            <h2>The brief</h2>
            <p>
              Create a distinctive home for everyday clothing, with a clear way
              to browse collections and discover individual products. The
              experience needed to balance visual storytelling with practical
              shopping information.
            </p>
          </section>
          <section>
            <h2>The approach</h2>
            <p>
              A restrained palette, oversized type and product photography give
              the brand space to breathe. Collection navigation leads into
              product galleries, size guidance, a shopping bag and checkout
              flow.
            </p>
          </section>
          <section>
            <h2>Behind the experience</h2>
            <p>
              The repository includes inventory-aware commerce logic, customer
              account flows, order management and supporting delivery and
              returns pages. TypeScript connects the interface with the
              catalogue and commerce services.
            </p>
          </section>
          <section>
            <h2>Delivery</h2>
            <p>
              The source is maintained on GitHub. Final prices, stock, payment
              setup and public launch remain owner-managed; this showcase does
              not claim sales or conversion results.
            </p>
          </section>
        </div>
        <div className="studio-actions">
          <a
            className="studio-button"
            href="https://github.com/thulanesigasa/exclusive-apparel"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore the source <span>↗</span>
          </a>
          <Link className="studio-text-link" href="/#contact">
            Build something with us ↗
          </Link>
          <Link className="studio-text-link" href="/work/bible-diaries">
            Next: Bible Diaries →
          </Link>
        </div>
      </article>
    </main>
  );
}
