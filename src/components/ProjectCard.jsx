export default function ProjectCard({ title, description, url }) {
  return (
    <div className="bg-white shadow-md p-4 rounded">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mb-2">{description}</p>
      <a href={url} className="text-blue-500" target="_blank">View Project</a>
    </div>
  );
}
