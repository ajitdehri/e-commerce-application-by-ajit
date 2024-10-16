/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';

const Products = ({ products = [] }) => {
    return (
        
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto ">
                <div className="flex flex-wrap  justify-center align-middle-m-4 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ">
                    {
                        products.map((product) => {
                            // console.log(product, 'products')
                            const { id, title, price, desciption, category, images } = product;
                            return (
                                
                                    <Link to={`/products/${id}`} className=" relative m-10 flex w-60 max-w-xs flex-col overflow-hidden rounded-lg border
                                     border-gray-100 bg-pink-400  transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 duration-400  ">
                                        <a className="relative mx-3 mt-3 flex  overflow-hidden rounded-sm justify-center" href="#">
                                            <img className=" object-contain h-40 " src={images} alt="image" />
                                        </a>
                                        <div className="mt-4 px-5 pb-5">
                                            <a href="#">
                                                <h5 className="text-xl tracking-tight text-slate-900">{title.substring(0, 11)}</h5>
                                            </a>
                                            <div className="mt-2 mb-5 flex items-center justify-between">
                                                <p>
                                                    <span className="text-3xl font-bold text-slate-900">${price}</span>
                                                    <span className="text-sm text-slate-900 line-through">$299</span>
                                                </p>

                                            </div>
                                            <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 
                                            text-center text-sm font-medium text-white hover:bg-purple-600 focus:outline-none focus:ring-4
                                             focus:ring-blue-300">
                                               
                                            Details</a>
                                        </div>
                                    </Link>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    
    )
}

export default Products
