import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/image.png';
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';
import Contact from "../pages/Contact"
import Skills from "./Skills"
import Projects from '../pages/Projects';
import ContactForm from "../pages/ContactForm"
import Achievements from '../pages/Achievements';
const Main = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <BackgroundBeamsWithCollision>
        <div className="relative flex flex-col-reverse sm:flex-row items-center h-[80%] md:h-screen w-full">
         
          <div className="px-4 pt-0 sm:px-16 sm:pr-8 sm:pt-16 lg:pt-8 xl:pt-4 md:pb-30">
            <h2 className="text-3xl relative z-20 md:text-5xl lg:text-6xl xl:text-7xl font-bold text-left sm:text-left text-black dark:text-white font-sans tracking-tight mt-4 sm:mt-16">
              Hi, I&apos;m{" "}
              <div className="relative mx-auto sm:mx-0 inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                  <span>DIPANSHU TALE</span>
                </div>
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                  <span>DIPANSHU TALE</span>
                </div>
              </div>
            </h2>
            <div>
              <h4 className="text-sm relative z-20 md:text-xl lg:text-2xl font-bold text-left text-black dark:text-white font-sans tracking-tight mt-2 sm:mt-0">
                I develop 3D visuals, User Interface, and <br /> Web Applications
              </h4>
            </div>
            <div className="flex  ">
            <div className="pt-8 px-4 sm:px-5 md:px-10 ">
              <a href="#contactLinks">
                <button className="px-6 py-3 bg-gradient-to-r  from-purple-500 via-violet-500 to-pink-500 text-white font-bold text-lg rounded-full shadow-lg transition-transform transform hover:scale-105 flex items-center">
                  Say Hello
                  <svg
                    className="ml-3 w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </button>
              </a>
            </div>
            <div className="pt-8">
              <a href="https://drive.google.com/file/d/1JBzew_NlKSCQE7-r-YazTcT-ip-DJMeY/view?usp=drivesdk">
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-white font-bold text-lg rounded-full shadow-lg transition-transform transform hover:scale-105 flex items-center">
                  Resume
                  <svg
                    className="ml-3 w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </button>
              </a>
            </div>
            </div>
          
          </div>
          
          {/* Image section */}
          <div className="relative flex items-center justify-center w-full sm:w-auto mt-4 sm:mt-0 sm:absolute sm:right-10">
            <div className="relative h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px] flex items-center sm:ml-10">
              <div
                className="absolute inset-0"
                style={{
                  borderRadius: '35% 65% 77% 23% / 32%',
                  background: 'linear-gradient(to bottom right, #ff7e5f, #feb47b)',
                  height: '100%',
                  width: '100%',
                }}
              >
                <img
                  src={image}
                  alt="profile"
                  className="absolute w-2 inset-6 m-auto mb-6 rounded-[inherit] border-8 border-transparent"
                  style={{ height: '150%', width: '150%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
      
      <section id="skills">
      <Skills/>
      </section>
      {/* <section id="projects">
      <Projects/>
      </section> */}
      <section id="achievements">
      <Achievements/>
        </section>
      <section id="contactForm">
      <ContactForm/>
      </section>
      <section id="contactLinks">
      <Contact/>
        </section>
       
    </>
  );
};

export default Main;
