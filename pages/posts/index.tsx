import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const URLPosts = "https://jsonplaceholder.typicode.com/posts?_limit=10";

export async function getStaticProps() {
    const res = await fetch(URLPosts);
    const data = await res.json();
    // console.log("the posts is :", data)
    return {
        props: {
            posts : data
        }
    }
}

export default function Posts(props) {
    return (
        <>
            
            <Head>
                <title>Posts : Nextjs</title>
            </Head>
            <div className='section'>
                <a href="/" className='btn-backTo'>Back to home</a>
                <h1 className="text-3xl font-bold text-white mb-8">
                    All Posts ':)'
                </h1>
                {props.posts.map( item => (
                    <div key={item.id}>
                        <h2 className='text-base font-light text-white text-left'>
                            The Title of the post is : 
                            <Link href={`/posts/${item.id}`} className="font-medium text-lime-600">{item.title}</Link> 
                        </h2>
                    </div>
                ))}
            </div>
            
            {/* {console.log(props)} */}
            
        </>
    );
}