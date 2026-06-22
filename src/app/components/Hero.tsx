import { Github, Mail, Terminal, Network, Server } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-[#0a0f1e] px-6 py-20">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,179,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Avatar placeholder */}
        <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
          <span className="text-white" style={{ fontSize: "2rem", fontWeight: 700 }}>
            JM
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400" style={{ fontSize: "0.85rem" }}>
            Open to opportunities
          </span>
        </div>

        <h1 className="text-white mb-2" style={{ fontSize: "2.8rem", fontWeight: 700, lineHeight: 1.15 }}>
          Jed Angelo O. Manubag
        </h1>
        <p className="text-blue-400 mb-2" style={{ fontSize: "1.2rem", fontWeight: 500 }}>
          BSIT Graduate
        </p>
        <p className="text-slate-400 mb-6" style={{ fontSize: "1rem" }}>
          Aspiring IT professional building real-world systems
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["Networking", "System Development", "Linux Administration"].map((tag) => (
            <Badge
              key={tag}
              className="bg-blue-500/15 text-blue-300 border border-blue-500/30 hover:bg-blue-500/25"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Quick focus icons */}
        <div className="mt-14 flex justify-center gap-10">
          {[
            { icon: Network, label: "Networking" },
            { icon: Terminal, label: "Linux" },
            { icon: Server, label: "Systems" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-slate-500">
              <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                <Icon size={18} className="text-blue-400" />
              </div>
              <span style={{ fontSize: "0.75rem" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
