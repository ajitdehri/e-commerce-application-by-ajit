/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Feature = ({ cards= [] }) => {
    return (
        <div>
            <section className="text-gray-600 body-font  ">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col  text-center w-full mb-20">
                        <h2 className="text-3xl text-purple-500 tracking-widest font-medium title-font mb-1">Top Products</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Quality You Trust, Price You Love</h1>
                    </div>
                    <div className="flex flex-wrap -m-4 cursor-pointer">

                        {
                            cards.map((card, index) => {
                                return (
                                    <Link to={`/category/${card}`} key={index} className="p-4 md:w-1/3 ">
                                        <div className="flex rounded-lg h-full bg-pink-400 p-8 flex-col">
                                            <div className="flex items-center mb-3">
                                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-500 text-white flex-shrink-0">
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                    </svg>
                                                </div>
                                                <h2 className="text-gray-900 text-lg title-font font-medium capitalize">{card}</h2>
                                            </div>
                                            <div className="flex-grow ">
                                                <p className="leading-relaxed text-base text-black">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                                <a className="mt-3 inline-flex items-center text-black text-xl hover:text-white">Learn More
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Feature
