import SiteHeader from '../../components/SiteHeader'
import ProjectsGrid from '../../components/ProjectsGrid'
import Reveal from '../../components/Reveal'
import Footer from '../../components/Footer'
import { projects } from '../../data/portfolio'

export const metadata = {
  title: 'Experience - Harsimar Singh Toor',
  description: 'Runway shows, brand campaigns and editorial collaborations.',
}

export default function Experience() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-screen-xl px-6 pb-14 pt-32 md:pb-24 md:pt-48">
          <Reveal>
            <h1 className="mb-6 font-serif text-5xl font-light leading-none tracking-tighter md:text-8xl">
              Experience <span className="italic text-neutral-300">Log</span>
            </h1>
            <p className="max-w-lg text-sm font-light uppercase leading-relaxed tracking-wider text-neutral-500 md:text-lg">
              A curated selection of runway shows, brand campaigns, and editorial collaborations.
            </p>
          </Reveal>
        </section>

        <section className="mx-auto max-w-screen-xl px-6 pb-24 md:pb-32">
          <ProjectsGrid projects={projects} />
        </section>
      </main>

      <Footer />
    </div>
  )
}
