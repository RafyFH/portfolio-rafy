interface Project {
    title: string;
    description: string;
}

export default function Portfolio() {
    const projects: Project[] = [
        { title: 'Project 1', description: 'Description for project 1' },
        { title: 'Project 2', description: 'Description for project 2' },
        { title: 'Project 3', description: 'Description for project 3' },
    ];

    return (
        <section className="w-full py-12 bg-gray-200">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}