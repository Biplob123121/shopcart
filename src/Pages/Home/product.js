import React from 'react'

function product({ product }) {
    const { product_img, product_name, product_price, product_discount } = product;
    return (
        <div className="p-2 shadow-md rounded-md hover:shadow-2xl text-center">
            <div className='w-full h-28 flex items-center justify-center'>
                <img src={product_img} alt="" height={100} width={100} />
            </div>
            <h3 className='font-semibold mt-4 text-sm'>{product_name}</h3>
            <div className='flex justify-between mt-2'>
                <p className=' text-xs'>${product_price}</p>
                <p className=" text-xs text-warning">- {product_discount}% off</p>
            </div>
        </div>
    )
}

export default product