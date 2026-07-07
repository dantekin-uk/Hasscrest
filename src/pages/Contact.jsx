import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Mail, MapPin, Send, ArrowRight } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: 'info@hasscrest.com',
    subtext: 'We respond within 24 hours.',
    link: 'mailto:info@hasscrest.com'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: '6th Floor, Prudential Building',
    subtext: 'Wabera Street, Nairobi, Kenya',
    link: '#'
  }
]

const consultationTypes = [
  { id: 'wealth', label: 'Wealth Solutions' },
  { id: 'institutional', label: 'Institutional Advisory' },
  { id: 'private-markets', label: 'Private Markets' },
  { id: 'firm', label: 'General Inquiry' }
]

function Contact() {
  const location = useLocation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'firm',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const type = params.get('type')
    const email = params.get('email')
    
    if (type && consultationTypes.some(t => t.id === type)) {
      setFormData(prev => ({ ...prev, type }))
    }
    if (email) {
      setFormData(prev => ({ ...prev, email }))
    }
    
    window.scrollTo(0, 0)
  }, [location])

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you'd send this to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <main className="min-h-screen relative">
      {/* Global Background with Pattern */}
      <div className="fixed inset-0 -z-10 bg-bg-gray overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#0B192C 0.5px, transparent 0.5px)' }} />
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-navy/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-navy/4 rounded-full blur-3xl translate-x-1/2 translate-y-1/3" />
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative bg-primary-navy rounded-b-[1.2rem] sm:rounded-b-[1.5rem] lg:rounded-b-[2rem] shadow-2xl overflow-hidden mx-1 sm:mx-1 h-[240px] sm:h-[280px] lg:h-[320px] isolate"
      >

        {/* Overlay layers */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-primary-navy/50" />
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-navy-deep via-primary-navy/80 to-primary-navy/40" />
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-br from-primary-navy/30 via-transparent to-navy-deep/60" />

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-navy-deep/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-navy/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 h-full flex flex-col pt-[6rem] sm:pt-[7rem]">
          <div className="flex-1 min-h-0" />

          {/* Content */}
          <div className="relative flex-shrink-0 pb-8 sm:pb-12 lg:pb-16">
            <div className="max-w-3xl lg:max-w-4xl text-left">
              <div className="flex items-center gap-3 mb-4 animate-fadeInUp">
                <h1 className="font-heading text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight text-white leading-tight">
                  Contact <span className="bg-gradient-to-r from-accent-gold via-accent-gold-vivid to-accent-gold-light bg-clip-text text-transparent">us.</span>
                </h1>
                <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-accent-gold to-transparent shrink-0" />
              </div>
              <p className="font-body text-white/75 text-[0.85rem] sm:text-[1rem] lg:text-[1.1rem] leading-relaxed max-w-2xl animate-fadeInUp delay-100">
                Connect with our advisory team to discuss your investment objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left Column: Info & Details */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="h-px w-8 bg-gradient-to-r from-accent-gold to-primary-navy/15 shrink-0" />
                  <span className="font-display text-[9px] tracking-[0.24em] uppercase text-primary-navy/45 font-medium">
                    Connect With Us
                  </span>
                </div>
                <h2 className="font-heading text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight text-primary-navy mb-4 leading-tight">
                  Discuss your <span className="bg-gradient-to-r from-navy-mid via-accent-gold to-accent-gold-vivid bg-clip-text text-transparent">mandate.</span>
                </h2>
                <p className="font-body text-gray-600 text-[11px] sm:text-xs lg:text-sm leading-relaxed max-w-md">
                  Whether you are an institutional allocator or a private investor, our advisory team is ready to structure a solution that meets your objectives.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5">
                {contactInfo.map((info, idx) => (
                  <a 
                    href={info.link} 
                    key={idx}
                    className="group flex items-start gap-4 p-4 rounded-2xl border border-primary-navy/5 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="h-10 w-10 rounded-xl bg-primary-navy/5 flex items-center justify-center text-primary-navy/40 group-hover:bg-accent-gold/10 group-hover:text-accent-gold transition-all duration-300 shrink-0">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-[11px] font-bold text-primary-navy mb-0.5">{info.title}</h3>
                      <p className="font-body text-[12px] text-gray-900 font-semibold mb-0.5">{info.details}</p>
                      <p className="font-body text-[10px] text-gray-500">{info.subtext}</p>
                    </div>
                  </a>
                ))}
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="relative group/form rounded-[2.5rem] p-px bg-gradient-to-br from-accent-gold/20 via-primary-navy/5 to-accent-gold/20 shadow-2xl transition-all duration-700">
                <div className="relative overflow-hidden rounded-[2.45rem] bg-white p-5 sm:p-6 lg:p-8">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2.5 mb-6">
                      <h2 className="font-heading text-base sm:text-lg font-bold text-primary-navy">Request a Consultation</h2>
                      <ArrowRight className="h-4 w-4 text-accent-gold" />
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="font-display text-[9px] tracking-widest uppercase text-gray-400 font-bold ml-1">Full Name</label>
                          <input 
                            required
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-2xl bg-bg-gray border border-primary-navy/5 focus:outline-none focus:ring-2 focus:ring-accent-gold/20 focus:border-accent-gold/30 transition-all font-body text-[13px]"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="font-display text-[9px] tracking-widest uppercase text-gray-400 font-bold ml-1">Email Address</label>
                          <input 
                            required
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 rounded-2xl bg-bg-gray border border-primary-navy/5 focus:outline-none focus:ring-2 focus:ring-accent-gold/20 focus:border-accent-gold/30 transition-all font-body text-[13px]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="font-display text-[9px] tracking-widest uppercase text-gray-400 font-bold ml-1">Phone Number</label>
                          <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+254 --- --- ---"
                            className="w-full px-4 py-3 rounded-2xl bg-bg-gray border border-primary-navy/5 focus:outline-none focus:ring-2 focus:ring-accent-gold/20 focus:border-accent-gold/30 transition-all font-body text-[13px]"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="font-display text-[9px] tracking-widest uppercase text-gray-400 font-bold ml-1">Inquiry Type</label>
                          <select 
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-2xl bg-bg-gray border border-primary-navy/5 focus:outline-none focus:ring-2 focus:ring-accent-gold/20 focus:border-accent-gold/30 transition-all font-body text-[13px] appearance-none cursor-pointer"
                          >
                            {consultationTypes.map(t => (
                              <option key={t.id} value={t.id}>{t.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-display text-[9px] tracking-widest uppercase text-gray-400 font-bold ml-1">Message</label>
                        <textarea 
                          required
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          placeholder="Tell us about your investment objectives..."
                          className="w-full px-4 py-3 rounded-2xl bg-bg-gray border border-primary-navy/5 focus:outline-none focus:ring-2 focus:ring-accent-gold/20 focus:border-accent-gold/30 transition-all font-body text-[13px] resize-none"
                        ></textarea>
                      </div>

                      <button 
                        type="submit"
                        className="w-full group relative overflow-hidden rounded-2xl bg-primary-navy py-3.5 shadow-xl transition-all duration-300 hover:shadow-primary-navy/25 hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-accent-gold via-accent-gold-vivid to-accent-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative z-10 flex items-center justify-center gap-2 font-display text-[11px] font-bold tracking-[0.2em] uppercase text-white group-hover:text-primary-navy transition-colors duration-300">
                          {isSubmitted ? 'Message Sent Successfully' : 'Send Message'}
                          {!isSubmitted && <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />}
                        </span>
                      </button>

                      <p className="text-[9px] text-gray-400 text-center font-body italic">
                        By submitting this form, you agree to our privacy policy and terms of service.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
