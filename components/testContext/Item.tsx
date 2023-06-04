import React, {useContext} from 'react';
import { ProductContext } from '@/pages';

export default function Item() {

    const res = useContext(ProductContext);

    return (
        <div>
            {/* <ProductContext.Consumer> // this methode is Old one like Redux
                {
                    (data) => <h1 className=" text-green-800 ">{data}</h1>
                }
            </ProductContext.Consumer> */}
            <h1 className=" text-green-800 ">UseContext : {res}</h1>
        </div>
    ); 
}