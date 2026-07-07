import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Topper from './components/Topper'
import Header from './components/Header'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Firm from './pages/Firm'
import WealthSolutions from './pages/WealthSolutions'
import Institutional from './pages/Institutional'
import PrivateMarkets from './pages/PrivateMarkets'
import Contact from './pages/Contact'
import Fqrs from './pages/Fqrs'
import Footer from './components/Footer'
import { useScrollState } from './hooks/usePastHero'

function App() {
  const { isPastHero, showTopper } = useScrollState()

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Topper show={showTopper} />
        <Header embedded isPastHero={isPastHero} showTopper={showTopper} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/the-firm" element={<Firm />} />
          <Route path="/wealth-solutions" element={<WealthSolutions />} />
          <Route path="/institutional" element={<Institutional />} />
          <Route path="/private-markets" element={<PrivateMarkets />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fqrs" element={<Fqrs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
