import Hero from '../components/Hero'
import CredibilityBar from '../components/CredibilityBar'
import Partners from '../components/Partners'
import Thesis from '../components/Thesis'
import Strategies from '../components/Strategies'
import NewsUpdates from '../components/NewsUpdates'
import BlogTeaser from '../components/BlogTeaser'
import Mandates from '../components/Mandates'
import Cta from '../components/Cta'

function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Global Background with Pattern */}
      <div className="fixed inset-0 -z-10 bg-bg-gray overflow-hidden">
        {/* Super Minimal Subtle Texture */}
        <div className="absolute inset-0 opacity-5"
             style={{
               backgroundImage: 'radial-gradient(#0B192C 0.5px, transparent 0.5px)'
             }}
        />
        {/* Super Minimal Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-navy/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-navy/4 rounded-full blur-3xl translate-x-1/2 translate-y-1/3" />
      </div>

      <Hero />

      <CredibilityBar />

      <Partners />

      <Thesis />
      
      <Strategies />

      <BlogTeaser />
      
      <Mandates />

      <NewsUpdates />
      <Cta
        badge="Private Consultation"
        title="Discuss Your Mandate"
        description="Speak with our team about institutional allocations, private wealth priorities, or Sharia-compliant investment structuring."
        buttonText="Request Consultation"
        subject="Consultation Request"
        bodyPrefix="I would like to discuss an investment mandate:"
        showInput={false}
      />
    </main>
  )
}

export default Home
