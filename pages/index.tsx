import type {NextPage} from 'next'
import Link from "next/link";
import {disasters} from "../constants/disasters";

interface Props {
  title: string,
  value: string
}

const Card = (props: Props) => {
  const {title, value} = props

  return (
    <div className={'border border-2 border-transparent hover:border-white cursor-pointer text-center text-xl p-12 bg-[#2D3039] rounded-lg transition-all duration-200 hover:scale-105'}>
      <p>{title}</p>
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <div className={'min-h-screen bg-[#1F2028] text-white relative'}>
      <div className={'max-w-screen-2xl'}>
        <div className={'text-right p-4 absolute top-0 right-0 z-10'}>
          <Link href={'/methodology'} passHref>
            <a>Methodology</a>
          </Link>
        </div>
        <div className={'h-screen text-center'}>
          <div className={'text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}>
            <div className={'mb-4'}>Select Disaster Type</div>
            <div className={'grid grid-cols-3 gap-4'}>
              {disasters.map((item, index)=> {
                return (
                  <Card key={index} title={item.title} value={item.value}/>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
