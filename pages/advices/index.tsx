import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import style from '@/styles/Home.module.css';

const URLa = "https://api.adviceslip.com/advice?_limit=10";



export async function getStaticProps() {
    const resAdvice = await fetch(URLa);
    const data = await resAdvice.json();

    return {
       props : {
            advice : data,
       } 
    }
    
}





export default function Advices(props) {
    const [text, setText] = useState(null);
    const [id, setId] = useState(null);
    const fetchdata = async () => {
        
    
        const resAdvice = await fetch(URLa);
        const data = await resAdvice.json();
    
        setText(data.slip.advice || 'No Advice Existe !');
        setId(data.slip.id || 'No id existe !');

        // let newArray : any[] = [];
        // let randomIndex = Math.floor(Math.random() * data.slip.length);
        // let resArray = newArray.push(data[randomIndex]);


        // let newArray = [];

        // test.forEach((data) => {
        //     newArray.push(data);
        // });

        
        // const Arr : any[] = [];
        // Arr.push(data);
        console.log('The Advice array is :', );
    }

    const handleAdvice = async () => {
        fetchdata();
    }
    // Returns
    return (
        <>
            <Head>
                <title>Advice Page : Nextjs</title>
            </Head>
            <div className="section">
                <h1 className="titlePage">Show The a random Advices :</h1>
                <button className={style.btnAdvice} onClick={handleAdvice}>Get Advice</button>
                <Link href={`/advice/${id && id}`} className={style.textAdvice}>{text && text}</Link>
            </div>
            
        </>
    );
}