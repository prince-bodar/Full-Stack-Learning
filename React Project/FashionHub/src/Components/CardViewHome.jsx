import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import card1img1 from "../assets/asset 14.webp"
import card1img2 from "../assets/asset 15.webp"
import card1img3 from "../assets/asset 16.webp"
import card1img4 from "../assets/asset 17.webp"
import card1img5 from "../assets/asset 18.webp"
import card1img6 from "../assets/asset 19.webp"
import card1img7 from "../assets/asset 20.webp"
import card1img8 from "../assets/asset 21.webp"
import card2img1 from "../assets/asset 22.webp"
import card2img2 from "../assets/asset 3.webp"
import card2img3 from "../assets/asset 23.webp"
import card2img4 from "../assets/asset 24.webp"
import card2img5 from "../assets/asset 25.webp"
import card2img6 from "../assets/asset 2.webp"
import card2img7 from "../assets/asset 26.webp"
import card2img8 from "../assets/asset 27.webp"
import card3img1 from "../assets/asset 28.webp"
import card3img2 from "../assets/asset 29.webp"
import card3img3 from "../assets/asset 30.webp"
import card3img4 from "../assets/asset 31.webp"
import card3img5 from "../assets/asset 32.webp"
import card3img6 from "../assets/asset 33.webp"
import card3img7 from "../assets/asset 34.webp"
import card3img8 from "../assets/asset 35.webp"
import card4img1 from "../assets/asset 36.webp"
import card4img2 from "../assets/asset 37.webp"
import card4img3 from "../assets/asset 38.webp"
import card4img4 from "../assets/asset 39.webp"
import card4img5 from "../assets/asset 40.webp"
import card4img6 from "../assets/asset 41.webp"


