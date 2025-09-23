import Accordion from './components/Accordion';
import CaseStudies from './components/CaseStudies';
import Companies from './components/Companies';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import FreeProp from './components/FreeProp';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className=" bg-white  max-w-screen-xl mx-auto ">
      <Navbar />
      <Hero />
      <Companies />
      <Services />
      <FreeProp />
      <CaseStudies />
      <Accordion />
      <Team />
      <Testimonials />
      <ContactUs />
      <Footer/>
    </div>
  );
}

export default App;