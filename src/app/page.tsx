'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Wifi, Globe, Smartphone, ArrowRight, MessageCircle, ChevronRight } from 'lucide-react'

const PLANS = [
  { id: 'stc-1', provider: 'stc', type: 'Local SIM', data: '10GB', duration: '7 Days', price: 'SAR 40', link: 'https://wa.me/966500000000?text=I%20want%20the%20stc%2010GB%20plan' },
  { id: 'mobily-1', provider: 'Mobily', type: 'Local SIM', data: '20GB', duration: '15 Days', price: 'SAR 75', link: 'https://wa.me/966500000000?text=I%20want%20the%20Mobily%2020GB%20plan' },
  { id: 'airalo-1', provider: 'Airalo', type: 'eSIM', data: '5GB', duration: '30 Days', price: 'USD 15', link: 'https://www.airalo.com/saudi-arabia-esim' },
]

export default function Home() {
  const [step, setStep] = useState(0)
  const [selections, setSelections] = useState({ duration: '', data: '', type: '' })

  const nextStep = (field: string, value: string) => {
    setSelections({ ...selections, [field]: value })
    setStep(step + 1)
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white p-4 flex flex-col items-center max-w-md mx-auto relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-neonPurple opacity-10 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-iceBlue opacity-10 rounded-full blur-[100px]" />

      <header className="w-full pt-8 pb-12 flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-iceBlue"
        >
          N58 TELECOM
        </motion.h1>
        <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest">Premium Connectivity</p>
      </header>

      <section className="w-full flex-1">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: -20 }}
              className="space-y-4"
            >
              <div className="glass-card p-6 border-iceBlue/20">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Globe className="text-iceBlue w-5 h-5" />
                  Welcome to Saudi Arabia
                </h2>
                <p className="text-gray-300 mb-6">How long are you staying?</p>
                <div className="grid gap-3">
                  {['Short Trip (1-7 days)', 'Medium Stay (8-15 days)', 'Long Stay (30+ days)'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => nextStep('duration', opt)}
                      className="w-full p-4 rounded-xl border border-white/10 bg-white/5 hover:border-neonPurple transition-all text-left flex justify-between items-center group"
                    >
                      {opt}
                      <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-neonPurple" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: -20 }}
              className="space-y-4"
            >
              <div className="glass-card p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Wifi className="text-neonPurple w-5 h-5" />
                  Data Needs
                </h2>
                <p className="text-gray-300 mb-6">How much data do you need?</p>
                <div className="grid gap-3">
                  {['Light (1-5GB)', 'Regular (10-20GB)', 'Unlimited / Heavy'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => nextStep('data', opt)}
                      className="w-full p-4 rounded-xl border border-white/10 bg-white/5 hover:border-iceBlue transition-all text-left flex justify-between items-center group"
                    >
                      {opt}
                      <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-iceBlue" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-semibold px-2">Top Recommendations</h2>
              {PLANS.map((plan) => (
                <div key={plan.id} className="glass-card p-5 relative overflow-hidden border-iceBlue/30 neon-glow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-iceBlue bg-iceBlue/10 px-2 py-0.5 rounded-full mb-2 inline-block">
                        {plan.type}
                      </span>
                      <h3 className="text-lg font-bold">{plan.provider}</h3>
                    </div>
                    <span className="text-xl font-bold text-neonPurple">{plan.price}</span>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-400 mb-6">
                    <span className="flex items-center gap-1"><Wifi size={14}/> {plan.data}</span>
                    <span className="flex items-center gap-1"><Globe size={14}/> {plan.duration}</span>
                  </div>
                  <a
                    href={plan.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-neonPurple to-[#8b5cf6] py-3 rounded-lg flex items-center justify-center gap-2 font-bold hover:scale-[1.02] transition-transform"
                  >
                    Get it Now <ArrowRight size={16}/>
                  </a>
                </div>
              ))}
              <button 
                onClick={() => setStep(0)}
                className="w-full py-3 text-gray-500 text-sm hover:text-white"
              >
                Start Over
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <footer className="w-full py-8 border-t border-white/5 mt-8 flex flex-col items-center">
        <p className="text-gray-600 text-[10px] tracking-[0.2em]">MADE BY NAWAF</p>
      </footer>
    </main>
  )
}