function CardView() {
    return (
        <div>
            <div>
                <div>
                    <h1 className='text-5xl font-semibold tracking-wide text-gray-800 mt-10 ml-4'>Best selling items</h1>
                </div>
                <div className='flex justify-around mt-10 '>
                    <div className='relative mx-5  grid lg:grid-cols-4 sm:grid-cols-2 justify-center grid-cols-1'>

                        <div className='box sm:mx-10 my-4'>
                            <div className="relative">
                                <img src={card1img1} className="max-w-72  duration-100 ease-in-out hovertransition-all  hover:scale-100" alt="Imagem de perfil" />
                                <img src={card1img2} className="max-w-72 absolute top-0 left-0 z-0 opacity-0 hover:ease-linear hover:duration-700 hover:transition-all hover:scale-100 hover:opacity-100" alt="Nova imagem" />
                            </div>
                            <div className='pop'>
                                <div className='flex absolute top-[300px] mx-12  '>
                                    <CiHeart className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <FaRegEye className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <LuShoppingBag className='size-10 mx-2 border-2 rounded-full bg-white p-2 hover:bg-black hover:text-white mt-3' />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h1 className='text-2xl font-medium text-gray-800  '>Casual t-shirts</h1>
                                <h3 className='text-xl text-gray-800 mt-2'>$70.00 - $110.00</h3>
                            </div>
                        </div>

                        <div className='box sm:mx-10 my-4'>
                            <div className="relative">
                                <img src={card1img3} className="max-w-72  duration-300 ease-in-out transition-all  scale-100" alt="Imagem de perfil" />
                                <img src={card1img4} className="max-w-72 absolute top-0 left-0 z-0 opacity-0 hover:ease-linear hover:duration-700 hover:transition-all hover:scale-100 hover:opacity-100" alt="Nova imagem" />
                            </div>
                            <div className='pop'>
                                <div className='flex absolute top-[300px] mx-12  '>
                                    <CiHeart className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <FaRegEye className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <LuShoppingBag className='size-10 mx-2 border-2 rounded-full bg-white p-2 hover:bg-black hover:text-white mt-3' />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h1 className='text-2xl font-medium text-gray-800  '>Casual t-shirts</h1>
                                <h3 className='text-xl text-gray-800 mt-2'>$70.00 - $110.00</h3>
                            </div>
                        </div>


                        <div className='box sm:mx-10 my-4'>
                            <div className="relative">
                                <img src={card1img5} className="max-w-72  duration-300 ease-in-out transition-all  scale-100" alt="Imagem de perfil" />
                                <img src={card1img6} className="max-w-72 absolute top-0 left-0 z-0 opacity-0 hover:ease-linear hover:duration-700 hover:transition-all hover:scale-100 hover:opacity-100" alt="Nova imagem" />
                            </div>
                            <div className='pop'>
                                <div className='flex absolute top-[300px] mx-12  '>
                                    <CiHeart className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <FaRegEye className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <LuShoppingBag className='size-10 mx-2 border-2 rounded-full bg-white p-2 hover:bg-black hover:text-white mt-3' />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h1 className='text-2xl font-medium text-gray-800  '>Casual t-shirts</h1>
                                <h3 className='text-xl text-gray-800 mt-2'>$70.00 - $110.00</h3>
                            </div>
                        </div>


                        <div className='box sm:mx-10 my-4'>
                            <div className="relative">
                                <img src={card1img7} className="max-w-72  duration-300 ease-in-out transition-all  scale-100" alt="Imagem de perfil" />
                                <img src={card1img8} className="max-w-72 absolute top-0 left-0 z-0 opacity-0 hover:ease-linear hover:duration-700 hover:transition-all hover:scale-100 hover:opacity-100" alt="Nova imagem" />
                            </div>
                            <div className='pop'>
                                <div className='flex absolute top-[300px] mx-12  '>
                                    <CiHeart className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <FaRegEye className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <LuShoppingBag className='size-10 mx-2 border-2 rounded-full bg-white p-2 hover:bg-black hover:text-white mt-3' />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h1 className='text-2xl font-medium text-gray-800'>Casual t-shirts</h1>
                                <h3 className='text-xl text-gray-800 mt-2'>$70.00 - $110.00</h3>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='flex justify-around mt-10'>
                    <div className='relative mx-5  grid lg:grid-cols-4 sm:grid-cols-2 justify-center grid-cols-1'>

                        <div className='box sm:mx-10 my-4'>
                            <div className="relative">
                                <img src={card2img1} className="max-w-72  duration-300 ease-in-out transition-all  scale-100" alt="Imagem de perfil" />
                                <img src={card2img2} className="max-w-72 absolute top-0 left-0 z-0 opacity-0 hover:ease-linear hover:duration-700 hover:transition-all hover:scale-100 hover:opacity-100" alt="Nova imagem" />
                            </div>
                            <div className='pop'>
                                <div className='flex absolute top-[300px] mx-12  '>
                                    <CiHeart className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <FaRegEye className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <LuShoppingBag className='size-10 mx-2 border-2 rounded-full bg-white p-2 hover:bg-black hover:text-white mt-3' />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h1 className='text-2xl font-medium text-gray-800  '>Casual t-shirts</h1>
                                <h3 className='text-xl text-gray-800 mt-2'>$70.00 - $110.00</h3>
                            </div>
                        </div>

                        <div className='box sm:mx-10 my-4'>
                            <div className="relative">
                                <img src={card2img3} className="max-w-72  duration-300 ease-in-out transition-all  scale-100" alt="Imagem de perfil" />
                                <img src={card2img4} className="max-w-72 absolute top-0 left-0 z-0 opacity-0 hover:ease-linear hover:duration-700 hover:transition-all hover:scale-100 hover:opacity-100" alt="Nova imagem" />
                            </div>
                            <div className='pop'>
                                <div className='flex absolute top-[300px] mx-12  '>
                                    <CiHeart className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <FaRegEye className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <LuShoppingBag className='size-10 mx-2 border-2 rounded-full bg-white p-2 hover:bg-black hover:text-white mt-3' />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h1 className='text-2xl font-medium text-gray-800  '>Casual t-shirts</h1>
                                <h3 className='text-xl text-gray-800 mt-2'>$70.00 - $110.00</h3>
                            </div>
                        </div>


                        <div className='box sm:mx-10 my-4'>
                            <div className="relative">
                                <img src={card2img5} className="max-w-72  duration-300 ease-in-out transition-all  scale-100" alt="Imagem de perfil" />
                                <img src={card2img6} className="max-w-72 absolute top-0 left-0 z-0 opacity-0 hover:ease-linear hover:duration-700 hover:transition-all hover:scale-100 hover:opacity-100" alt="Nova imagem" />
                            </div>
                            <div className='pop'>
                                <div className='flex absolute top-[300px] mx-12  '>
                                    <CiHeart className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <FaRegEye className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <LuShoppingBag className='size-10 mx-2 border-2 rounded-full bg-white p-2 hover:bg-black hover:text-white mt-3' />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h1 className='text-2xl font-medium text-gray-800  '>Casual t-shirts</h1>
                                <h3 className='text-xl text-gray-800 mt-2'>$70.00 - $110.00</h3>
                            </div>
                        </div>


                        <div className='box sm:mx-10 my-4'>
                            <div className="relative">
                                <img src={card2img7} className="max-w-72  duration-300 ease-in-out transition-all  scale-100" alt="Imagem de perfil" />
                                <img src={card2img8} className="max-w-72 absolute top-0 left-0 z-0 opacity-0 hover:ease-linear hover:duration-700 hover:transition-all hover:scale-100 hover:opacity-100" alt="Nova imagem" />
                            </div>
                            <div className='pop'>
                                <div className='flex absolute top-[300px] mx-12  '>
                                    <CiHeart className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <FaRegEye className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <LuShoppingBag className='size-10 mx-2 border-2 rounded-full bg-white p-2 hover:bg-black hover:text-white mt-3' />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h1 className='text-2xl font-medium text-gray-800'>Casual t-shirts</h1>
                                <h3 className='text-xl text-gray-800 mt-2'>$70.00 - $110.00</h3>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='flex justify-around mt-10'>
                    <div className='relative mx-5  grid lg:grid-cols-4 sm:grid-cols-2 justify-center grid-cols-1'>

                        <div className='box sm:mx-10 my-4'>
                            <div className="relative">
                                <img src={card3img1} className="max-w-72  duration-300 ease-in-out transition-all  scale-100" alt="Imagem de perfil" />
                                <img src={card3img2} className="max-w-72 absolute top-0 left-0 z-0 opacity-0 hover:ease-linear hover:duration-700 hover:transition-all hover:scale-100 hover:opacity-100" alt="Nova imagem" />
                            </div>
                            <div className='pop'>
                                <div className='flex absolute top-[300px] mx-12  '>
                                    <CiHeart className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <FaRegEye className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <LuShoppingBag className='size-10 mx-2 border-2 rounded-full bg-white p-2 hover:bg-black hover:text-white mt-3' />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h1 className='text-2xl font-medium text-gray-800  '>Casual t-shirts</h1>
                                <h3 className='text-xl text-gray-800 mt-2'>$70.00 - $110.00</h3>
                            </div>
                        </div>

                        <div className='box sm:mx-10 my-4'>
                            <div className="relative">
                                <img src={card3img3} className="max-w-72  duration-300 ease-in-out transition-all  scale-100" alt="Imagem de perfil" />
                                <img src={card3img4} className="max-w-72 absolute top-0 left-0 z-0 opacity-0 hover:ease-linear hover:duration-700 hover:transition-all hover:scale-100 hover:opacity-100" alt="Nova imagem" />
                            </div>
                            <div className='pop'>
                                <div className='flex absolute top-[300px] mx-12  '>
                                    <CiHeart className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <FaRegEye className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <LuShoppingBag className='size-10 mx-2 border-2 rounded-full bg-white p-2 hover:bg-black hover:text-white mt-3' />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h1 className='text-2xl font-medium text-gray-800  '>Casual t-shirts</h1>
                                <h3 className='text-xl text-gray-800 mt-2'>$70.00 - $110.00</h3>
                            </div>
                        </div>


                        <div className='box sm:mx-10 my-4'>
                            <div className="relative">
                                <img src={card3img5} className="max-w-72  duration-300 ease-in-out transition-all  scale-100" alt="Imagem de perfil" />
                                <img src={card3img6} className="max-w-72 absolute top-0 left-0 z-0 opacity-0 hover:ease-linear hover:duration-700 hover:transition-all hover:scale-100 hover:opacity-100" alt="Nova imagem" />
                            </div>
                            <div className='pop'>
                                <div className='flex absolute top-[300px] mx-12  '>
                                    <CiHeart className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <FaRegEye className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <LuShoppingBag className='size-10 mx-2 border-2 rounded-full bg-white p-2 hover:bg-black hover:text-white mt-3' />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h1 className='text-2xl font-medium text-gray-800  '>Casual t-shirts</h1>
                                <h3 className='text-xl text-gray-800 mt-2'>$70.00 - $110.00</h3>
                            </div>
                        </div>


                        <div className='box sm:mx-10 my-4'>
                            <div className="relative">
                                <img src={card3img7} className="max-w-72  duration-300 ease-in-out transition-all  scale-100" alt="Imagem de perfil" />
                                <img src={card3img8} className="max-w-72 absolute top-0 left-0 z-0 opacity-0 hover:ease-linear hover:duration-700 hover:transition-all hover:scale-100 hover:opacity-100" alt="Nova imagem" />
                            </div>
                            <div className='pop'>
                                <div className='flex absolute top-[300px] mx-12  '>
                                    <CiHeart className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <FaRegEye className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <LuShoppingBag className='size-10 mx-2 border-2 rounded-full bg-white p-2 hover:bg-black hover:text-white mt-3' />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h1 className='text-2xl font-medium text-gray-800'>Casual t-shirts</h1>
                                <h3 className='text-xl text-gray-800 mt-2'>$70.00 - $110.00</h3>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='flex justify-around mt-10'>
                    <div className='relative mx-5  grid lg:grid-cols-4 sm:grid-cols-2 justify-center grid-cols-1'>

                        <div className='box sm:mx-10 my-4'>
                            <div className="relative">
                                <img src={card4img1} className="max-w-72  duration-300 ease-in-out transition-all  scale-100" alt="Imagem de perfil" />
                                <img src={card4img2} className="max-w-72 absolute top-0 left-0 z-0 opacity-0 hover:ease-linear hover:duration-700 hover:transition-all hover:scale-100 hover:opacity-100" alt="Nova imagem" />
                            </div>
                            <div className='pop'>
                                <div className='flex absolute top-[300px] mx-12  '>
                                    <CiHeart className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <FaRegEye className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <LuShoppingBag className='size-10 mx-2 border-2 rounded-full bg-white p-2 hover:bg-black hover:text-white mt-3' />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h1 className='text-2xl font-medium text-gray-800  '>Casual t-shirts</h1>
                                <h3 className='text-xl text-gray-800 mt-2'>$70.00 - $110.00</h3>
                            </div>
                        </div>

                        <div className='box sm:mx-10 my-4'>
                            <div className="relative">
                                <img src={card4img3} className="max-w-72  duration-300 ease-in-out transition-all  scale-100" alt="Imagem de perfil" />
                                <img src={card4img4} className="max-w-72 absolute top-0 left-0 z-0 opacity-0 hover:ease-linear hover:duration-700 hover:transition-all hover:scale-100 hover:opacity-100" alt="Nova imagem" />
                            </div>
                            <div className='pop'>
                                <div className='flex absolute top-[300px] mx-12  '>
                                    <CiHeart className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <FaRegEye className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <LuShoppingBag className='size-10 mx-2 border-2 rounded-full bg-white p-2 hover:bg-black hover:text-white mt-3' />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h1 className='text-2xl font-medium text-gray-800  '>Casual t-shirts</h1>
                                <h3 className='text-xl text-gray-800 mt-2'>$70.00 - $110.00</h3>
                            </div>
                        </div>


                        <div className='box sm:mx-10 my-4'>
                            <div className="relative">
                                <img src={card4img5} className="max-w-72  duration-300 ease-in-out transition-all  scale-100" alt="Imagem de perfil" />
                                <img src={card4img6} className="max-w-72 absolute top-0 left-0 z-0 opacity-0 hover:ease-linear hover:duration-700 hover:transition-all hover:scale-100 hover:opacity-100" alt="Nova imagem" />
                            </div>
                            <div className='pop'>
                                <div className='flex absolute top-[300px] mx-12  '>
                                    <CiHeart className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <FaRegEye className='size-10 mx-2 border-2 rounded-full p-2 bg-white hover:bg-black hover:text-white mt-3' />
                                    <LuShoppingBag className='size-10 mx-2 border-2 rounded-full bg-white p-2 hover:bg-black hover:text-white mt-3' />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h1 className='text-2xl font-medium text-gray-800  '>Casual t-shirts</h1>
                                <h3 className='text-xl text-gray-800 mt-2'>$70.00 - $110.00</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardView
