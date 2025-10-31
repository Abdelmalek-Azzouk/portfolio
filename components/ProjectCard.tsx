interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <a
      href={link}
      className="border border-black p-4 rounded-xl hover:bg-black hover:text-white transition-colors"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </a>
  );
}
