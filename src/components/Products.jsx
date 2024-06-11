import axios from './../axios';
import React, { useEffect, useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const Products = () => {

  const [data, setData] = useState([]);

  const getProducts = async () => {
    const api = await axios.get('/products');
    setData(api.data);
    console.log(api.data);
  }
  const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cart.carts);

  useEffect(() => {
    getProducts();
  }, [])

  const handleClick = (e) => {
    // console.log(e);
    dispatch(addToCart(e));
  }

  return (
    <div className='flex flex-wrap gap-4 justify-center mt-10'>
      {
        data.map((item) =>
          <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg h-96 min-w-full object-contain bg-white" src={item.image} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-28">{item.title}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-24 text-ellipsis text-wrap overflow-hidden">{item.description}</p>
              <button onClick={()=>handleClick(item)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add To Cart <IoMdAdd className='ms-2' size={20} />
              </button>
            </div>
          </div>
        )
      }


    </div>
  )
}

export default Products