"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Heart,
  Mail,
  MapPin,
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react";
import { alumni, images, locations, logo, products } from "./iea-data";

function useMotion() {
  useEffect(() => {
    document.documentElement.classList.add("iea-motion-ready");
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    targets.forEach((target, index) => {
      target.style.setProperty("--delay", `${Math.min(index * 55, 360)}ms`);
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((target) => target.classList.add("visible"));
      return;
    }

    const revealInView = () => {
      const trigger = window.innerHeight * 0.9;
      targets.forEach((target) => {
        if (!target.classList.contains("visible") && target.getBoundingClientRect().top < trigger) {
          target.classList.add("visible");
        }
      });
    };

    revealInView();
    window.addEventListener("scroll", revealInView, { passive: true });
    window.addEventListener("resize", revealInView);
    return () => {
      window.removeEventListener("scroll", revealInView);
      window.removeEventListener("resize", revealInView);
    };
  }, []);
}

export function IeaNav() {
  useEffect(() => {
    const nav = document.querySelector(".iea-nav");
    const onScroll = () => nav?.classList.toggle("is-scrolled", window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="iea-nav">
      <Link href="/" className="iea-brand" aria-label="Igiehon Elite Academy">
        <img src={logo} alt="AI Logo" />
        <span>IGIEHON ELITE ACADEMY</span>
      </Link>
      <div className="iea-nav-links">
        <Link href="/">about</Link>
        <Link href="/locations">locations</Link>
        <Link href="/">alumni</Link>
        <Link href="/shop">shop</Link>
        <Link href="/">IEA App</Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="iea-footer">
      <div>
        <h3>IEA App coming soon.</h3>
        <p>On Google Play And App Store.</p>
        <div className="store-buttons">
          <a href="https://play.google.com/store/apps/details?id=com.igiehon.elite">
            <img src={images.play} alt="Google Play" />
            <span>
              GET IT ON <b>Google Play</b>
            </span>
          </a>
          <a href="https://apps.apple.com/ie/app/igiehon-elite/id1234567890">
            <img src={images.appStore} alt="App Store" />
            <span>
              Download on the <b>App Store</b>
            </span>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <Link href="/" className="footer-logo">
          <img src={logo} alt="AI Logo" />
          <span>#BeElite</span>
        </Link>
        <div className="footer-links">
          <Link href="/">about</Link>
          <Link href="/locations">locations</Link>
          <Link href="/">alumni</Link>
          <Link href="/shop">shop</Link>
        </div>
        <div className="footer-socials">
          <a href="https://www.instagram.com/igiehoneliteacademy/" aria-label="Instagram">
            <span>IG</span>
          </a>
          <a
            href="https://www.tiktok.com/@igiehoneliteacademy?_r=1&_t=ZN-93cZSnFYGhj"
            aria-label="TikTok"
          >
            <span>TT</span>
          </a>
          <a href="mailto:info@igiehoneliteacademy.com" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
      <small>© 2026 IGIEHON ELITE ACADEMY</small>
    </footer>
  );
}

export function HomePage() {
  useMotion();

  return (
    <main className="iea-site">
      <IeaNav />
      <section className="home-hero">
        <img src={images.hero} alt="Elite basketball training" />
        <div className="hero-shade" />
        <div className="hero-content reveal visible">
          <p className="eyebrow red-pill">Ireland&apos;s #1 Basketball Academy</p>
          <h1>
            Ignite your <span>greatness</span>
          </h1>
          <p className="hero-copy">
            The nurturing ground for Ireland&apos;s next basketball stars. Train with
            pro-level intensity.
          </p>
          <Link href="/locations" className="primary-cta">
            START TRAINING <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="split-section">
        <div className="copy-column reveal">
          <p className="eyebrow">Philosophy</p>
          <h2>
            Where excellence <span>happens</span>
          </h2>
          <p>
            Step into the realm of elite performance. Igiehon Elite Academy is
            renowned for an unwavering commitment to greatness, offering young
            athletes a world-class environment designed by professionals.
          </p>
          <p>
            Through meticulously engineered training sessions, we empower you to
            sharpen your skills, unleash raw athletic prowess, and dominate the
            competition.
          </p>
          <div className="feature-grid">
            {[
              "Elite Training Methods",
              "Pro Player Coaches",
              "International Exposure",
              "College Pathways",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="image-stat reveal">
          <img src={images.training} alt="Elite training" />
          <div className="vertical-stat">
            <b>450+</b>
            <span>Athletes developed</span>
          </div>
        </div>
      </section>

      <section className="founder-section">
        <div className="copy-column reveal">
          <h2>
            Created by a <span>basketball player</span> for{" "}
            <span>basketball players</span>
          </h2>
          <p>
            Born in Dublin, Ireland, Aidan, the Academy&apos;s founder, began his
            basketball journey as a 12-year boy. His talent, passion, and commitment
            to excellence led him from Ireland to the USA, where he earned more than
            60 college scholarships.
          </p>
          <p>
            Today, he wishes to apply all the knowledge and expertise earned over the
            years into an elite academy that guides young athletes toward lasting
            success.
          </p>
          <button className="secondary-cta">Join Now</button>
        </div>
        <div className="founder-gallery reveal">
          <span>Our Founder</span>
          {[images.founderOne, images.founderTwo, images.founderThree].map(
            (src, index) => (
              <img key={src} src={src} alt={index === 2 ? "Aidan Igiehon" : "Aidan"} />
            ),
          )}
        </div>
      </section>

      <section className="locations-preview reveal">
        <p className="eyebrow">Training Hubs</p>
        <h2>Locations</h2>
        <Link href="/locations" className="map-card">
          <img src={images.map} alt="Ireland Locations Map" />
          <span>
            Explore Locations <ArrowRight size={18} />
          </span>
        </Link>
        <p>7 Training Hubs Across Ireland</p>
      </section>

      <section className="global-section">
        <div className="copy-column reveal">
          <p className="eyebrow">International</p>
          <h2>
            Thrive on a <span>global stage</span>
          </h2>
          <p>
            We challenge our athletes to embrace international competition. Each
            summer, we provide direct pathways to showcase skills on US courts,
            gaining exposure to scouts, Highschool and college recruiters, all while
            competing against elite competition
          </p>
        </div>
        <div className="global-card reveal">
          <img src={images.global} alt="Global Exposure" />
          <div>
            <b>USA TOURS</b>
            <span>Direct Access</span>
          </div>
          <div>
            <b>SCOUTING</b>
            <span>Pro Exposure</span>
          </div>
          <div>
            <b>PATHWAYS</b>
            <span>Elite Prep Schools & NCAA Colleges</span>
          </div>
        </div>
      </section>

      <section className="alumni-section reveal">
        <p className="eyebrow">Proven Pathway</p>
        <h2>
          USA Scholastic <span>opportunities</span>
        </h2>
        <div className="alumni-grid">
          {alumni.map((person) => (
            <article key={person.name}>
              <img src={person.image} alt={person.name} />
              <h3>{person.name}</h3>
              <p>{person.school}</p>
              <span>{person.place}</span>
            </article>
          ))}
        </div>
        <Link href="/" className="ghost-link">
          View All Alumni
        </Link>
      </section>

      <section className="elite-access reveal">
        <div>
          <p className="eyebrow">Investment</p>
          <h2>Elite Access</h2>
          <div className="benefits">
            {[
              "Custom Training Program",
              "Pro-Level Film Analysis",
              "Full Elite Training Kit",
              "4-5 Monthly Sessions",
              "Scholarship Consultation",
              "USA Scouting Access",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <button className="primary-cta">Sign Up Now</button>
        </div>
        <img src={products[0].image} alt="Elite Training Kit" />
      </section>
      <Footer />
    </main>
  );
}

function StoreHeader({
  title,
  variant = "product",
}: {
  title?: string;
  variant?: "product" | "shop" | "locations";
}) {
  if (variant === "shop") {
    return (
      <header className="store-header store-header-shop">
        <Link href="/" aria-label="Home">
          <img src={logo} alt="AI Logo" />
        </Link>
        <span />
        <Link href="/shop" aria-label="Bag">
          <ShoppingBag size={20} />
        </Link>
      </header>
    );
  }

  if (variant === "locations") {
    return (
      <header className="store-header store-header-locations">
        <Link href="/" aria-label="Back">
          <ArrowLeft size={21} />
        </Link>
        <span />
        <span />
      </header>
    );
  }

  return (
    <header className="store-header">
      <Link href="/shop" aria-label="Back">
        <ArrowLeft size={21} />
      </Link>
      <strong>{title}</strong>
      <Link href="/shop" aria-label="Bag">
        <ShoppingBag size={20} />
      </Link>
    </header>
  );
}

export function LocationsPage() {
  useMotion();
  return (
    <main className="iea-site subpage">
      <StoreHeader variant="locations" />
      <section className="locations-page">
        <h1 className="sr-only">Locations</h1>
        <p className="locations-heading reveal visible">
          Select your nearest training location to begin your journey
        </p>
        <div className="location-grid">
          {locations.map((location, index) => (
            <Link href={`/enroll/${location.toLowerCase()}`} className="location-card reveal" key={location}>
              <span className={index === 0 ? "pin active" : "pin"}>
                <MapPin size={24} />
              </span>
              <h3>{location}</h3>
              <div>
                <span>Enroll Now</span>
                <i>
                  <ArrowRight size={20} />
                </i>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export function ShopPage() {
  useMotion();
  return (
    <main className="iea-site subpage">
      <StoreHeader variant="shop" />
      <section className="shop-page">
        <div className="shop-intro reveal visible">
          <p className="eyebrow red-pill">Official Merchandise</p>
          <h1>Academy Shop</h1>
          <p>Gear up like a pro. High-performance apparel designed for the elite athlete.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <Link href={`/shop/${product.id}`} className="product-card reveal" key={product.id}>
              <div>
                <img src={product.image} alt={product.name} />
              </div>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <span>{product.price}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export function ProductDetail({ product }: { product: (typeof products)[number] }) {
  useMotion();
  return (
    <main className="iea-site subpage">
      <StoreHeader title="IEA SHOP" />
      <section className="product-detail">
        <div className="product-stage reveal visible">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info reveal visible">
          <p className="product-category">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="price">{product.price}</p>
          <div className="quantity">
            <strong>Quantity</strong>
            <div>
              <button aria-label="Decrease quantity">
                <Minus size={16} />
              </button>
              <span>1</span>
              <button aria-label="Increase quantity">
                <Plus size={16} />
              </button>
            </div>
          </div>
          <button className="add-bag">Add to Bag</button>
          <button className="favourite">
            Favourite <Heart size={17} />
          </button>
          {["View Product Details", "Delivery & Returns", "Reviews"].map((label) => (
            <button className="accordion-row" key={label}>
              {label}
              <ChevronDown size={17} />
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
