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
    <div className=" bg-white  w-full max-w-[1366px] mx-auto  min-h-dvh mt-[50px] flex flex-col justify-between">
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