import React from 'react';
import { removeToCart, emptyCart } from '../Redux/cartRedux/cartAction';
import { useSelector, useDispatch } from 'react-redux';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from 'react';

const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart);
  const [quantities, setQuantities] = useState({});

  const increment = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 1) + 1
    }));
  };

  const decrement = (id) => {
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      if (newQuantities[id] > 1) {
        newQuantities[id] -= 1;
      }
      return newQuantities;
    });
  };

  return (
    <div>
      <h1 className='title'>This is Cart Page</h1>
      <div className='flex'>
        <div className='w-10/12'>
          <table className='w-11/12 border-2 mx-auto table-fixed'>
            <thead>
              <tr className='h-20'>
                <th className='p-2'>Remove</th>
                <th>Product Image</th>
                <th>Product Title</th>
                <th>Product Quantity</th>
                <th>Product Price</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr className='w-11/12 h-28 border-2 my-2 text-center' key={item.id}>
                  <td className='p-2'>
                    <button onClick={() => dispatch(removeToCart(item.id))}>
                      <IoIosCloseCircleOutline className='mx-auto size-6' />
                    </button>
                  </td>
                  <td>
                    <img src={item.image} className='size-28 mx-auto p-2' alt="" />
                  </td>
                  <td>
                    <h1 className='font-semibold text-gray-600'>{item.title}</h1>
                  </td>
                  <td className='flex items-center'>
                    <button className='p-3 m-5 border-2 bg-slate-100 shadow rounded-lg' onClick={() => increment(item.id)}>+</button>
                    <h1 className='text-xl'>{quantities[item.id] || 1}</h1>
                    <button className='p-3 m-5 border-2 bg-slate-100 shadow rounded-lg' onClick={() => decrement(item.id)}>-</button>
                  </td>
                  <td>
                    <p>${item.price}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <table className='border-2 mx-auto table-fixed'>
            <thead>
              <tr className='h-20'>
                <th className='px-8'>
                  Total Price
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr className='h-[115px] border-2 text-center' key={item.id}>
                  <td className='p-2'>
                    <h1>${item.price * (quantities[item.id] || 1)}</h1>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
