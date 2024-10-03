"use client";
import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from "next/navigation";

const Navbar: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState('hero');
    const [backgroundPosition, setBackgroundPosition] = useState(0);
    const [backgroundWidth, setBackgroundWidth] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    const routes: { [key: string]: string } = {
        '/': 'hero',
        '/about': 'about',
        '/projects': 'projects',
    };

    const updateBackgroundPosition = () => {
        const activeElement = document.querySelector(`span[data-section="${activeSection}"]`);
        if (activeElement) {
            const { left, width } = activeElement.getBoundingClientRect();
            const navElement = document.getElementById('navbar');
            const navOffset = navElement ? navElement.getBoundingClientRect().left : 0;

            // Menghitung posisi background dengan benar
            const adjustedLeft = left - navOffset; // Posisi elemen aktif dikurangi offset navbar
            setBackgroundPosition(adjustedLeft);
            setBackgroundWidth(width);
        }
    };

    const scrollToSection = (id: string) => {
        const route = Object.keys(routes).find(key => routes[key] === id);
        if (route) {
            router.push(route);
            setActiveSection(id);
            updateBackgroundPosition();
        }
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 50);

        const sections = ['about', 'experience', 'projects'];
        sections.forEach((section) => {
            const sectionElement = document.getElementById(section);
            if (sectionElement) {
                const sectionTop = sectionElement.offsetTop;
                const sectionHeight = sectionElement.clientHeight;

                if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(section);
                    updateBackgroundPosition();
                }
            }
        });
    };

    useEffect(() => {
        updateBackgroundPosition();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname]);

    return (
        <header>
            <nav id="navbar"
                 className={`fixed w-full z-10 transition-all duration-300`}>
                <div className="relative flex justify-center p-4 items-center">
                    <ul className={`flex space-x-4 transition-all duration-300 p-5 rounded-[40px] ${isScrolled ? 'bg-transparent-30' : 'bg-transparent'}`}>
                        {['about', 'experience', 'projects'].map((section) => (
                            <li key={section} className="relative">
                                <span
                                    data-section={section}
                                    className={`cursor-pointer transition-colors duration-300 text-sm xl:text-xl lg:text-xl md:text-lg sm:text-sm
                                    ${activeSection === section ? 'text-white' : 'text-white'} 
                                    py-2 px-4 relative z-10`}
                                    onClick={() => scrollToSection(section)}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div
                        className="absolute bottom-0 transition-all duration-300"
                        style={{
                            width: backgroundWidth,
                            left: backgroundPosition,
                            top: "2rem",
                            height: '38px',
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                            borderRadius: '20px',
                            zIndex: 0,
                        }}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
