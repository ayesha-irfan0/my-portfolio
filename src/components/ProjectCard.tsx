interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="p-6 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  )
}
