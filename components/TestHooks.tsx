import * as React from 'react';
import { useState, useEffect } from 'react';
import Style from '@/styles/Home.module.css';


export default function TestHooks({x, y}) {

    // const state = {
    //     product: 'Labtop',   // this syntaxe it will be useState
    // }

    const [product, setProduct] = useState('Labtop');

    const handleChange = () => {
        setProduct('Mouse');
    }
    //----------------------------------------------

    const [products, setProducts] = useState(
        [
            {id: 1, name: 'Deel', content: 'This is labtop Deel !!!'},
            {id: 2, name: 'Hp', content: 'This is labtop Hp !!!'},
            {id: 3, name: 'ThinkPad', content: 'This is the best laptop it\'s ThhinkPad !!!'},
            {id: 4, name: 'ThinkPad', content: 'This is the best laptop it\'s ThhinkPad 2 !!!'}
        ]
    );

    // Methode Find();  // The find() method returns the very first matching value from the collection // awal value katl9ah katw9ef

    const findItem = products.find((item) => {
        return item.name === "ThinkPad";
    });
    console.log('Find function =>', findItem);
    //Methode Filter(); // will return all the matched items from an array // katjbed ga3 douk li 3ndhom dik value
    const filterItem = products.filter((item) => {
        return item.name === "ThinkPad";
    });
    console.log('Filter function =>', filterItem);

    // add Item to the array

    const addItem = () => {
        setProducts([...products, {id:5, name: 'Lenovo', content: 'This is Lenovo!'}])
    }

    // change value whene we write in input
    const [inputVal, setInputVal] = useState('');

    const handleInput = (e) => {
        setInputVal(e.target.value);
    }
    // UseEffect
    const [name, setName] = useState('Test')
    useEffect(() => {
        console.log("This is useEffect");  // she rendred when reload page and when update any thing in the page 
    });

    useEffect(() => {
        console.log("This is useEffect called one time when we use []");  // she rendred just for one time in the load 
    }, []);

    useEffect(() => {
        console.log("This is useEffect when name change or the value of input");  // she rendred when reload page and when just the name is updated or the value of input changed  
    }, [name, inputVal]);


    return (
        <div className='section'>
            <button className={Style.btnAdvice} onClick={handleChange}>Change</button>
            <button className={Style.btnAdvice} onClick={addItem}>Add Item</button>
            
            <h1 className='titlePage'>Hooks Page # {product} | {x} {y} </h1>
            <div className={Style.listingProduct}>
                {
                    products.map(product => (
                        <p className={Style.textAdvice} key={product.id}>{product.name} : {product.content}</p>
                    ))
                }
            </div>
            <input className="mt-5 from-orange-500" type="text" onChange={handleInput} />
            <p className={`text-orange-500 ${Style.text}`}>{inputVal}</p>
            
        </div>
    );
}

