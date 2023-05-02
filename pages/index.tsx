import React, { useState } from "react";
import Head from 'next/head';
import style from '@/styles/Home.module.css';

export default function HomePage() {

  const URLAdvice = 'https://api.adviceslip.com/advice';
  
  const [text, setText] = useState(null);
  const URLAdviceasync = async () => {
    const resultAdvice = await fetch(URLAdvice);
    const res = await resultAdvice.json();
    // console.log("Advice random is : ", res.slip.advice)

    setText(res?.slip?.advice || 'No Advice for YOU :(');
  }
  // URLAdviceasync();

  return ( 
    <>
      <Head>
        <title>Home Page : Nextjs</title>
      </Head>
      <div className="section">
          <h1 className="titlePage">Show The a random Advices :</h1>
          <button className={style.btnAdvice} onClick={URLAdviceasync}>Random Advice</button>
          <p className={style.textAdvice}>The Random Advice is : {text && text}</p>
      </div>
    </>
  );
}
