import Head from 'next/head';
import Link from 'next/link';
import style from '@/styles/Home.module.css';

const URLa = "https://api.adviceslip.com/advice";

export async function getStaticPaths() {

    const resAdvice = await fetch(URLa);
    const data = await resAdvice.json();

    
    const Arr : string[] = [];
    Arr.push(data.slip.id);
    // const paths = () {
    //    { params: [id: string]: string } 
    // }
    

    return {
        paths:[],
        fallback:false
    }
}


export async function getStaticProps(context) {
    const resAdviceslug = await fetch(`https://api.adviceslip.com/advice/${context.params.advice}`);
    const dataslug = await resAdviceslug.json();

    return {
        props:{
            advice : dataslug
        }
    }
}

const Advice = (props) => {
    return (
        <>
            {/* {console.log(props)}
            {console.log(Array(224).fill(null))} */}
            <Head>
                <title>Advice Page : Nextjs</title>
            </Head>
            <div className="section">
                <Link href="/" className="btn-backTo">Back to home</Link>
                <h1 className="titlePage">Show The a random Advices :</h1>
                {/* <p className={style.textAdvice}>{props.advice.slip.advice}</p> */}
            </div>
            
        </>
    );
}

export default Advice;