import React, { useState, useEffect } from 'react';       
       
            export default function Navbar() {
            const [isMenuOpen, setIsMenuOpen] = useState(false);
            const [isScrolled, setIsScrolled] = useState(false);
    
            // 1. New State for Search
            const [isSearchOpen, setIsSearchOpen] = useState(false);

            useEffect(() => {
                const handleScroll = () => {
                    setIsScrolled(window.scrollY > 50);
                };
                window.addEventListener('scroll', handleScroll);
                return () => window.removeEventListener('scroll', handleScroll);
            }, []);

            const navLink = [
                { label: 'Home', href: '#' },
                { label: 'About Us', href: '#' },
                { label: 'Product', href: '#' },
                { label: 'My Order', href: '#' },
                { label: 'Contact Us', href: '#' }
            ];

            return (
                <nav className={`fixed w-full top-0 transition-all duration-500 z-50 ${isScrolled ? 'bg-white shadow-lg' : 'bg-[#F4F5F7]'}`}>
            
                <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-[7.5rem] flex items-center transition-all duration-500 relative ${
                isScrolled ? 'h-16 lg:h-20' : 'h-[7.5rem]'
            }`}>
                    <div className="flex justify-between items-center w-full">

                        {/* LOGO */}
                        <div className="flex-shrink-0">
                            <a href='#'>
                                <img src="/image/Logo.png" alt="RWFlogo" className={`object-contain transition-all duration-500 ${
                                    isScrolled ? 'h-10 lg:h-12' : 'h-16 lg:h-20'
                                }`}  />
                            </a>
                        </div>

                        {/* NAV LINKS (Desktop) */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navLink.map((link) => (
                                <a key={link.label} href={link.href}className="text-m font-semibold text-slate-600 hover:text-[#F48120] transition-colors">
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* Icons Group */}
                        <div className="flex items-center space-x-2">
                        
                            {/* 2. SEARCH BUTTON (Toggles Search State) */}
                            <button 
                                onClick={() => {
                                    setIsSearchOpen(!isSearchOpen);
                                    if(isMenuOpen) setIsMenuOpen(false); 
                                }}
                                className={`transition-colors p-2 rounded-full ${isSearchOpen ? 'text-[#F48120] bg-orange-50' : 'hover:text-[#F48120]'}`} >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <circle cx="11" cy="11" r="8" strokeWidth="2" />
                                    <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>

                            {/* CART */}
                            <button className="relative hover:text-blue-600 transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" strokeWidth="2" strokeLinecap="round" /></svg>
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</span>
                            </button>

                            {/* PROFILE */}
                            <button className="hover:text-blue-600 transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeWidth="2" strokeLinecap="round" /></svg>
                            </button>

                            {/* MOBILE MENU TOGGLE */}
                            <div className="lg:hidden flex items-center">
                                <button onClick={() => {
                                    setIsMenuOpen(!isMenuOpen);
                                    if(isSearchOpen) setIsSearchOpen(false); 
                                    }}
                                    className="p-2 hover:bg-black/5 rounded-full transition-colors">
                                    <svg className="h-6 w-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                    {/* 3. SEARCH DROPDOWN (SMOOTH SLIDE) */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out border-t border-slate-200
                        ${isSearchOpen ? 'max-h-40 opacity-100 bg-white' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                            <div className="max-w-7xl mx-auto px-4 py-6">
                                <div className="relative">
                                    <input type="text" placeholder="Search for foods, meats, or products..." className="w-full bg-slate-100 border-none rounded-xl py-3 px-12 focus:ring-2 focus:ring-[#F48120] outline-none transition-all" />
                                    <svg className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <circle cx="11" cy="11" r="8" strokeWidth="2" />
                                        <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                    </div>

                    {/* MOBILE DROPDOWN MENU */}
                    <div className={`overflow-hidden lg:hidden transition-all duration-500 ease-in-out bg-[#F4F5F7] border-t-2
                        ${isMenuOpen ? 'max-h-96 opacity-100 shadow-xl' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                            <div className="p-4 space-y-2">
                                {navLink.map((link) => (
                                <a key={link.label} href={link.href} 
                                    className="block px-3 py-2 text-slate-700 font-medium hover:bg-white rounded-xl transition-all">
                                    {link.label}
                                </a>
                                ))}
                            </div>
                    </div>
                </nav>
            );
        }

