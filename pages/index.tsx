import React, { useState } from "react";
import Head from 'next/head';
import style from '@/styles/Home.module.css';
import axios from 'axios';

export default function HomePage() {

  const URLAdvice = 'https://api.adviceslip.com/advice';
  
  const [text, setText] = useState(null);

  // get data with fetch

  // const URLAdviceasync = async () => {
  //   const resultAdvice = await fetch(URLAdvice);
  //   const res = await resultAdvice.json();
  //   // console.log("Advice random is : ", res.slip.advice)

  //   setText(res?.slip?.advice || 'No Advice for YOU :(');
  // }

  // Get data with axios

  const AxiosAdviceAsync = async () => {
    const resultAxiosData = await axios.get(URLAdvice);
    const res = await resultAxiosData.data;
    

    // console.log(res);
    setText(res?.slip?.advice || 'No Advice for YOU !!!');
  }

  // Post data

  const AxiosPostData = async () => {
    try {
      const url = 'https://jsonplaceholder.typicode.com/posts';
      const data = { userId: '2', title: 'Mehdi', body: 'Post2@gmail.com' };

      const response = await axios.post(url, data);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  // URLAdviceasync();
  // AxiosAdviceAsync();

  AxiosPostData();
  return ( 
    <>
      <Head>
        <title>Home Page : Nextjs</title>
      </Head>
      <div className="section">
          <h1 className="titlePage">Show The a random Advices :</h1>
          <button className={style.btnAdvice} onClick={AxiosAdviceAsync}>Random Advice</button>
          <p className={style.textAdvice}>The Random Advice is : {text && text}</p>
      </div>
    </>
  );
}
