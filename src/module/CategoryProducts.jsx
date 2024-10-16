/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React ,{useState,useEffect}from 'react'
import { useParams } from 'react-router-dom'
import Products from '../products/Products';
import Spinner from '../spinner/Spinner';


const CategoryProducts = () => {
    const {name}=useParams();
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        const fetchProducts=async ()=>{
            const reponse=await fetch(`https://dummyjson.com/products/category/${name}`);
            const data=await reponse.json();
            setProducts(data);
            console.log(data);
        }
       

        fetchProducts();
    },[]);
    if(products.length===0)return <Spinner/>
  return (
    <div>
        <Products products={products}/>
      
    </div>
  )
}

export default CategoryProducts
