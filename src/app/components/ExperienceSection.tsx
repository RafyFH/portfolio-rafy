interface Experience {
    role: string;
    company: string;
    duration: string;
    description: string;
}

export default function ExperienceSection() {
    const experiences: Experience[] = [
        {
            role: 'Fullstack Developer',
            company: 'Tech Company A',
            duration: '2022 - Present',
            description: 'Building and managing various web applications using React and Laravel.',
        },
        {
            role: 'Frontend Developer',
            company: 'Company B',
            duration: '2020 - 2022',
            description: 'Developed user interfaces for multiple client applications using React.js.',
        },
    ];

    return (
        <section id="experience" className="w-full py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-6">Work Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experiences.map((experience, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">{experience.role}</h3>
                            <p className="text-gray-600">{experience.company}</p>
                            <p className="text-gray-500 text-sm">{experience.duration}</p>
                            <p className="mt-4 text-gray-700">{experience.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}