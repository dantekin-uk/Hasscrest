import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Cta from '../components/Cta'

const faqs = [
  {
    id: 1,
    question: 'What is HASS Crest Capital?',
    answer: 'HASS Crest Capital is an emerging investment management institution delivering innovative, professionally managed, and Sharia-compliant investment solutions across East Africa. We specialize in institutional portfolio management, pension fund investment management, and private markets investment.'
  },
  {
    id: 2,
    question: 'What investment solutions does HASS Crest offer?',
    answer: 'We provide a range of services including institutional portfolio management, pension fund investment management, investment advisory and structuring, private equity investments, venture capital opportunities, infrastructure investments, and real estate solutions.'
  },
  {
    id: 3,
    question: 'Is HASS Crest Sharia-compliant?',
    answer: 'Yes, all our investment solutions are Sharia-compliant, ensuring they align with Islamic finance principles. This makes us an excellent choice for faith-based organizations, Islamic financial institutions, and investors seeking ethical, values-aligned investments.'
  },
  {
    id: 4,
    question: 'Who can invest with HASS Crest?',
    answer: 'We serve institutional investors including pension funds, insurance companies, SACCOs, corporate organizations, faith-based organizations, foundations and endowments, and development finance institutions. We also work with high-net-worth individuals for private wealth management.'
  },
  {
    id: 5,
    question: 'What is your approach to risk management?',
    answer: 'We employ disciplined portfolio management with prudent risk management practices. Our team conducts thorough due diligence, maintains diversified portfolios, and employs sophisticated risk assessment frameworks to protect our clients\' assets.'
  },
  {
    id: 6,
    question: 'How do I start investing with HASS Crest?',
    answer: 'Simply contact our team to request a consultation. We\'ll discuss your investment mandates, liquidity requirements, and specific objectives to structure a customized investment solution that meets your needs.'
  },
  {
    id: 7,
    question: 'What geographic markets does HASS Crest focus on?',
    answer: 'We primarily focus on East Africa, providing deep market knowledge and strategic investment opportunities in the region. Our team has extensive experience navigating the regulatory landscape and identifying compelling investments across East African markets.'
  },
  {
    id: 8,
    question: 'How does HASS Crest ensure transparency?',
    answer: 'Transparency is core to our values. We provide regular reporting, detailed portfolio insights, and maintain open communication channels with all our clients. We believe trust is earned through unwavering adherence to ethical business practices.'
  }
]

function FaqAccordion() {
  const [openId, setOpenId] = useState(1)

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-navy/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <div className="h-px w-10 sm:w-14 bg-gradient-to-r from-accent-gold via-accent-gold-vivid to-accent-gold-light shrink-0" />
            <span className="font-display text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-accent-gold font-bold">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 sm:mb-4">
            <span className="text-primary-navy leading-tight">Everything You Need to</span>
            <span className="block bg-gradient-to-r from-accent-gold via-accent-gold-vivid to-accent-gold-light bg-clip-text text-transparent leading-tight mt-1">
              Know About HASS Crest
            </span>
          </h2>

          <p className="font-body text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Get answers to common questions about our investment solutions, services, and approach to wealth management.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="relative group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-accent-gold/30 via-accent-gold/10 to-primary-navy/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              
              <div className="relative bg-white rounded-lg border border-primary-navy/8 overflow-hidden hover:border-accent-gold/30 transition-colors duration-300">
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full flex items-start justify-between gap-4 p-5 sm:p-6 text-left hover:bg-gradient-to-r hover:from-accent-gold/3 hover:via-white hover:to-white transition-all duration-300"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="mt-1 flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-accent-gold to-accent-gold-vivid" />
                    </div>
                    <h3 className="font-heading text-sm sm:text-base font-bold text-primary-navy leading-tight">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-accent-gold flex-shrink-0 transition-transform duration-500 ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openId === faq.id ? 'auto' : 0,
                    opacity: openId === faq.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-accent-gold/20 bg-gradient-to-br from-accent-gold/5 via-white to-primary-navy/3">
                    <p className="font-body text-sm text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Fqrs() {
  return (
    <main className="min-h-screen relative">
      {/* Global Background with Pattern */}
      <div className="fixed inset-0 -z-10 bg-bg-gray overflow-hidden">
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: 'radial-gradient(#0B192C 0.5px, transparent 0.5px)'
             }} 
        />
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-navy/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-navy/4 rounded-full blur-3xl translate-x-1/2 translate-y-1/3" />
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative bg-gradient-to-br from-primary-navy via-primary-navy to-navy-deep rounded-b-[1.2rem] sm:rounded-b-[1.5rem] lg:rounded-b-[2rem] shadow-2xl overflow-hidden mx-1 sm:mx-1 h-[260px] sm:h-[300px] lg:h-[340px] isolate"
      >
        {/* Overlay layers */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-navy-deep/60 via-primary-navy/40 to-primary-navy/20" />
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-br from-primary-navy/40 via-transparent to-navy-deep/50" />

        {/* Decorative golden accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-accent-gold-vivid/8 rounded-full blur-3xl" />

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{
               backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(240,193,74,0.3) 1px, transparent 1px)',
               backgroundSize: '30px 30px'
             }} 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 h-full flex flex-col pt-[6.5rem] sm:pt-[7.5rem]">
          <div className="flex-1 min-h-0" />

          {/* Content */}
          <div className="relative flex-shrink-0 pb-10 sm:pb-14 lg:pb-18">
            <div className="max-w-3xl lg:max-w-4xl text-left">
              <div className="flex items-center gap-4 mb-5 sm:mb-6 animate-fadeInUp">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent-gold/20 backdrop-blur-sm border border-accent-gold/40">
                  <HelpCircle className="w-5 h-5 text-accent-gold" />
                </div>
                <h1 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
                  <span className="bg-gradient-to-r from-white via-accent-gold-light to-accent-gold bg-clip-text text-transparent">FAQs & Resources</span>
                </h1>
              </div>
              <p className="font-body text-white/80 text-[0.9rem] sm:text-[1.05rem] lg:text-[1.15rem] leading-relaxed max-w-2xl animate-fadeInUp delay-100">
                Comprehensive answers to help you understand HASS Crest&apos;s investment solutions and approach to wealth management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqAccordion />

      {/* CTA Section */}
      <Cta
        badge="Ready to Invest?"
        title="Let's Discuss Your Investment Goals"
        description="Have additional questions or want to explore how HASS Crest can help with your investment objectives? Our team is ready to provide personalized guidance."
        buttonText="Schedule a Consultation"
        subject="Investment Consultation Request"
        bodyPrefix="I would like to discuss my investment objectives with HASS Crest:"
        showInput={false}
      />
    </main>
  )
}

export default Fqrs
