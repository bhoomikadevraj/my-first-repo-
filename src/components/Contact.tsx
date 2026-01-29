import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">
          Let's Work Together
        </h2>
        <p className="text-lg text-slate-600 mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <a
          href="mailto:hello@alexjohnson.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium text-lg mb-12"
        >
          <Mail size={24} />
          hello@alexjohnson.com
        </a>
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="#"
            aria-label="Visit GitHub profile"
            className="p-3 bg-slate-100 rounded-full hover:bg-emerald-100 hover:text-emerald-600 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="#"
            aria-label="Visit LinkedIn profile"
            className="p-3 bg-slate-100 rounded-full hover:bg-emerald-100 hover:text-emerald-600 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#"
            aria-label="Visit Twitter profile"
            className="p-3 bg-slate-100 rounded-full hover:bg-emerald-100 hover:text-emerald-600 transition-colors"
          >
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
