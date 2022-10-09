import type {NextPage} from 'next'
import Link from "next/link";
import {disasters} from "../constants/disasters";
import Router from "next/router";

interface Props {
  title: string
  value: string
}

const Card = (props: Props) => {
  const {title, value} = props

  return (
    <div onClick={() => Router.push({pathname: '/web-scraping', query: {hashtags: [`${value}`, 'rescue', 'disaster']}})}
         className={'border border-2 border-transparent hover:border-white cursor-pointer text-center text-xl px-6 py-8 md:p-12 bg-[#2D3039] rounded-lg transition-all duration-200 hover:scale-105'}>
      <p>{title}</p>
    </div>
  )
}

const Home: NextPage = () => {

  return (
    <div className={'bg-[#1F2028] text-white'}>
      <div className={'max-w-screen-2xl relative mx-auto'}>
        <div className={'flex gap-4 text-right p-4 absolute top-0 right-0 z-10'}>
          <Link href={'/custom-hashtags'} passHref>
            <a>Custom Hashtags &#8594;</a>
          </Link>
          <Link href={'/about'} passHref>
            <a>About &#8594;</a>
          </Link>
          <Link href={'/methodology'} passHref>
            <a>Methodology &#8594;</a>
          </Link>
        </div>
        <div className={'min-h-screen flex items-center justify-center flex-col text-center py-16 lg:py-0 text-xl'}>
          <div className={'mb-4'}>Select Disaster Type</div>
          <div className={'grid grid-cols-2 md:grid-cols-3 gap-4 mx-4'}>
            {disasters.map((item, index) => {
              return (
                <Card key={index} title={item.title} value={item.value}/>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
