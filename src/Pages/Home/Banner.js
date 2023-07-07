import React, { useEffect, useState } from 'react';
import Product from './product';

function Banner() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://api.hiring.masterkey.tech/api/v1/products')
            .then(res => res.json())
            .then(data => setProducts(data.products[0].productData))
    }, [])
    const bannerProducts = products.slice(0, 6);
    console.log(products);
    return (
        <div className='px-5'>
            <div className='flex gap-6'>
                <div className='flex justify-center items-center'>
                    <h1 className=' text-6xl'>We picked some <span className="text-orange-700 font-semibold">cool things</span> for you!</h1>
                </div>
                <div>
                    <h4 className=' font-bold'>hot deals for you</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            bannerProducts?.map(product => <Product
                                key={product._id}
                                product={product}
                            ></Product>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner