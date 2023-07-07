import React, { useEffect, useState } from 'react';
import Product from './product';

function HotDeals() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://api.hiring.masterkey.tech/api/v1/products?product_type=Today’s hot deals')
            .then(res => res.json())
            .then(data => setProducts(data.products[0].productData))
    }, [products])

    const dealsProducts = products.slice(0, 5);
    return (
        <div className='mt-16 mx-5 mb-5'>
            <h4 className='font-bold'>Today's Hot Deals</h4>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
                {
                    dealsProducts?.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    )
}

export default HotDeals