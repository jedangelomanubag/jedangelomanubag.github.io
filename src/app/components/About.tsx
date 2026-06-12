import { GraduationCap, Lightbulb } from "lucide-react";

export function About() {
  return (
    <section id="about" className="bg-[#0d1424] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionLabel>About Me</SectionLabel>
        <h2 className="text-white mb-4" style={{ fontSize: "2rem", fontWeight: 700 }}>
          Building practical systems, not just theory
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Bio */}
          <div className="space-y-4 text-slate-400" style={{ fontSize: "0.97rem", lineHeight: 1.75 }}>
            <p>
              I'm a BSIT graduate from St. Michael's College with a passion for building real-world IT systems.
              My focus spans networking, backend/system development, and Linux server administration.
            </p>
            <p>
              Rather than sticking to textbook theory, I prefer hands-on work — setting up servers,
              configuring networks, and developing full systems like my capstone water utility billing platform.
            </p>
            <p>
              I'm driven by the challenge of making technology work in practical, impactful ways.
            </p>
          </div>

          {/* Education card */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-3 text-blue-400">
              <GraduationCap size={20} />
              <span style={{ fontWeight: 600 }}>Education</span>
            </div>
            <div>
              <p className="text-white" style={{ fontWeight: 600 }}>
                Bachelor of Science in Information Technology
              </p>
              <p className="text-slate-400 mt-1">St. Michael's College</p>
              <p className="text-slate-500 mt-1" style={{ fontSize: "0.875rem" }}>2022 – 2026</p>
            </div>

            <div className="border-t border-slate-700/50 pt-4">
              <div className="flex items-center gap-2 text-blue-400 mb-3">
                <Lightbulb size={16} />
                <span style={{ fontSize: "0.875rem", fontWeight: 600 }}>Core Interests</span>
              </div>
              <ul className="space-y-2">
                {[
                  "Networking systems & configuration",
                  "Backend / system development",
                  "Linux server administration",
                  "Real-world utility systems",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-400" style={{ fontSize: "0.875rem" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="w-6 h-0.5 bg-blue-500" />
      <span className="text-blue-400 uppercase tracking-widest" style={{ fontSize: "0.75rem", fontWeight: 600 }}>
        {children}
      </span>
    </div>
  );
}
