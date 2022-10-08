import React from 'react';
import Link from "next/link";

const About = () => {
  return (
    <div className={'bg-[#1F2028] text-white min-h-screen'}>
      <div className={'max-w-screen-2xl mx-auto'}>
        <div className={'p-4'}>
          <Link href={'/'} passHref>
            <a>&#8592; Home</a>
          </Link>
        </div>
        <div className={'max-w-xl mx-auto py-12 lg:py-20 flex flex-col gap-6 px-4'}>
          <p className={'text-xl'}>SEM V - Machine Learning Mini Project</p>
          <p className={'text-lg'}>Classification of Disaster related Tweets from Social Media</p>
          <p className={'leading-7 text-justify text-[#A9ADC1]'}>At the time of a disaster, many people ask for help through social media. They make tweets on Twitter asking for immediate rescue. Extraction of raw data from social media like Twitter based on a few parameters like disaster type, location, and disaster-related hashtags. The tweets extracted have noise -  unwanted data which needs to be filtered out. Our models would classify disaster-related tweets. These classified tweets can then be used to identify those people who need help and using this information higher authorities can take quick actions.</p>
          <div className={'flex flex-col gap-1 text-[#A9ADC1]'}>
            <p className={'text-lg text-white'}>Our Team - TE COMPS A</p>
            <p>Meta Hitesh Lukesh</p>
            <p>Vaibhav Deore</p>
            <p>Manish Maruti Mate</p>
            <p>Albie John Prasad</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;