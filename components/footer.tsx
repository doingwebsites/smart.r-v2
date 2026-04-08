import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  product: [
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Status", href: "#" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-16 md:px-6">
      <div className="container mx-auto">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/smart-logo.png"
                alt="Smart.R"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              The all-in-one AI-powered ATS built by recruiters, for recruiters.
            </p>
            <div className="mt-6 flex gap-4">
              {/* Social links placeholders */}
              {["twitter", "linkedin", "github"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-emerald-500 hover:text-white"
                >
                  <span className="sr-only">{social}</span>
                  <div className="size-4 rounded bg-current opacity-60" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-900">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-emerald-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-900">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-emerald-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-900">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-emerald-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-900">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-emerald-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Smart.R. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Built with love for recruiters worldwide.
          </p>
        </div>
      </div>
    </footer>
  )
}
