'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, MapPin, Calendar, Users, ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function Experience() {
    const [selectedProject, setSelectedProject] = useState(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0) // Fixed: Added missing state

    const projects = [
        {
            id: 1,
            type: 'Fashion Show',
            client: 'Lacoste & Champion',
            date: 'January 24, 2026',
            location: 'Abrezza Malls, Davao',
            description: 'Runway show featuring latest collections from Lacoste and Champion',
            image: 'https://images.unsplash.com/photo-1556807215-f47c31a66ac2?q=85',
            gallery: [
                'https://images.unsplash.com/photo-1556807215-f47c31a66ac2?q=85',
                'https://images.unsplash.com/photo-1594245703266-cbcf061378c3?q=85',
                'https://images.unsplash.com/photo-1651014400775-a38cc66f95e7?q=85'
            ],
            team: { photographer: 'TBA', stylist: 'Brand Creative Team' }
        },
        {

            id: 2,
            type: 'Club Photoshoot',
            client: 'XCLV Davao',
            date: 'January 15, 2026',
            location: 'XCLV, Davao City',
            description: 'High-end club promotional photoshoot featuring editorial and lifestyle photography',
            image: 'https://images.unsplash.com/photo-1559907252-60b1e6e600da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHw0fHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwbWFsZSUyMG1vZGVsfGVufDB8fHxibGFja19hbmRfd2hpdGV8MTc3MDA5NzgxOHww&ixlib=rb-4.1.0&q=85',
            gallery: [
                "", "", ""
            ],
            team: { photographer: 'XCLV Creative Team', stylist: 'TBA' }
        },
        {
            id: 3,
            type: 'Brand Ambassador',
            client: 'GCash',
            date: 'August 15-17, 2025',
            location: 'Abrezza Malls, Davao',
            duration: '3-Day Event',
            description: 'Brand ambassador for GCash during a major 3-day promotional event at Abrezza Malls',
            image: 'https://images.unsplash.com/photo-1589081318939-f9952734290f?q=85',
            gallery: [
                'https://images.unsplash.com/photo-1589081318939-f9952734290f?q=85',
                'https://images.unsplash.com/photo-1556807215-f47c31a66ac2?q=85',
                'https://images.unsplash.com/photo-1559907252-60b1e6e600da?q=85'
            ],
            team: { photographer: 'TBA', stylist: 'GCash Creative Team' }
        },

      


        {

            id: 4,
            type: 'Restaurant Campaign',
            client: 'Marinara Ristorante Bistro and Pub',
            date: 'July 2025',
            location: 'Davao City',
            description: 'Restaurant promotional campaign featuring lifestyle and dining photography',
            image: 'https://images.unsplash.com/photo-1594245703266-cbcf061378c3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBtYWxlJTIwbW9kZWx8ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzcwMDk3ODIzfDA&ixlib=rb-4.1.0&q=85',
            gallery: [
                "", "", ""
            ],
            team: {
                photographer: 'Restaurant Creative Team', stylist: 'TBA'
            }

        },
        {

            id: 5,
            type: ""
        }



        // Add more projects here following the same gallery structure
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
    }

    return (
        <div className="min-h-screen bg-white text-black">
            {/* Header */}
            <header className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-30">
                <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-6">
                    <Link href="/" className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase hover:opacity-50 transition-all group">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Archive</span>
                    </Link>
                </div>
            </header>

            {/* Hero */}
            <section className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-20">
                <h1 className="text-6xl md:text-9xl font-light tracking-tighter mb-6 font-serif">
                    Experience <span className="bold text-gray-5s00">Log</span>
                </h1>
                <p className='text-xl text-gray-500 tracking-wide max-w-2xl editorial-fade-in-delay-1'> My most recent
                    Shows and Collaborations.
                </p>
            </section>

            {/* Projects Grid */}
            <section className="max-w-screen-2xl mx-auto px-6 lg:px-12 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => openProject(project)}
                            className="group cursor-pointer space-y-6"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-gray-50 border border-gray-100">
                                <img
                                    src={project.image}
                                    alt={project.client}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] tracking-[0.2em] uppercase">
                                    View Case
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-3xl font-serif">{project.client}</h3>
                                    <p className="text-gray-400 text-xs tracking-widest uppercase mt-2">{project.type}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Swipeable Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 bg-white z-50 flex flex-col md:flex-row overflow-hidden"
                    onClick={() => setSelectedProject(null)}
                >
                    {/* Slider Section */}
                    <div className="relative h-[60vh] md:h-full md:flex-1 bg-neutral-900 flex items-center justify-center">
                        {/* Nav Buttons - Made large for thumb-tapping */}
                        <button
                            onClick={prevImage}
                            className="absolute left-4 z-10 p-4 text-white/50 hover:text-white transition-colors"
                        >
                            <ChevronLeft size={40} strokeWidth={1} />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-4 z-10 p-4 text-white/50 hover:text-white transition-colors"
                        >
                            <ChevronRight size={40} strokeWidth={1} />
                        </button>

                        <img
                            src={selectedProject.gallery[currentImageIndex]}
                            className="w-full h-full object-contain animate-in fade-in duration-500"
                            alt="Gallery"
                            key={currentImageIndex}
                        />

                        {/* Counter Label */}
                        <div className="absolute bottom-6 left-6 text-white/40 text-[10px] tracking-[0.3em] uppercase">
                            {currentImageIndex + 1} / {selectedProject.gallery.length}
                        </div>

                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-6 right-6 text-white p-2"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Details Section */}
                    <div
                        className="h-[40vh] md:h-full md:w-[450px] bg-white p-8 md:p-12 overflow-y-auto border-l border-gray-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="space-y-8">
                            <div>
                                <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase mb-2">{selectedProject.type}</p>
                                <h2 className="text-4xl font-serif mb-4">{selectedProject.client}</h2>
                                <p className="text-gray-500 text-sm leading-relaxed">{selectedProject.description}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-8">
                                <div>
                                    <p className="text-[10px] text-gray-400 tracking-widest uppercase mb-1">Location</p>
                                    <p className="text-sm">{selectedProject.location}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 tracking-widest uppercase mb-1">Date</p>
                                    <p className="text-sm">{selectedProject.date}</p>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-gray-100">
                                <p className="text-[10px] text-gray-400 tracking-widest uppercase mb-4">Creative Team</p>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <p><span className="text-gray-300 mr-2">PH:</span> {selectedProject.team.photographer}</p>
                                    <p><span className="text-gray-300 mr-2">ST:</span> {selectedProject.team.stylist}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}