import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    { title: "Portfolio Site", description: "Built with React and Tailwind", url: "#" },
    { title: "To-Do App", description: "A simple app using React hooks", url: "#" },
  ];

  return (
    <section id="projects" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
      </div>
    </section>
  );
}
