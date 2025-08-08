import React from 'react'
import Link from 'next/link'
export const Navbar = () => {

 
  return (
    <nav className="navbar">
        <Link href="/">
            <p className="text-2xl font-bold text-black cursor-pointer hover:text-gray-500">RESUMERA</p>
        </Link>
        <Link href="/upload" className="primary-button w-fit cursor-pointer shadow-input">
            Upload Resume
        </Link>
    </nav>
  )
}
