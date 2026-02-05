'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react'

function useElementOnScreen(options) {
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting)
        }, options)
        if (containerRef.current) observer.observe(containerRef.current)
        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current)
        }
    }, [containerRef, options])

    return [containerRef, isVisible]
}

const ExperienceCard = ({ project, onClick }) => {
    const [ref, isVisible] = useElementOnScreen({ threshold: 0.3 })
    const isVideo = project.image.endsWith('.mp4')

    return (
        <div
            ref={ref}
            onClick={() => onClick(project)}
            className="group cursor-pointer transition-transform duration-700"
        >
            <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-6">
                {isVideo ? (
                    <video
                        src={project.image}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className={`w-full h-full object-cover transition-all duration-[1.5s] ease-out ${isVisible ? 'grayscale-0 scale-[1.03]' : 'grayscale scale-100'
                            }`}
                    />
                ) : (
                    <img
                        src={project.image}
                        alt={project.client}
                        className={`w-full h-full object-cover transition-all duration-[1.5s] ease-out ${isVisible ? 'grayscale-0 scale-[1.03]' : 'grayscale scale-100'
                            }`}
                    />
                )}
                <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-[9px] tracking-[0.2em] uppercase shadow-sm z-10">
                    View Details
                </div>
            </div>
            <div className={`space-y-1 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <h3 className="text-2xl font-serif">{project.client}</h3>
                <div className="flex justify-between items-center text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
                    <span>{project.type}</span>
                    <span>{project.date.split(',')[1] || project.date}</span>
                </div>
            </div>
        </div>
    )
}

export default function Experience() {
    const [selectedProject, setSelectedProject] = useState(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const projects = [
        {
            id: 1,
            type: 'Fashion Show',
            client: 'Lacoste & Champion',
            date: 'January 24, 2026',
            location: 'Abreeza Mall, Davao',
            description: 'Runway show featuring the Spring/Summer 2026 collections.',
            image: 'lac1.jpeg',
            gallery: ['lac1.jpeg', 'lac2.jpeg', 'champ1.jpeg', 'champ2.jpeg'],
            team: { photographer: 'TBA', stylist: 'Brand Creative Team' }
        },
        {
            id: 2,
            type: 'Club Photoshoot',
            client: 'XCLV Davao',
            date: 'January 15, 2026',
            location: 'XCLV, Davao City',
            description: 'High-end club promotional photoshoot featuring editorial and lifestyle photography.',
            image: '/simar.mp4', // Your video file here
            gallery: ['xcl1.jpeg', 'xcl2.jpeg'],
            team: { photographer: 'XCLV Creative Team', stylist: 'TBA' }
        },
        {
            id: 3,
            type: 'Brand Ambassador',
            client: 'GCash',
            date: 'August 15-17, 2025',
            location: 'Abreeza Mall, Davao',
            description: 'Lead brand ambassador for a 3-day regional promotional event.',
            image: 'gcash1.JPG',
            gallery: ['gcash1.JPG', 'gcash2.JPG', 'gcash3.JPG', 'gcash4.JPG', 'gcash5.JPG', 'gcash6.JPG'],
            team: { photographer: 'Agency Team', stylist: 'GCash Creative' }
        },
        {
            id: 4,
            type: 'Restaurant Campaign',
            client: 'Marinara Ristorante',
            date: 'July 2025',
            location: 'Davao City',
            description: 'Lifestyle campaign for social media and digital menus.',
            image: 'mari1.JPG',
            gallery: ['mari1.JPG'],
            team: { photographer: 'Marinara Creative', stylist: 'TBA' }
        },
        {
            id: 5,
            type: 'Runway Collective',
            client: 'Runway Archive',
            date: '2025 - 2026',
            location: 'Various Locations',
            description: 'A comprehensive collection of runway appearances, including Kadayawan Fashion Week, local designer showcases, and retail launches across the region.',
            image: 'RUN4.jpg', // This will be the cover image
            gallery: [
                'RUN1.JPG',
                'RUN2.JPG',
                'RUN3.jpg',
                'RUN4.jpg',
                'RUN5.jpg'
            ], // Add all your past runway filenames here
            team: { photographer: 'Various', stylist: 'On-site Creative Teams' }
        },
    ]

    const nextImage = (e) => {
        e.stopPropagation()
        setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length)
    }

    const prevImage = (e) => {
        e.stopPropagation()
        setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length)
    }

    const openProject = (project) => {
        setSelectedProject(project)
        setCurrentImageIndex(0)
        document.body.style.overflow = 'hidden'
    }

    const closeProject = () => {
        setSelectedProject(null)
        document.body.style.overflow = 'unset'
    }

    return (
        <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
            <header className="fixed top-0 left-0 right-0 border-b border-gray-50 bg-white/80 backdrop-blur-lg z-40">
                <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase group">
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back</span>
                    </Link>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400">Archive 2025-2026</span>
                </div>
            </header>

            <section className="max-w-screen-xl mx-auto px-6 pt-32 pb-16 md:pt-48 md:pb-24">
                <h1 className="text-5xl md:text-8xl font-serif font-light tracking-tighter mb-6 leading-none">
                    Experience <span className="italic text-neutral-300">Log</span>
                </h1>
                <p className="text-sm md:text-lg text-neutral-500 max-w-lg leading-relaxed uppercase tracking-wider font-light">
                    A curated selection of runway shows, brand campaigns, and editorial collaborations.
                </p>
            </section>

            <section className="max-w-screen-xl mx-auto px-6 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
                    {projects.map((project) => (
                        <ExperienceCard key={project.id} project={project} onClick={openProject} />
                    ))}
                </div>
            </section>

            {selectedProject && (
                <div className="fixed inset-0 bg-white z-[60] flex flex-col md:flex-row overflow-y-auto md:overflow-hidden">
                    <button onClick={closeProject} className="fixed top-6 right-6 z-[70] bg-black text-white p-3 rounded-full md:bg-transparent md:text-black">
                        <X size={24} />
                    </button>

                    <div className="relative h-[60vh] md:h-full md:flex-1 bg-neutral-950 flex items-center justify-center">
                        {selectedProject.gallery.length > 1 && (
                            <>
                                <button onClick={prevImage} className="absolute left-4 p-4 text-white/30 hover:text-white z-10">
                                    <ChevronLeft size={32} />
                                </button>
                                <button onClick={nextImage} className="absolute right-4 p-4 text-white/30 hover:text-white z-10">
                                    <ChevronRight size={32} />
                                </button>
                            </>
                        )}
                        <img src={selectedProject.gallery[currentImageIndex]} className="w-full h-full object-contain p-4" alt="Gallery" />
                    </div>

                    <div className="md:w-[450px] bg-white p-8 md:p-16 flex flex-col justify-center">
                        <div className="space-y-8">
                            <div>
                                <p className="text-[10px] tracking-[0.3em] text-neutral-400 uppercase mb-2">{selectedProject.type}</p>
                                <h2 className="text-4xl font-serif mb-4">{selectedProject.client}</h2>
                                <p className="text-neutral-600 text-sm leading-relaxed">{selectedProject.description}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-8 border-t border-neutral-100 pt-8">
                                <div>
                                    <p className="text-[9px] text-neutral-400 uppercase mb-1">Location</p>
                                    <p className="text-xs uppercase tracking-wider">{selectedProject.location}</p>
                                </div>
                                <div>
                                    <p className="text-[9px] text-neutral-400 uppercase mb-1">Date</p>
                                    <p className="text-xs uppercase tracking-wider">{selectedProject.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}