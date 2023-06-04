import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';

// export async function getServerSideProps(context) {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.article}`); // .article it's from name of pages [article].tsx
//     const data = await res.json();

//     return {
//         props: {
//             posts: data
//         }
//     }
 
// }

// getServerSideProps she's rendering plusieur request or we use both function getStaticPath and getStaticProps

export async function getStaticPaths() {
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20");
    // const data = await res.json(); 

    const axiosData = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=20");
    const data = await axiosData.data;

    const paths = data.map(d => {   // we maping on the Id's
        return {
            params: {article: `${d.id}`}
        }
    })

    return {
        paths : paths,
        fallback: false, // mention for return a page error if page doesn't existe 
    }
}

export async function getStaticProps(context) {
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.article}`); // .article it's from name of pages [article].tsx
    // const data = await res.json();

    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${context.params.article}`);
    const data = await res.data;

    return {
        props: {
            posts: data
        }
    }
 
}

export default function Article(props) {
    return (
        <>
            {console.log(props)}
            <Head>
                <title>Posts : Nextjs</title>
            </Head>
            <div className="section">
                <Link href="/" className="btn-backTo">Back to home</Link>
                <h1 className="text-3xl font-bold text-white mb-8">
                    My Article
                </h1>
                <div>
                    <h2 className="text-base font-medium text-white text-left mb-2">{props.posts.title}</h2><br/>
                    <p className="text-sm font-light text-white text-left">{props.posts.body}</p>
                </div>
            </div>
           
        </>
    );
}