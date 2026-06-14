import { Monitor, Code2, Database, Terminal, Network } from "lucide-react";

const skillGroups = [
  {
    icon: Monitor,
    category: "Frontend",
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20",
    skills: [
      { name: "HTML", level: 75 },
      { name: "CSS", level: 70 },
      { name: "PHP", level: 50 },
    ],
  },
  {
    icon: Code2,
    category: "Backend / Systems",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    skills: [
      { name: "Data normalization concepts", level: 35 },
      { name: "System Design", level: 60 },
      { name: "Client-server architecture", level: 50 },
    ],
  },
  {
    icon: Database,
    category: "Database",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    skills: [
      { name: "MySQL", level: 70 },
      { name: "DB Structure Design", level: 65 },
      { name: "SQL Queries", level: 65 },
    ],
  },
  {
    icon: Terminal,
    category: "Linux / System",
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
    skills: [
      { name: "Linux Administration", level: 65 },
      { name: "SSH Configuration", level: 60 },
      { name: "File Sharing (Samba/NFS)", level: 55 },
      { name: "Server Setup", level: 60 },
    ],
  },
  {
    icon: Network,
    category: "Networking",
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
    skills: [
      { name: "Subnetting", level: 65 },
      { name: "Routing Concepts", level: 55 },
      { name: "Network Configuration", level: 60 },
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
              <div key={group.category} className={`rounded-xl border ${group.bg} p-5`}>
                <div className={`flex items-center gap-2 mb-5 ${group.color}`}>
                  <Icon size={18} />
                  <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>{group.category}</span>
                </div>
                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-300" style={{ fontSize: "0.82rem" }}>
                          {skill.name}
                        </span>
                        <span className="text-slate-500" style={{ fontSize: "0.75rem" }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-slate-800">
                        <div
                          className={`h-1.5 rounded-full bg-gradient-to-r ${getGradient(group.color)}`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
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

function getGradient(colorClass: string) {
  const map: Record<string, string> = {
    "text-orange-400": "from-orange-500 to-amber-400",
    "text-blue-400": "from-blue-600 to-blue-400",
    "text-cyan-400": "from-cyan-600 to-cyan-400",
    "text-green-400": "from-green-600 to-green-400",
    "text-purple-400": "from-purple-600 to-purple-400",
  };
  return map[colorClass] ?? "from-blue-600 to-blue-400";
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
