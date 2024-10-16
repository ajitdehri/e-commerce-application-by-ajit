/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Products from '../products/Products'
import Category from '../categories/Category'
import Spinner from '../spinner/Spinner';

const useFeatchproducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const reponse = await fetch("https://dummyjson.com/products");
                const data = await reponse.json();
                setProducts(data.products);
                // console.log(data);

            }
            catch (err) {
                setError(<h1>Oops!! <br />Failed to fetch products.</h1>);

            }

        };
        fetchProducts();
    }, []);
    return { products, error }
};


const HomeProducts = () => {
    const { products, error } = useFeatchproducts();
    if (error) {
        return <h1 className='text-black text-center text-2xl h-40 mt-36'>{error}</h1>
    }

    return (
        <div>
            <Category />
            <div className="flex flex-col  text-center w-full ">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">All Products</h1>
            </div>
            {
                products.length > 0 ? <Products products={products} /> : <Spinner />
            }

        </div>
    )
}

export default HomeProducts

