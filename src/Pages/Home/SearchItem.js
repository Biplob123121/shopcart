import React, { useEffect, useState } from 'react'

function SearchItem() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://api.hiring.masterkey.tech/api/v1/products/search?search=Your searched items')
            .then(res => res.json())
            .then(data => setProducts(data.products[0].Result))
    }, [products])

    return (
        <div className='mt-16 mx-5'>
            <h4 className='font-bold mb-6'>Your Searched Items</h4>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2'>
                {
                    products?.map(product => <div key={product._id}>
                        <img src={product.product_img} alt="" height={100} width={100} />
                    </div>)
                }
            </div>
        </div>
    )
}

export default SearchItem