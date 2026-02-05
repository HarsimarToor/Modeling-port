'use client'

import Link from 'next/link'
import { ArrowLeft, Instagram, Facebook, Phone, Mail } from 'lucide-react'

export default function Contact() {
     return (
          <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">

               {/* Navigation */}
               <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg py-6">
                    <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">
                         <Link href="/" className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase group">
                              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                              <span>Back</span>
                         </Link>
                         <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400">Inquiries</span>
                    </div>
               </nav>

               <main className="max-w-screen-xl mx-auto px-6 pt-40 pb-20">
                    <div className="max-w-4xl">
                         {/* Heading */}
                         <h1 className="text-6xl md:text-[8vw] font-serif font-light tracking-tighter leading-none mb-12">
                              Let's <span className="italic text-neutral-300">Connect</span>
                         </h1>

                         <p className="text-sm md:text-xl text-neutral-500 uppercase tracking-[0.15em] font-light mb-20 leading-relaxed max-w-2xl">
                              Currently based in Davao City. Available for runway, editorial, and commercial projects worldwide.
                         </p>

                         {/* Contact Links */}
                         <div className="space-y-12">

                              {/* Instagram */}
                              <a
                                   href="https://www.instagram.com/cmrtoor/"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="group flex items-center justify-between border-b border-neutral-100 pb-8 hover:opacity-50 transition-all"
                              >
                                   <div className="flex items-center gap-6">
                                        <Instagram size={24} strokeWidth={1} />
                                        <span className="text-2xl md:text-4xl font-serif">Instagram</span>
                                   </div>
                                   <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 group-hover:translate-x-2 transition-transform">Follow</span>
                              </a>

                              {/* Facebook */}
                              <a
                                   href="https://www.facebook.com/harsimar.singh.395454/"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="group flex items-center justify-between border-b border-neutral-100 pb-8 hover:opacity-50 transition-all"
                              >
                                   <div className="flex items-center gap-6">
                                        <Facebook size={24} strokeWidth={1} />
                                        <span className="text-2xl md:text-4xl font-serif">Facebook</span>
                                   </div>
                                   <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 group-hover:translate-x-2 transition-transform">Connect</span>
                              </a>



                         </div>
                    </div>

                    {/* Footer info */}
                    <div className="mt-32 pt-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between gap-8">
                         <div>
                              <p className="text-[10px] tracking-[0.3em] text-neutral-400 uppercase mb-2">Location</p>
                              <p className="text-sm">Davao City, Philippines</p>
                         </div>
                         <div>
                              <p className="text-[10px] tracking-[0.3em] text-neutral-400 uppercase mb-2">Availability</p>
                              <p className="text-sm font-serif italic text-neutral-500">Currently accepting new bookings for 2026</p>
                         </div>
                    </div>
               </main>
          </div>
     )
}