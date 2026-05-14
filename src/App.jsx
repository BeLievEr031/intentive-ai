import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import VideoSection from './components/DemoVideo'
import Investors from './components/Investors'
import RfpFeature from './components/RfpFeature'
import KnowledgeHub from './components/KnowledgeHub'
import ContentManager from './components/ContentManager'
import AgentsHub from './components/AgentsHub'
import TestimonialSlider from './components/Testimonial'
import Integrations from './components/Integrations'
import Benefits from './components/Benefits'
import FeatureCards from './components/FeatureCards'
import Results from './components/Results'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <VideoSection />
      <Investors />
      <RfpFeature />
      <KnowledgeHub />
      <ContentManager />
      <AgentsHub />
      <TestimonialSlider />
      <Integrations />
      <Benefits />
      <FeatureCards />
      <Results />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App