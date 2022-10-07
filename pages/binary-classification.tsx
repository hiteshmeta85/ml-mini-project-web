import {Tweet} from "../types";
import {GetServerSideProps, NextPage} from "next";
import TweetCard from "../components/Cards/TweetCard";
import axios from "axios";
import React from "react";

interface Props {
  data: Tweet[] | []
  batchId: number | null
}

const BinaryClassification: NextPage<Props> = ({data, batchId}) => {

  return (
    <div className={'bg-[#1F2028] text-white min-h-screen'}>
      <div className={'max-w-screen-2xl mx-auto pb-8'}>
        <p className={'p-4 text-center'}>Binary Classification</p>
        <div className={'p-4 flex justify-center flex-col gap-8'}>
          <div>
            <p className={'pb-4 text-center'}>Disastrous Tweets</p>
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'}>
              {data.filter((item)=> item.prediction !== 0).map((item, index) => {
                return (
                  <TweetCard key={index} username={item.username} date={item.date} link={item.link} tweet={item.tweet}/>
                )
              })}
            </div>
          </div>

          <div>
            <p className={'pb-4 text-center'}>Non-Disastrous Tweets</p>
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'}>
              {data.filter((item)=> item.prediction !== 1).map((item, index) => {
                return (
                  <TweetCard key={index} username={item.username} date={item.date} link={item.link} tweet={item.tweet}/>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BinaryClassification;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {query: {batchId}} = context
  let data = []

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/v0/api/predict/${batchId}`)
    if (res.data) {
      data = res.data.data.twitterData
    }
  } catch (e) {
    console.log(e)
  }

  return {
    props: {
      data
    }
  }
}