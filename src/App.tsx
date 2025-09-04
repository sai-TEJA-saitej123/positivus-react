import Accordion from './components/Accordion';
import Companies from './components/Companies';
import FreeProp from './components/FreeProp';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className=" bg-white mx-14 ">
      <Navbar/> 
      <Hero/>
      <Companies/>
      <Services/>
      <FreeProp/>
      <Testimonials/>
      <Accordion/>
      <Team/>
    </div>
  );
}

export default App;