------------------------------------ version 1 --------------------------
import { useState } from "react";
import { Award, CheckCircle } from "lucide-react";

const certs = [
  {
    title: "TESDA NC II – Computer Systems Servicing",
    issuer: "TESDA",
    description:
      "National certification for computer hardware servicing, assembly, and maintenance.",
    image: null,
    highlight: true,
  },
  {
    title: "Networking Fundamentals",
    issuer: "Cisco / Training",
    description:
      "Covers core networking concepts, protocols, subnetting, and basic router/switch configuration.",
    image: null,
    highlight: false,
  },
  {
    title: "Linux Basics / System Administration",
    issuer: "Training",
    description:
      "Foundations of Linux OS, shell commands, file systems, user management, and server setup.",
    image: null,
    highlight: false,
  },
];

export function Certificates() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="certificates" className="bg-[#0a0f1e] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionLabel>Certifications</SectionLabel>

        <h2 className="text-white mb-2 text-3xl font-bold">
          Certificates & Training
        </h2>

        <p className="text-slate-400 mb-12 text-sm">
          Formal recognitions and training programs completed alongside academic work.
        </p>

        <div className="space-y-4">
          {certs.map((cert, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className={`cursor-pointer transition-all duration-300 rounded-xl border p-6 ${
                  cert.highlight
                    ? "border-blue-500/40 bg-blue-500/5"
                    : "border-slate-700/40 bg-slate-800/20"
                }`}
              >
                {/* Header */}
                <div className="flex gap-5">
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
                      <h3 className="text-white font-semibold text-sm">
                        {cert.title}
                      </h3>

                      <span className="px-2 py-0.5 rounded text-xs border bg-slate-700/50 text-slate-300 border-slate-600/50">
                        {cert.issuer}
                      </span>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>

                {/* Expandable Section */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="rounded-lg border border-slate-700 w-full object-cover"
                    />
                  ) : (
                    <div className="w-full py-10 text-center text-slate-400 border border-slate-700 rounded-lg">
                      Certificate image will be added soon
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ========================= SECTION LABEL COMPONENT ========================= */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="w-6 h-0.5 bg-blue-500" />
      <span className="text-blue-400 uppercase tracking-widest text-xs font-semibold">
        {children}
      </span>
    </div>
  );
}