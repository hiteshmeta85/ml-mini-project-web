import React from 'react';
import TweetCard from "../components/Cards/TweetCard";
import axios from "axios";
import {GetServerSideProps, NextPage} from "next";
import {Tweet} from "../types";
import Router from "next/router";

interface Props {
  data: Tweet[] | []
  batchId: number | null
}

const WebScraping: NextPage<Props> = ({data, batchId}) => {

  return (
    <div className={'bg-[#1F2028] text-white min-h-screen'}>
      <div className={'max-w-screen-2xl mx-auto pb-8'}>
        <p onClick={() => Router.push({pathname: '/binary-classification', query: {batchId: batchId}})}
          className={'p-4 text-right'}>Binary Classification &#8594;</p>
        <div className={'px-4 flex justify-center flex-col gap-4'}>
          <p className={'self-center'}>Raw Data</p>
          <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'}>
            {data.map((item, index) => {
              return (
                <TweetCard key={index} username={item.username} date={item.date} link={item.link} tweet={item.tweet}/>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebScraping;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {query: {hashtag}} = context
  let data = []
  let batchId = null

  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/v0/api/twitter`, {hashtags: [`${hashtag}`]})
    if (res.data) {
      data = res.data.data.twitterData
      batchId = res.data.data.batch
    }
  } catch (e) {
    console.log(e)
  }

  return {
    props: {
      data,
      batchId
    }
  }
}

