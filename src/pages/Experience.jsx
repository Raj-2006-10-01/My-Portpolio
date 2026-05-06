import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'


const experiences = [
  {
    role: "Web Developer",
    company: "Brain Mentors",
    duration: "2022",
    description: "Built high-performance apps, integrated AI features, and improved user engagement through faster, smoother product experiences.",
    highlights: ["Performance", "AI Features", "Frontend"],
  },
  {
    role: "Web Developer Intern",
    company: "Mobisoft Technologies",
    duration: "2022 - 2023",
    description: "Gained hands-on web development experience by contributing to production-oriented features, UI improvements, and team-based delivery.",
    highlights: ["Learning", "UI Polish", "Teamwork"],
  },
  {
    role: "Graduate Engineer",
    company: "HCL Technologies",
    duration: "2024 - 2025",
    description: "Built the frontend of a GenAI-powered PV Intake app with Next.js and TypeScript for a US client, with a strong focus on clarity and scale.",
    highlights: ["Next.js", "TypeScript", "GenAI"],
  },
]

const cardVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction,
    y: 24,
    scale: 0.96,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function ExperienceCard({ exp, index, direction = 0 }) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-[28px] border border-white/12 bg-white/6 p-6 sm:p-7 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl"
      custom={direction}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(28,216,210,0.2),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(48,43,99,0.35),transparent_45%)] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex rounded-full border border-[#1cd8d2]/30 bg-[#1cd8d2]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#9ef7ee]">
              {exp.duration}
            </span>
            <h3 className="mt-4 text-2xl font-semibold text-white sm:text-[1.75rem]">
              {exp.role}
            </h3>
            <p className="mt-2 text-base font-medium text-white/70">
              {exp.company}
            </p>
          </div>

          <span className="text-4xl font-semibold text-white/10 sm:text-5xl">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <p className="mt-5 text-sm leading-7 text-gray-300 sm:text-[0.98rem]">
          {exp.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {exp.highlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-white/80"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

function TimelineDot() {
  return (
    <motion.span
      className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full border border-white/35 bg-[#071116] shadow-[0_0_0_10px_rgba(255,255,255,0.06)]"
      initial={{ scale: 0.6, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="h-2 w-2 rounded-full bg-[#1cd8d2]" />
    </motion.span>
  )
}

export default function Experience() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.25'],
  })

  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.35,
  })

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative overflow-hidden bg-black px-6 py-24 text-white sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-[#1cd8d2]/15 blur-[120px]" />
        <div className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-[#302b63]/30 blur-[140px]" />
        <div className="absolute bottom-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#00bf8f]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
            Career Journey
          </span>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Experience that shipped real products
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            A quick timeline of roles where I grew across product thinking, frontend engineering, and polished user experience.
          </p>
        </motion.div>

        <div className="relative mt-16 hidden lg:block">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
          <motion.div
            className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 origin-top bg-linear-to-b from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
            style={{ scaleY: lineProgress }}
          />

          <div className="space-y-2">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0

              return (
                <div
                  key={`${exp.company}-${exp.duration}`}
                  className="relative grid grid-cols-[minmax(0,1fr)_5rem_minmax(0,1fr)] items-center py-8"
                >
                  <div className={isLeft ? 'col-start-1 pr-10' : 'col-start-3 pl-10'}>
                    <ExperienceCard
                      exp={exp}
                      index={index}
                      direction={isLeft ? -56 : 56}
                    />
                  </div>

                  <div className="col-start-2 row-start-1 flex justify-center">
                    <TimelineDot />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="relative mt-14 lg:hidden">
          <div className="absolute left-3 top-0 h-full w-px bg-white/10" />
          <motion.div
            className="absolute left-3 top-0 h-full w-px origin-top bg-linear-to-b from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
            style={{ scaleY: lineProgress }}
          />

          <div className="space-y-8 pl-12">
            {experiences.map((exp, index) => (
              <div key={`${exp.company}-${exp.duration}`} className="relative">
                <div className="absolute left-[-2.15rem] top-8">
                  <TimelineDot />
                </div>

                <ExperienceCard exp={exp} index={index} direction={28} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
