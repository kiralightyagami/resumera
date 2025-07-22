import React from 'react'
import Link from 'next/link'
export const Navbar = () => {

 
  return (
    <nav className="navbar">
        <Link href="/">
            <p className="text-2xl font-bold text-gradient">RESUMERA</p>
        </Link>
        <Link href="/upload" className="primary-button w-fit">
            Upload Resume
        </Link>
    </nav>
  )
}
