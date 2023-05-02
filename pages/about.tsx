import Head from 'next/head';
import { useState } from 'react';

export default function About() {
    const [id, setId] = useState(null);
    const [text, setText] = useState(null);
    const URL1 = "https://api.adviceslip.com/advice";

    // async function listeAdvice() { 
        
    // }
    const listeAdvice = async () => {
        const res = await fetch(URL1);
        const resAdvice = await res.json();
        
        // console.log('the advice id : ' + resAdvice.slip.id + ' and his Advice for to day : ' + resAdvice.slip.advice);

        setId(resAdvice?.slip?.id  || "No Advice for you :(");
        setText(resAdvice?.slip?.advice  || "No Advice for you :(");
        
    }
    
    

    // listeAdvice(); // we use it in onClick button

    //----------------------______________________---------------------------------

    return (
        <>
            <Head>
                <title>About : Nextjs</title>
            </Head>
            <div className='section'>
                <a href="/" className='btn-backTo'>Back to home</a>
                <h1 className="text-3xl font-bold text-white">
                    Hello, Next.js!
                </h1>
                <button onClick={listeAdvice} className='btn-goTo'>Get An Advice</button>
                <h3 className="text-xl font-bold text-white">The Id is : {id && id}</h3>
                <h4 className="text-sm font-bold text-white">Advice of the day : { text && text }</h4>
            </div>
        </>
    );
}