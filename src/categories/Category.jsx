/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Feature from '../feature/feature';
import Spinner from '../spinner/Spinner';


const Category = () => {
    const[categories,setCategories]=useState([]);
    useEffect(()=>{
        const fetchCategoris=async ()=>{
            const reponse=await fetch('https://dummyjson.com/products/category-list');
            const data=await reponse.json();
            setCategories(data);
            console.log(data);
        }
       

        fetchCategoris();
    },[]);

    if(categories.length===0)return <Spinner/>

  return (
    <div>
        <Feature cards={categories}/>
    </div>
  )
}

export default Category
