import { Award, CheckCircle } from "lucide-react";

const certs = [
  {
    title: "TESDA NC II – Computer Systems Servicing",
    issuer: "TESDA",
    description: "National certification for computer hardware servicing, assembly, and maintenance.",
    highlight: true,
  },
  {
    title: "Networking Fundamentals",
    issuer: "Cisco / Training",
    description: "Covers core networking concepts, protocols, subnetting, and basic router/switch configuration.",
    highlight: false,
  },
  {
    title: "Linux Basics / System Administration",
    issuer: "Training",
    description: "Foundations of Linux OS, shell commands, file systems, user management, and server setup.",
    highlight: false,
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="bg-[#0a0f1e] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionLabel>Certifications</SectionLabel>
        <h2 className="text-white mb-2" style={{ fontSize: "2rem", fontWeight: 700 }}>
          Certificates & Training
        </h2>
        <p className="text-slate-400 mb-12" style={{ fontSize: "0.97rem" }}>
          Formal recognitions and training programs completed alongside academic work.
        </p>

        <div className="space-y-4">
          {certs.map((cert, i) => (
            <div
              key={i}
              className={`flex gap-5 rounded-xl border p-6 ${
                cert.highlight
                  ? "border-blue-500/40 bg-blue-500/5"
                  : "border-slate-700/40 bg-slate-800/20"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  cert.highlight ? "bg-blue-500/20" : "bg-slate-700/50"
                }`}
              >
                {cert.highlight ? (
                  <Award size={18} className="text-blue-400" />
                ) : (
                  <CheckCircle size={18} className="text-slate-400" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3
                    className="text-white"
                    style={{ fontSize: "0.97rem", fontWeight: 600 }}
                  >
                    {cert.title}
                  </h3>
                  <span
                    className={`px-2 py-0.5 rounded text-xs flex-shrink-0 border ${
                      cert.highlight
                        ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                        : "bg-slate-700/50 text-slate-400 border-slate-600/50"
                    }`}
                  >
                    {cert.issuer}
                  </span>
                </div>
                <p className="text-slate-400" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
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
