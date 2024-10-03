const ProjectsSection: React.FC = () => {
    const projects = [
        { title: 'Project A', description: 'A brief description of project A.' },
        { title: 'Project B', description: 'A brief description of project B.' },
    ];

    return (
        <section id="projects" className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="p-6 bg-white shadow-md rounded-md">
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;