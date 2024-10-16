/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'
import Hero from '../hero/Hero'
import Products from '../products/Products'
import Category from '../categories/Category'
import Spinner from '../spinner/Spinner'

const useFeatchproducts=()=>{
    const[products,setProducts]=useState([]);
    const [error ,setError]=useState(null);
    useEffect(()=>{
        const fetchProducts=async ()=>{
            try{
                const reponse=await fetch("https://dummyjson.com/products");
            const data=await reponse.json();
            setProducts(data.products);
            console.log(data);

            }catch (err){
                setError(<h1>Oops!! <br/>Failed to fetch products.</h1>);
            }
            
        };
       

        fetchProducts();
    },[]);
    return { products,error}

}
const Home = () => {
    const{products,error}=useFeatchproducts();
    if(error){
        return <h1 className='text-black text-center text-2xl h-40 mt-36'>{error}</h1>
    }

    
    return (
        <div>
            <Hero/>
            <Products />
            <div className="flex flex-col  text-center w-full mt-20">
                <h2 className="text-2xl text-black tracking-widest font-medium title-font mb-1 underline">Products</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-700">Quality You Trust, Price You Love!</h1>
            </div>

            {
                products.length>0 ? <Products products={products}/>:<Spinner/>
            }
             <Category/>
        </div>
    )
}

export default Home;
