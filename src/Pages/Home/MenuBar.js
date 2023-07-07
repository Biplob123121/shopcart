import React from 'react'

function MenuBar() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Fresh</a></li>
                    <li><a>Today's Deals</a></li>
                    <li><a>Mobiles</a></li>
                    <li><a>Gift Cards</a></li>
                    <li><a>Women Clothing</a></li>
                    <li><a>Men Clothing</a></li>
                    <li><a>Kids Clothing</a></li>
                    <li><a>Health</a></li>
                    <li><a>Pet corner</a></li>
                    <li><a>Books</a></li>
                    <li><a>Beauty</a></li>
                    <li><a>Sport</a></li>
                    <li><a>Bags</a></li>
                </ul>
            </div>
        </div>
    )
}

export default MenuBar