import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';

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

    // test array and object
    const testArray = async () => {
        //ARRAY
        var arr = ["one", "two", 3];
        const res = arr.indexOf("one");
        console.log(res);
        arr.push("four");
        arr.push("five");
        // arr.sort();
        console.log(arr);
        arr.pop();
        
        console.log(arr);

        const lenght = arr.length;
        console.log("the lenght is :", lenght);

        //OBJECT
        var obj = {"firstname": "Mehdi", "lastname" : "Meljoum"};
        const ob = obj.firstname;
        console.log(ob);

        
        // obj.middlename = "Vikings"; // add value in object
        // obj["country"] = "Morocco"; // same add value in object
        // console.log(obj);

        // delete obj.middlename; // delete value of object
        // console.log(obj);

        const objlength = Object.keys(obj).length;
        console.log("the lenght of object : ", objlength)

        // check key exists in object or not
        const existe = obj.hasOwnProperty("firstname");
        console.log(existe); // return true
        const notexiste = obj.hasOwnProperty("notexiste");
        console.log(notexiste); // return false

        /*-----------------------------------*/
        //Array
        var arrr = ["one", "two", "three", "four"];
        //get JSON string from array.
        var jsonStrofArray = JSON.stringify(arrr); // returns json string of "["one","two","three","four"]"
        console.log(jsonStrofArray);
        // Recover array from JSON string
        var arrFromJSONString = JSON.parse(jsonStrofArray); // Returns ["one", "two", "three", "four"]
        console.log(arrFromJSONString);

        //Objects
        var obj = {firstname:"hiral", lastname: "patel"};
        //get json string from object
        var jsonStrofObj = JSON.stringify(obj); // returns json string of "{"firstname":"hiral","lastname":"patel"}"
        console.log(jsonStrofObj);
        // Recover object from JSON string
        var objFromJSONString = JSON.parse(jsonStrofObj);
        console.log(objFromJSONString);
    }
    testArray();
    function func() 
        {
            let x = 10; 
            let y = 20;
            if(x === 10)
            {
                let y = 30; 
        
                console.log(x); //Output 10
                console.log(y); //Output 30
            }
            
            console.log(x); // Output 10
            console.log(y); // Output 20  ==> if i don't declared in first ’undefined'
        }
        
        
        func();
    //----------------------______________________---------------------------------

    return (
        <>
            <Head>
                <title>About : Nextjs</title>
            </Head>
            <div className='section'>
                <Link href="/" className='btn-backTo'>Back to home</Link>
                <h1 className="text-3xl font-bold text-white">
                    About !!!
                </h1>
                <button onClick={listeAdvice} className='btn-goTo'>Get An Advice</button>
                <h3 className="text-xl font-bold text-white">The Id is : {id && id}</h3>
                <h4 className="text-sm font-bold text-white">Advice of the day : { text && text }</h4>
            </div>
        </>
    );
}