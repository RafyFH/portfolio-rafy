"use client"
import './globals.css';
import Navbar from "@/app/components/Navbar";
import localFont from "next/font/local";
import { usePathname } from 'next/navigation';
import {motion, AnimatePresence} from "framer-motion";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();  // Get the current route path

    return (
        <html lang="en">
        <body className="h-screen trans w-full bg-gradient-to-br bg-bg-dark-mode">
        <Navbar />
        <AnimatePresence mode="wait" initial={false}>
            <motion.main
                key={pathname}  // This makes the transition work based on the route
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4 }}
            >
                {children}
            </motion.main>
        </AnimatePresence>
        </body>
        </html>
    );
}