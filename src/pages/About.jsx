import { motion } from 'framer-motion'
import React from 'react'
import P from '../assets/P.JPG'

export default function About() {

  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "-bottom-0 -right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "-top-1/2 -left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",

  ]
  const stackes = [
    { label: "Experience", value: "1+ years" },
    { label: "Speciality", value: "Full stack" },
    { label: "Focus", value: "Performance & UX" },
  ]

  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div className={`absolute rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`} key={i} />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12 ">
        <motion.div className='flex flex-col md:flex-row items-center md:items-stretch gap-8' initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.4 }}>
          <motion.div className='relative w-40 h-40 md:w-50 md:h-50 rounded-2xl overflow-hidden shadow-2xl bg-linear-to-br from-[#1cd8d2]/20 to-[#302b63]/20 border border-[#1cd8d2]/25' whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 200, damping: 18 }}>
            <img src={P} alt="Profile" className='absolute inset-0 ' />
          </motion.div>
          <div className='flex flex-1 flex-col justify-center text-center md:text-left '>
            <h2 className='text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2] '>Raj kishore sahoo</h2>
            <p className='mt-2 text-lg sm:text-xl text-white/90 font-semibold'>Full stack devloper</p>
            <p className='mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl'>i build scalable modern application with a strong focus on clean architecture delightful UX,and performance.My toolkit spans React,Next.js Typescript,TailwindCSS ,and RestApi-bringing ideas to life from concept to production with robust Apis and smooth interfaces.</p>
            <div className='mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl'>
              {stackes.map((item, i) => (
                <motion.div className='rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center ' key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i, duration: 0.4 }} viewport={{ once: true, amount: 0.3 }}>
                  <div className='text-sm text-gray-400 '>
                    {item.label}
                  </div>
                  <div className='text-base font-semibold '>
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className='mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start '>
              <a href="#project" className='inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-100 transition'>View Project</a>
              <a href="#contact" className='inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white px-5 py-3 hover:bg-white/20 transition'>Get in Touch</a>
            </div>
          </div>
        </motion.div>

          <motion.div className='text-center md:text-left ' initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{duration:0.6}} viewport={{once:true,amount:0.4}}>
              <h3 className='text-2xl sm:text-3xl font-bold text-white mb-3'>About Me</h3>
              <p className='text-gray-300 leading-relaxed text-base sm:text-lg '>I'am a software Devloper ,Content Creater , and web devloper-passionate about building fast,resilient application and sharing coding insight on instagram and YouTube.</p>
              <p className='mt-4 text-gray-400 text-base sm:text-lg'>I love turning into scalable ,user-friendly product that make an impact.</p>
          </motion.div>
      </div>
    </section>
  )
}