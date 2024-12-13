"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const closeMenu = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false)
        }
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    return (
        <header className="mb-8 relative">
            <nav className="flex flex-wrap justify-between items-center px-4 py-4 lg:px-8">
                <Link href="/" className="comic-text text-3xl random-rotate wobble text-white z-50">GDG DA-IICT
                </Link>
                <button className="lg:hidden z-50 text-black" onClick={toggleMenu}>{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
                <ul className={`fixed inset-0 flex flex-col items-center justify-center space-y-6 lg:space-y-0 lg:space-x-4 lg:flex-row lg:relative lg:bg-transparent z-40 ${isMenuOpen ? 'flex bg-white' : 'hidden lg:flex'}`}>
                    <li><Link href="/" className="comic-blue comic-text random-rotate text-2xl lg:text-base" onClick={closeMenu}>Home</Link></li>
                    <li><Link href="/events" className="comic-blue comic-text random-rotate text-2xl lg:text-base" onClick={closeMenu}>Events</Link></li>
                    <li><Link href="/team" className="comic-blue comic-text random-rotate text-2xl lg:text-base" onClick={closeMenu}>Team</Link></li>
                    <li><Button className="comic-red comic-highlight random-rotate hover:-translate-y-1 transition-transform text-2xl lg:text-base" onClick={closeMenu}><a href='https://chat.whatsapp.com/EOUef2JNbFB5hadvb48OWC' target='_blank'>Join Us</a></Button></li>
                </ul>
            </nav>
            <div className="zigzag mt-4 rotate-180"></div>
        </header>
    )
}