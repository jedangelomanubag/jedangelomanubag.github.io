import { Mail, Github, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section id="contact" className="bg-[#0d1424] py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <SectionLabel>Contact</SectionLabel>
        <h2 className="text-white mb-3" style={{ fontSize: "2rem", fontWeight: 700 }}>
          Let's Connect
        </h2>
        <p className="text-slate-400 mb-12" style={{ fontSize: "0.97rem" }}>
          I'm actively looking for opportunities in networking, system administration, and backend development.
          Feel free to reach out.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            {
              icon: Mail,
              label: "Email",
              value: "your.email@example.com",
              href: "mailto:your.email@example.com",
            },
            {
              icon: Github,
              label: "GitHub",
              value: "jedangelomanubag",
              href: "https://github.com/jedangelomanubag",
            },
            {
              icon: MapPin,
              label: "Location",
              value: "Philippines",
              href: null,
            },
          ].map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="rounded-xl border border-slate-700/40 bg-slate-800/20 p-5 flex flex-col items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center">
                <Icon size={18} className="text-blue-400" />
              </div>
              <div>
                <p className="text-slate-500" style={{ fontSize: "0.75rem" }}>
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                    style={{ fontSize: "0.875rem", fontWeight: 500 }}
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-slate-300" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                    {value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <a href="mailto:your.email@example.com">
            <Button className="bg-blue-600 hover:bg-blue-500 text-white gap-2 shadow shadow-blue-600/30">
              <Mail size={16} />
              Send an Email
            </Button>
          </a>
          <a href="https://github.com/jedangelomanubag" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white gap-2">
              <Github size={16} />
              View GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-3">
      <span className="w-6 h-0.5 bg-blue-500" />
      <span className="text-blue-400 uppercase tracking-widest" style={{ fontSize: "0.75rem", fontWeight: 600 }}>
        {children}
      </span>
    </div>
  );
}
