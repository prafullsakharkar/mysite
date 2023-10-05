import Hero from "@components/Hero";
import About from "@components/About";
import Experience from "@components/Experience";
import Tech from "@components/Tech";
import Works from "@components/Works";
import Feedbacks from "@components/Feedbacks";
import Contact from "@components/Contact";
import StarsCanvas from "@components/canvas/Stars";

const Home = () => (
    <section className='w-full flex-center flex-col relative z-0'>
        <Hero />
        <About />
        <Experience />
        <Tech />
        {/* <Works /> */}
        {/* <Feedbacks /> */}
        <Contact />
        <StarsCanvas />
    </section>
);

export default Home;