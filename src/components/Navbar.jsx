import React from 'react'
import { IoCart } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const data = useSelector((state) => state.cart.carts);
    console.log(data);
    console.log('persist',useSelector((state) => state));

    return (
        <div className='flex items-center mx-auto h-16 bg-violet-400'>
            <div className="flex justify-between w-full 2xl:container mx-auto">
                <div className='text-xl'><Link to='/'>Yash</Link></div>
                <div className='flex items-center gap-4'>
                    <div>
                        <ul className='list-none flex gap-4'>
                            <li><Link to='/'>Home</Link></li>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    {/* <div> */}
                        <Link to='/cart' className='flex'>
                            <IoCart className='text-lg' size={25} />
                            <sup className='rounded-full bg-violet-600 text-white w-5 h-5 text-sm text-center'>{data.length}</sup>
                        </Link>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar