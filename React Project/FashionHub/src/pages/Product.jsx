import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { HiOutlineInboxStack } from "react-icons/hi2";
// import { GoArrowRight } from "react-icons/go";


const Product = () => {
    return (
        <div>
            <div>
                <h1 className='text-gray-700 text-2xl md:text-4xl mt-14 bg-pink-50 h-[60px] p-3 md:h-[130px] flex items-center px-3 md:px-20' >Product Style Two</h1>
            </div>
            <div className='grid grid-cols-4 mt-24  px-20 justify-evenly  lg:max-xl:grid-cols-3 md:max-lg:grid-cols-2 sm:max-md:grid-cols-1 '>
                <div className='box  w-32 vsm:w-40 lmd:w-52 text-center relative  mx-auto md:mx-7 my-4'>
                    <div className='absolute pop'>
                        <CiHeart className='size-10 mx-2 border-2 rounded-full p-2 hover:bg-black hover:text-white mt-3' />
                        <FaRegEye className='size-10 mx-2 border-2 rounded-full p-2 hover:bg-black hover:text-white mt-3' />
                    </div>
                    <div>
                        <img className='md:max-w-72' src="https://emart.wpthemedemos.com/women-fashion/wp-content/uploads/sites/5/2023/01/Casual-T-shirts-beige.webp" alt="" />
                    </div>
                    <div>
                        <h1 className='text-xl font-medium text-gray-800  '>Round Neck T-shirt</h1>
                        <h3 className='text-lg text-gray-800 mt-2'>$80.00</h3>
                    </div>
                    <div className='pop'>
                        <div className='flex items-center   absolute left-20 p-1 duration-300 hover:bg-black hover:text-white top-80'>
                            <HiOutlineInboxStack className='mr-2' />
                            <h2> select option</h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Product