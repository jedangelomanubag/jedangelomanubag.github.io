export function Projects() {
  const projects = [
    {
      name: "Cross-Platform Utility Billing and Monitoring System",
      description:
        "A full-stack utility billing system with web administration portal, consumer and utility reader mobile applications, REST API integration, analytics, and SMS notification support.",
      language: "PHP • MySQL • REST API • Mobile",
      stars: "Capstone Project",
      url: "https://github.com/jedangelomanubag/Cross-Platform-Utility-Billing-System",
    },
    {
      name: "NetProbe (NDAT)",
      description:
        "A portable network diagnostic analysis tool that performs network health checks, DNS analysis, gateway detection, routing diagnostics, device discovery, and report generation.",
      language: "Python • Linux • Networking",
      stars: "Network Diagnostic Tool",
      url: "https://github.com/jedangelomanubag/NetProbe",
    },
  ];

  return (
    <section id="projects" className="p-10 text-white">
      <h2 className="text-2xl font-bold mb-6">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-[#111b2e] hover:scale-[1.02] transition"
          >
            <h3 className="text-lg font-semibold text-blue-400">
              {project.name}
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              {project.description}
            </p>

            <div className="text-xs mt-3 text-gray-500">
              {project.language}
            </div>

            <div className="text-xs mt-2 text-green-400">
              {project.stars}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
