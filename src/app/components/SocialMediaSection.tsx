import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function SocialMediaSection() {
    return (
        <section id="social-media" className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-6">Follow Me</h2>
                <div className="flex justify-center space-x-6">
                    <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors">
                        <FaGithub size={40} />
                    </a>
                    <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500 transition-colors">
                        <FaLinkedin size={40} />
                    </a>
                    <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-200 transition-colors">
                        <FaTwitter size={40} />
                    </a>
                </div>
            </div>
        </section>
    );
}