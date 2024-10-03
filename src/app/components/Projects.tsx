const Projects: React.FC = () => {
    const projects = [
        { title: 'Project A', description: 'Description for project A.' },
        { title: 'Project B', description: 'Description for project B.' },
    ];

    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {projects.map((project, index) => (
                        <div key={index} className="p-6 bg-gray-200 rounded-md shadow-md">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;