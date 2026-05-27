import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';

import SEO from './seo/SEO';
import { cityConfig } from './seo/cityConfig';

function App() {

  const hostname = window.location.hostname;

  let city = 'karawang';

  if (hostname.includes('tangerang')) {
    city = 'tangerang';
  }

  else if (
    hostname.includes('privakom.co.id') &&
    !hostname.includes('karawang') &&
    !hostname.includes('tangerang')
  ) {
    city = 'jakarta';
  }

  const seo = cityConfig[city];

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
      />

      <Navbar />
      <Hero city={seo.city} />
      <Features />
      <About />
      <Courses />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
