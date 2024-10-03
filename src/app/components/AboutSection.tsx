const AboutSection: React.FC = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-white py-10">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">About Me</h2>
                <p className="text-lg">
                    I am a Fullstack Developer with expertise in React.js, Next.js, and Laravel. I have experience working on a variety of web applications ranging from CMS to inventory systems.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;