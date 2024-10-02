import React from 'react';
import { Timeline } from './ui/timeline';

const Education = () => {
  const data = [
    {
      title: "2019",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-8">
            Completed 10th from The Foundation of Education,Harda
          </p>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-8">
            Completed 12th from Greenland Higher Secondary School,INDORE
          </p>
        </div>
      ),
    },
    {
      title: "2022 - 2026",
      content: (
        <div>
          <h3 className="text-neutral-800 dark:text-neutral-200  md:text-2xl font-normal  mb-8">
            Pursuing B.Tech from Jabalpur Engineering College, Jabalpur
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200  md:text-l pl-40 font-normal mb-1">Branch : Artificial Intelligence and Data Science</p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full ">
      <Timeline data={data} />
    </div>
  );
};

export default Education;
