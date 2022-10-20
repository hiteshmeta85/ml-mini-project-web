import React from 'react';
import {BsGlobe} from "react-icons/bs";
import {AiOutlineFieldBinary} from "react-icons/ai";
import {MdOutlineWebAsset, MdStorage} from "react-icons/md";
import Link from "next/link";
import BertFlow from "../public/bert-flow.png"
import Image from "next/image";

interface Props {
  icon: any
  title: string
  description: string
}

const Card = (props: Props) => {
  const {icon, title, description} = props

  return (
    <div className={'border border-2 border-transparent hover:border-white cursor-pointer p-6 md:p-8 bg-[#2D3039] rounded-lg transition-all duration-200 hover:scale-105 flex flex-col gap-4'}>
      <p>{icon}</p>
      <p className={'text-lg'}>{title}</p>
      <p className={'text-[#A9ADC0] text-lg'}>{description}</p>
    </div>
  )
}

const Methodology = () => {
  return (
    <div className={'bg-[#1F2028] text-white'}>
      <div className={'max-w-screen-2xl relative mx-auto'}>
        <div className={'text-right px-8 py-4 absolute top-0 right-0 z-10'}>
          <Link href={'/'} passHref>
            <a>&#8592; Home</a>
          </Link>
        </div>
        <div className={'min-h-screen flex justify-center items-center flex-col px-4 lg:px-8 py-8'}>
          <p className={'text-center my-4 text-xl'}>Methodology</p>
          <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'}>
            <Card icon={<BsGlobe size={'2rem'}/>} title={'Web Scrapping'} description={'Twint is an advanced Twitter scraping tool written in Python that allows for scraping Tweets from Twitter profiles without using Twitter\'s API'}/>
            <Card icon={<AiOutlineFieldBinary size={'2rem'}/>} title={'Binary Classification'} description={'BERT is a very good pre-trained language model which helps machines learn excellent representations of text wrt context in many natural language tasks'}/>
            <Card icon={<MdStorage size={'2rem'}/>} title={'Database'} description={'SQLite is an in-process library that implements a self-contained, serverless, zero-configuration, transactional SQL database engine.'}/>
            <Card icon={<MdOutlineWebAsset size={'2rem'}/>} title={'Web Application'} description={'Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites.'}/>
          </div>
        </div>
        <div className={'pb-32 mx-auto px-12'}>
          <p className={'text-center text-xl mb-4'}>BERT for Binary Text Classification</p>
          <Image src={BertFlow} alt={'Bert Flow Image'}/>
        </div>
      </div>
    </div>
  );
};

export default Methodology;