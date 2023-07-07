import React from 'react'

function Header() {
    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">shopcart</a>
                </div>
                <div className="flex-none">
                    <button className="btn btn-ghost">
                        Sign In
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header