"use client";
import React from "react";

import trophyImage from '../assets/trophyImage.png';
import GSSoC_2024 from "../assets/Dipanshu_Tale_Badge_Campus_Ambassador_GSSoC2024-Extd.png"
import { Timeline } from "../components/ui/timeline";
import hackbyte2 from "../assets/hackbyte-img.png"
const content = [
  {
    title: "Campus Ambassador GSSoC_2024",
    description:
     "Selected as a Campus Ambassador for GSSoC 2024, responsible for promoting open-source initiatives.",
      date:" Sept-2024 -- Present ",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src={GSSoC_2024}
          width={30}
          height={20}
          className="hidden md:flex h-96 w-96 object-cover"
          alt="GSSOC_2024 " />
      </div>
    ),
  },
  {
    title: "SIH 2024 Runner Up",
    description:
      "We the team SHEILD was First Runner Up in internal college Hackathon in SIH_2024 at Jabalpur Engineering College,Jabalpur. ",
      date:" Sept-2024 ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={trophyImage}
          width={420}
          height={420}
          className=" hidden md:flex h-96 w-96 object-cover"
          alt="trophy-image " />
      </div>
    ),
  },
  {
    title: "Participated in Hackathon at IIITDM Jabalpur ",
    description:
      "We the team KamiKaze participated in IIITDM Jabalpur Annual hackathon HackByte2.0.",
    date:" March-2024 ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={hackbyte2}
          width={420}
          height={420}
          className=" hidden md:flex h-96 w-100 object-contain"
          alt="trophy-image " />
      </div>
    ),
  },
];
export default function Achievements() {
  return (
    (<div className="w-full">
      <Timeline data={content}/>    
    </div>)
  );
}
