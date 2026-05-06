import React from "react";
import CustomCursor from "./component/CustomCursor";
import Navbar from "./component/Navbar";
import ParticalBackground from "./component/ParticalBackground";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
import Testimonial from "./pages/Testimonial";
import IntroAnimation from "./component/IntroAnimation"


export default function App() {
  const [introDone, setIntroDone] = React.useState(false)
  return (

    <>
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}
      {introDone && (
        <div className="relative gradient text-white">
          <CustomCursor />
          {/* <ParticalBackground /> */}

          <Navbar />
          <Home />
          <About />
          <Skill />
          <Project />
          <Experience />
          <Testimonial />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  )
}