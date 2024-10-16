/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const navigations=[
    {
        name:'Home',
        path:'/',
    },
    {
        name:'Products',
        path:'/Products'
    },
    {
        name:'About',
        path:'/path'
    },
    {
        name:'Contact',
        path:'/contact'
    }
]

const Header = () => {
    const items=useSelector((state)=>state.cart)
    return (
        <header className="text-gray-600 body-font shadow-lg  bg-pink-500 ">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
                <Link to={'/'}className="flex  title-font font-medium items-center text-gray-900 mb-4 md:mb-0 curser-pointer">
                    
                    <span className="ml-3 text-xl text-black  hover:text-white"> <span className='text-5xl font-extrabold text-purple-800'>s</span>hoppyGlobe</span>
                    
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    {
                        navigations.map((navigation,index)=>{
                            return(
                                <Link key={index} to={navigation.path} className='mr-5 font-bold text-black text-lg hover:text-white'>{navigation.name}</Link>

                            )
                            
                        })
                    }
                </nav>
                <Link to={'/cart'}>
                <button className="inline-flex items-center bg-purple-500 border-0 py-1 px-3 focus:outline-none hover:bg-purple-600 hover: text-white rounded text-base mt-4 md:mt-0">
                <svg xmlns="http://www.w3.org/2000/svg" className=" text-white mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg><h1 className='text-white'>{items.length}</h1>
                </button>
                </Link>
            </div>
        </header>
    )
}

export default Header
