-------------------------------  version 1 --------------------------------------------
import { Droplets, Database, Server, Network, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";

const projects = [
  {
    icon: Droplets,
    title: "Water Utility Billing System",
    label: "Capstone Project",
    labelColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    description:
      "A full role-based billing platform for a water utility company. Handles meter reading, automated billing computation, SMS notifications, and consumer monitoring.",
    features: [
      "Meter reading system",
      "Automated billing computation",
      "SMS notification system",
      "Consumer billing monitoring",
      "Role-based access (Admin / Reader / Consumer)",
    ],
    tags: ["System Design", "MySQL", "Role-based Auth", "SMS API"],
    accent: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/30",
  },
  {
    icon: Database,
    title: "CRUD Web System",
    label: "Practice Project",
    labelColor: "bg-slate-600/40 text-slate-300 border-slate-600/50",
    description:
      "A database-driven create/read/update/delete web application built to solidify backend logic and database design fundamentals.",
    features: [
      "Full CRUD operations",
      "Database-driven architecture",
      "Backend logic implementation",
      "Structured data management",
    ],
    tags: ["HTML", "CSS", "JavaScript", "MySQL"],
    accent: "from-slate-700/30 to-slate-800/20",
    border: "border-slate-700/40",
  },
  {
    icon: Server,
    title: "Linux Server Setup",
    label: "Lab / Practice",
    labelColor: "bg-green-500/20 text-green-300 border-green-500/30",
    description:
      "Hands-on Linux server administration practice including SSH configuration, file sharing setup, and system configuration.",
    features: [
      "SSH configuration",
      "File sharing setup",
      "Server administration",
      "System configuration",
    ],
    tags: ["Linux", "SSH", "Samba / NFS", "CLI"],
    accent: "from-green-500/10 to-emerald-500/5",
    border: "border-green-500/20",
  },
  {
    icon: Network,
    title: "Networking Practice",
    label: "Lab / Practice",
    labelColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    description:
      "Exercises covering subnetting, routing concepts, and network configuration fundamentals using simulation and lab environments.",
    features: [
      "Subnetting exercises",
      "Routing concepts",
      "Network configuration",
      "Protocol fundamentals",
    ],
    tags: ["Subnetting", "Routing", "Network Config", "Cisco Packet Tracer"],
    accent: "from-purple-500/10 to-violet-500/5",
    border: "border-purple-500/20",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-[#0a0f1e] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Projects</SectionLabel>
        <h2 className="text-white mb-2" style={{ fontSize: "2rem", fontWeight: 700 }}>
          What I've Built
        </h2>
        <p className="text-slate-400 mb-12" style={{ fontSize: "0.97rem" }}>
          From capstone systems to hands-on lab work — each project reflects a real-world problem.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={`relative rounded-xl border ${p.border} bg-gradient-to-br ${p.accent} p-6 flex flex-col gap-4 hover:scale-[1.01] transition-transform`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white" style={{ fontSize: "1rem", fontWeight: 600 }}>
                        {p.title}
                      </h3>
                    </div>
                  </div>
                  <Badge className={`border text-xs flex-shrink-0 ${p.labelColor}`}>{p.label}</Badge>
                </div>

                <p className="text-slate-400" style={{ fontSize: "0.875rem", lineHeight: 1.65 }}>
                  {p.description}
                </p>

                <ul className="space-y-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-slate-400" style={{ fontSize: "0.8rem" }}>
                      <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700"
                      style={{ fontSize: "0.72rem" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
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
