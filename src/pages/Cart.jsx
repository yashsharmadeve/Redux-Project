import React, { useState } from 'react'
import Layout from '../components/Layout';
import { useSelector } from 'react-redux';

const Cart = () => {

    // const [data,setData] = useState([]);
    const cart = useSelector((state) => state.cart.carts);
    console.log(cart);

    return (
        <Layout>
            <div className='mt-12 2xl:container mx-auto flex gap-3 flex-col'>
                {
                    Array.from(cart).length > 0 ?
                        Array.from(cart).map((item) =>
                            <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full">
                                <a className='block' href="#">
                                    <img className="rounded-t-lg w-full object-contain bg-white" src={item.image} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-28">{item.title}</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-24 text-ellipsis text-wrap overflow-hidden">{item.description}</p>
                                    <p className='text-white'>{item.qty}</p>
                                </div>
                            </div>
                        )

                        : 'No Product on Cart'
                }
            </div>
        </Layout>
    )
}

export default Cart