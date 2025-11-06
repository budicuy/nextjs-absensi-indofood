interface ProjectCardProps {
  title: string;
  deadline: string;
  icon: React.ReactNode;
  color: string;
}

export default function ProjectCard({
  title,
  deadline,
  icon,
  color,
}: ProjectCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-4 transition-all hover:shadow-md">
      <div className={`rounded-lg ${color} p-2 text-white`}>{icon}</div>
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
        <p className="text-xs text-gray-500">Deadline: {deadline}</p>
      </div>
    </div>
  );
}
