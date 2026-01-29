import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
          Hi, I'm <span className="text-emerald-600">bhoomika devraj </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-8">
          Full Stack Developer & Creative Problem Solver
        </p>
        <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
          I build beautiful, functional web applications that solve real-world problems.
          Passionate about clean code and exceptional user experiences.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors font-medium"
          >
            Get In Touch
          </a>
        </div>
        <div className="mt-16 animate-bounce">
          <ArrowDown className="mx-auto text-slate-400" size={32} />
        </div>
      </div>
    </section>
  );
}
