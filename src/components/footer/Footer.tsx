"use client"

import Container from "../shared/Container";

interface FooterLinkProps {
  title: string;
  links: { text: string; href: string }[];
}

const FooterLinkColumn = ({ title, links }: FooterLinkProps) => (
  <div>
    <h3 className="text-white font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const serviceLinks = [
    { text: "Product Support", href: "#" },
    { text: "PC Setup & Support", href: "#" },
    { text: "Services", href: "#" },
    { text: "Terms & Conditions", href: "#" },
    { text: "Privacy Policy", href: "#" },
    { text: "Your Account", href: "#" },
  ];

  const navigateLinks = [
    { text: "Shipping & Returns", href: "#" },
    { text: "Contact Us", href: "#" },
    { text: "Blog", href: "#" },
    { text: "Sitemap", href: "#" },
  ];

  const categoryLinks = [
    { text: "Shop All", href: "#" },
    { text: "Furniture & Decor", href: "#" },
    { text: "Mobiles & Tablets", href: "#" },
    { text: "Clothing & Fashion", href: "#" },
    { text: "Gamepad", href: "#" },
    { text: "Accessories", href: "#" },
  ];

  const brandLinks = [
    { text: "QPS", href: "#" },
    { text: "Speaker & Audio", href: "#" },
    { text: "Furniture & Decor", href: "#" },
    { text: "Sageform", href: "#" },
    { text: "TV & Video", href: "#" },
    { text: "View All", href: "#" },
  ];

  return (
    <footer className="bg-[#2b2e38] text-gray-400">
      {/* Back to Top */}
      <div className="bg-[#1f2128] py-3 text-center">
        <Container>
          <a
            href="#top"
            className="text-white text-sm font-medium hover:text-gray-300 transition"
          >
            ↑ Back to Top
          </a>
        </Container>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#363943] py-14">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-white">Luna Cart</span>
                <span className="ml-2 bg-[#ff9600] text-white text-xs font-bold px-2 py-1 rounded">
                  14 day
                </span>
              </div>

              <div className="flex items-center mb-4">
                <div className="flex justify-center items-center w-10 h-10 rounded-full border border-[#ff9600] text-lg mr-3">
                  📞
                </div>
                <div>
                  <p className="text-sm">Hotline Free 24/7:</p>
                  <p className="text-[#ff9600] font-bold text-lg">
                    800-123-456-7890
                  </p>
                </div>
              </div>

              <p className="text-sm mb-1">
                Address: Acme Widgets, 123 Widget Street, Acmeville, AC 12345,
                USA
              </p>
              <p className="text-sm">Email: Contact@razortheme.com</p>
            </div>

            {/* Link Columns */}
            <FooterLinkColumn title="Our Services" links={serviceLinks} />
            <FooterLinkColumn title="Navigate" links={navigateLinks} />
            <FooterLinkColumn title="Categories" links={categoryLinks} />
            <FooterLinkColumn title="Popular Brands" links={brandLinks} />
          </div>
        </Container>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#2b2e38] py-5 text-sm border-t border-gray-700">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-center md:text-left">
              © 2025{" "}
              <span className="text-white font-semibold">Arexia</span> - All
              rights reserved. Powered by{" "}
              <span className="text-white font-semibold">BigCommerce</span>.
            </p>

            <div className="flex items-center gap-3 text-gray-400">
              <span>AMEX</span>
              <span>Mastercard</span>
              <span>PayPal</span>
              <span>VISA</span>
              <span>G Pay</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 bg-[#ff9600] hover:bg-[#e67e00] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition"
        aria-label="Scroll to Top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
