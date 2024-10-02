"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu"
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import travelList from "../assets/travelList.png"
import Todo from "../assets/ToDo-app.png"
export function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    (<div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      
    </div>)
  );
}

function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    (<div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} item="Home">
        <a href="/" className="hover-class text-gray-300">Home</a>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
          <a href="#skills" className="hover-class text-gray-300">Skills</a>
          <a href="#achievements" className="hover-class text-gray-300">Achievements</a> 
            
          </div>
         
          
        </MenuItem>
        

        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 sm:gap-4 md:gap-10  p-4">
            <ProductItem
              title="Code-Lab"
              href="https://code-lab-wizard.netlify.app/"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before." />
            <ProductItem
              title="Travel-list "
              href="https://travel-list-dipanshu.netlify.app/"
              src={travelList}
              description="Lets Pack your essential things with us " />
            <ProductItem
              title="ToDo App"
              href="https://todo-app-dipanshu.netlify.app/"
              src={Todo}
              description="A very basic ToDo App built with React and Tailwind CSS,just to practice about Redux" />
            {/* <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI" /> */}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
        <div className="flex flex-col space-y-4 text-sm">
          <a href="#contactLinks" className="hover-class text-gray-300">Social Links</a>
          <a href="#contactForm" className="hover-class text-gray-300">Contact me</a>
          </div>
         
            

          
        </MenuItem>
      </Menu>
    </div>)
  );
}
