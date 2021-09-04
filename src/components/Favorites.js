import { useState,useEffect } from 'react'
import Products from 'api/products.json'
import ProductItem from './ui/ProductItem';

export default function Favorites(){

    const [products,setProducts] = useState([]);

    useEffect(() => {
        setProducts(Products)
    },[])

    return(
        <div className="container mx-auto">
           <h3 className="text-sm font-semibold mb-3 mt-5">Favoriler</h3>
           <div className="grid grid-cols-3 2xl:grid-cols-9 xl:grid-cols-8 lg:grid-cols-6 sm:grid-cols-4 gap-1 rounded-lg overflow-hidden">
                {products.length && products.map((product, index) => (
                    <ProductItem key={product.id} product={product} />
                ))}
           </div>
        </div>
    )
}
