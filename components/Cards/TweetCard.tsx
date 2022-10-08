import React from "react";

interface Props {
  username: string
  date: string
  tweet: string
  link: string
}

const TweetCard = (props: Props) => {
  const {username, date, tweet, link} = props

  return (
    <div className={'border border-2 border-transparent hover:border-white cursor-pointer p-4 bg-[#2D3039] rounded-lg transition-all duration-200'}>
      <div className={'flex justify-between'}>
        <p>@{username}</p>
        <p>{date}</p>
      </div>
      <p className={'mt-3 text-[#A9ADC0]'}>{tweet}</p>
    </div>
  )
}

export default TweetCard