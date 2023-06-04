import * as React from 'react';
import { useState, useEffect } from 'react';
import Style from '@/styles/Home.module.css';
import axios from 'axios';

export default function TestHooksRequest() {

    

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        } 
    }

    // https://jsonplaceholder.typicode.com/posts

    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
    //         setPosts(res.data);
    //     }).catch((err) => {
    //         console.log(err);
    //     })

    // }, [])



    //------------------------------------------
    const [post, setPost] = useState<Record<string, any>>({});
    const [id, setId] = useState(0);

    // interface Person {
    //     id: string;
    //     title: number;
    //   }
    // type Post = {
    //     id?: number;
    //     title?: string;
    // };

    // const obj: Post = {
    //     id: 1,
    //     title: ''
    // };

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
            setPost(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [id]);

    const handleChange = (e) => {
        setId(e.target.value);
    }

    return (
        <div className='section_two'>
            <button className={Style.btnAdvice} onClick={handleIncrement}>Plus</button>
            <p className={Style.textAdvice}>{count}</p>
            <button className={Style.btnAdvice} onClick={handleDecrement}>Moin</button>

            {/* <div className="posts">
                {posts.map(post => 
                    <h3 className={Style.textAdvice} key={post.id}>{post.id} - {post.title}</h3>
                )}
            </div> */}

            <input type="text" onChange={handleChange} />
            <p className={Style.textAdvice}>{post.id} - {post.title}</p>
        </div>
    );
}
