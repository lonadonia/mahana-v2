import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import FrameworkSection from './components/FrameworkSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import ComparisonSection from './components/ComparisonSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SectionWrapper from './components/SectionWrapper';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <SectionWrapper><ProblemSection /></SectionWrapper>
        <SectionWrapper><ServicesSection /></SectionWrapper>
        <SectionWrapper><FrameworkSection /></SectionWrapper>
        <SectionWrapper><ComparisonSection /></SectionWrapper>
        <SectionWrapper><StatsSection /></SectionWrapper>
        <SectionWrapper><ContactSection /></SectionWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default App;