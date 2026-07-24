import { useEffect, useState } from "react";
import { Award, CheckCircle, X, ZoomIn } from "lucide-react";

import Prompt from "./certificates/prompt.png";
import Mapalad from "./certificates/certificate_mapalad.png";
import TOPCIT from "./certificates/TOPCIT.png";

const certs = [
  {
    title: "Discover the Art of Prompting",
    issuer: "Google / Coursera",
    description:
      "Completed a course focused on prompt engineering, effective AI interaction, and best practices for modern generative AI tools.",
    image: Prompt,
    highlight: true,
  },
  {
    title: "On-the-Job Training",
    issuer: "Mapalad Energy Generating Corporation",
    description:
      "Completed internship training focused on workstation support, server administration, network maintenance, and mobile application development.",
    image: Mapalad,
    highlight: true,
  },
  {
    title: "TOPCIT - Test of Practical Competency in ICT",
    issuer: "IITP",
    description:
      "Assessment covering practical ICT competencies including software development, networking, databases, and system architecture.",
    image: TOPCIT,
    highlight: false,
  },
];

export function Certificates() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <>
      <section
        id="certificates"
        className="bg-[#0a0f1e] py-20 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Certifications</SectionLabel>

          <h2 className="text-white text-3xl font-bold mb-2">
            Certificates & Training
          </h2>

          <p className="text-slate-400 mb-12">
            Professional certifications, technical training, and academic
            achievements demonstrating continuous learning and practical
            experience.
          </p>

          <div className="space-y-5">
            {certs.map((cert, index) => {
              const expanded = openIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                    cert.highlight
                      ? "border-blue-500/40 bg-blue-500/5 hover:border-blue-400"
                      : "border-slate-700 bg-slate-800/20 hover:border-slate-500"
                  }`}
                >
                  <div
                    onClick={() =>
                      setOpenIndex(expanded ? null : index)
                    }
                    className="p-6"
                  >
                    <div className="flex gap-5">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          cert.highlight
                            ? "bg-blue-500/20"
                            : "bg-slate-700/50"
                        }`}
                      >
                        {cert.highlight ? (
                          <Award
                            size={20}
                            className="text-blue-400"
                          />
                        ) : (
                          <CheckCircle
                            size={20}
                            className="text-slate-400"
                          />
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap justify-between gap-2 mb-2">
                          <h3 className="text-white text-lg font-semibold">
                            {cert.title}
                          </h3>

                          <span className="px-3 py-1 rounded-full text-xs border border-slate-600 text-slate-300 bg-slate-700/40">
                            {cert.issuer}
                          </span>
                        </div>

                        <p className="text-slate-400 leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      expanded
                        ? "max-h-[900px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <div
                        className="relative group cursor-zoom-in"
                        onClick={() =>
                          setSelectedImage(cert.image)
                        }
                      >
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full rounded-xl border border-slate-700 bg-slate-900 object-contain max-h-[650px] transition duration-300 group-hover:brightness-90"
                        />

                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition flex items-center justify-center bg-black/30 rounded-xl">
                          <div className="flex items-center gap-2 bg-black/70 px-4 py-2 rounded-full text-white">
                            <ZoomIn size={18} />
                            <span>Click to Enlarge</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Preview */}

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex justify-center items-center p-6"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 bg-slate-800 hover:bg-slate-700 p-3 rounded-full text-white"
          >
            <X size={22} />
          </button>

          <img
            onClick={(e) => e.stopPropagation()}
            src={selectedImage}
            className="max-w-full max-h-[95vh] rounded-xl shadow-2xl"
            alt="Certificate Preview"
          />
        </div>
      )}
    </>
  );
}

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-8 h-[2px] bg-blue-500 rounded-full" />

      <span className="uppercase tracking-[0.25em] text-blue-400 text-xs font-semibold">
        {children}
      </span>
    </div>
  );
}