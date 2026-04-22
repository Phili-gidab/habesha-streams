import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentShowcase from './components/ContentShowcase';
import Features from './components/Features';
import Pricing from './components/Pricing';
import SocialProof from './components/SocialProof';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ContentShowcase />
      <Features />
      <Pricing />
      <SocialProof />
      <DownloadCTA />
      <Footer />
    </>
  );
};

export default App;
