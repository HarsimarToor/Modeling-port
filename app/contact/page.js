import { Instagram, Facebook, Phone, Mail, MessageCircle } from 'lucide-react'
import SiteHeader from '../../components/SiteHeader'
import Reveal from '../../components/Reveal'
import Footer from '../../components/Footer'
import { contact } from '../../data/portfolio'

export const metadata = {
  title: 'Contact - Harsimar Singh Toor',
  description: 'Booking inquiries for runway, editorial and commercial projects.',
}

// Rows only appear when the link exists in data/portfolio.js
function getLinks() {
  const digits = (s) => s.replace(/[^\d]/g, '')
  return [
    contact.whatsapp && { name: 'WhatsApp', action: 'Message', Icon: MessageCircle, href: `https://wa.me/${digits(contact.whatsapp)}`, external: true },
    contact.email && { name: 'Email', action: 'Write', Icon: Mail, href: `mailto:${contact.email}` },
    contact.phone && { name: 'Call', action: 'Call', Icon: Phone, href: `tel:${contact.phone.replace(/[^\d+]/g, '')}` },
    contact.instagram && { name: 'Instagram', action: 'Follow', Icon: Instagram, href: contact.instagram, external: true },
    contact.facebook && { name: 'Facebook', action: 'Connect', Icon: Facebook, href: contact.facebook, external: true },
  ].filter(Boolean)
}

export default function Contact() {
  const links = getLinks()

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <SiteHeader />

      <main className="mx-auto max-w-screen-xl px-6 pb-20 pt-36 md:pt-40">
        <div className="max-w-4xl">
          <Reveal>
            <h1 className="mb-8 font-serif text-6xl font-light leading-none tracking-tighter md:mb-12 md:text-[8vw]">
              Let&apos;s <span className="italic text-neutral-300">Connect</span>
            </h1>
            <p className="mb-14 max-w-2xl text-sm font-light uppercase leading-relaxed tracking-[0.15em] text-neutral-500 md:mb-20 md:text-xl">
              {contact.intro}
            </p>
          </Reveal>

          <div>
            {links.map(({ name, action, Icon, href, external }, i) => (
              <Reveal key={name} delay={i * 80}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center justify-between gap-4 border-b border-neutral-100 py-7 transition-opacity active:opacity-50 md:py-9 md:hover:opacity-50"
                >
                  <div className="flex items-center gap-5 md:gap-6">
                    <Icon size={24} strokeWidth={1} />
                    <span className="font-serif text-3xl md:text-4xl">{name}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 transition-transform group-hover:translate-x-2">
                    {action}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-8 border-t border-neutral-100 pt-12 md:mt-32 md:flex-row">
          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-neutral-400">Location</p>
            <p className="text-sm">{contact.location}</p>
          </div>
          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-neutral-400">Availability</p>
            <p className="font-serif text-lg italic text-neutral-500">{contact.availability}</p>
          </div>
        </div>
      </main>

      <Footer cta={false} />
    </div>
  )
}
