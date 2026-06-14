import { Monitor, Code2, Database, Terminal, Network } from "lucide-react";

const skillGroups = [
  {
    icon: Monitor,
    category: "Frontend",
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "PHP" },
    ],
  },
  {
    icon: Code2,
    category: "Backend / Systems",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    skills: [
      { name: "System Design " },
      { name: "Data normalization concepts" },
      { name: "Client-server architecture" },
    ],
  },
  {
    icon: Database,
    category: "Database",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    skills: [
      { name: "MySQL" },
      { name: "DB Structure Design" },
      { name: "SQL Queries" },
    ],
  },
  {
    icon: Terminal,
    category: "Linux / System",
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
    skills: [
      { name: "Linux Administration" },
      { name: "SSH Configuration" },
      { name: "File Sharing (Samba/NFS)" },
      { name: "Server Setup" },
    ],
  },
  {
    icon: Network,
    category: "Networking",
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
    skills: [
      { name: "Subnetting" },
      { name: "Routing Concepts" },
      { name: "Network Configuration" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="bg-[#0d1424] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Skills</SectionLabel>

        <h2 className="text-white mb-2" style={{ fontSize: "2rem", fontWeight: 700 }}>
          Technical Toolkit
        </h2>

        <p className="text-slate-400 mb-12" style={{ fontSize: "0.97rem" }}>
          Skills built through coursework, capstone development, and hands-on lab practice.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.category}
                className={`rounded-xl border ${group.bg} p-5`}
              >
                <div className={`flex items-center gap-2 mb-5 ${group.color}`}>
                  <Icon size={18} />
                  <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>
                    {group.category}
                  </span>
                </div>

                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div
                      key={`${group.category}-${skill.name}`}
                      className="text-slate-300 text-sm"
                    >
                      {skill.name}
                    </div>
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
      <span className="text-blue-400 uppercase tracking-widest text-xs font-semibold">
        {children}
      </span>
    </div>
  );
}