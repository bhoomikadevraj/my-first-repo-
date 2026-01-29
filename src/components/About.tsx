import { Code2, Palette, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow">
            <Code2 className="text-emerald-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Clean Code
            </h3>
            <p className="text-slate-600">
              Myself Bhumika Devraj
            </p>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow">
            <Palette className="text-emerald-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              FIRST WEBSITE
            </h3>
            <p className="text-slate-600">
              Creating intuitive interfaces with attention to every detail.
            </p>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow">
            <Rocket className="text-emerald-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Fast Delivery
            </h3>
            <p className="text-slate-600">
              Efficient development process without compromising quality.
            </p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-slate-600 leading-relaxed">
            With over 5 years of experience in web development, I specialize in creating
            modern, responsive applications using React, TypeScript, and Node.js. I'm
            passionate about learning new technologies and solving complex challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
