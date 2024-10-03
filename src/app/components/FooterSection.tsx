import { SiTypescript, SiTailwindcss, SiJavascript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

export default function FooterSection() {
    return (
        <footer className="w-full py-8 bg-gray-900 text-white">
            <div className="container mx-auto text-center">
                <p className="text-lg mb-4">Powered by:</p>
                <div className="flex justify-center space-x-6 mb-6">
                    <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                        <TbBrandNextjs size={40} className="text-gray-400 hover:text-white" />
                    </a>
                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                        <SiTypescript size={40} className="text-blue-500 hover:text-white" />
                    </a>
                    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                        <SiTailwindcss size={40} className="text-blue-300 hover:text-white" />
                    </a>
                    <a href="https://github.com/wagerfield/parallax" target="_blank" rel="noopener noreferrer">
                        <SiJavascript size={40} className="text-yellow-400 hover:text-white" />
                    </a>
                </div>
                <p className="text-sm">© {new Date().getFullYear()} Rafy Fakhrizal Handiawan. All rights reserved.</p>
            </div>
        </footer>
    );
}