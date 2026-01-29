import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with payment integration, inventory management, and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'https://C:\Users\heman\Downloads\project-bolt-sb1-a5kzgppp\project\image.png.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates and team collaboration features.',
    tags: ['TypeScript', 'Firebase', 'Tailwind'],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather forecasting application with interactive maps and detailed analytics.',
    tags: ['React', 'API Integration', 'Charts'],
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
