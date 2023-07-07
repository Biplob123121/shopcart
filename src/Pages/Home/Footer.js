import React from 'react'

function Footer() {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content mt-16">
            <div>
                <h4 className=' font-semibold'>shopcart</h4>
            </div>
            <div className='flex'>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Help</a>
            </div>
            <div>
                <span className="">English</span>
            </div>
        </footer>
    )
}

export default Footer