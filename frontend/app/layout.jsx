import "@styles/globals.css";

import Navbar from "@components/Navbar";
import Hero from "@components/Hero";
import About from "@components/About";
import Experience from "@components/Experience";
import Tech from "@components/Tech";
import Works from "@components/Works";
import Feedbacks from "@components/Feedbacks";
import Contact from "@components/Contact";
import StarsCanvas from "@components/canvas/Stars";

export const metadata = {
  title: "Profile | Prafull Sakharkar",
  description: "My Profile Page",
};

const RootLayout = () => (
  <html lang='en'>
    <body>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        {/* <Works /> */}
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </body>
  </html>
);

export default RootLayout;
