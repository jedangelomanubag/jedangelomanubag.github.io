import { useEffect, useState } from "react";
import { fetchGitHubRepos } from "../../lib/github";

export function Projects() {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    fetchGitHubRepos().then(setRepos).catch(console.error);
  }, []);

  return (
    <section id="projects" className="p-10 text-white">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            className="p-4 rounded-xl bg-[#111b2e] hover:scale-[1.02] transition"
          >
            <h3 className="text-lg font-semibold text-blue-400">
              {repo.name}
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              {repo.description || "No description"}
            </p>

            <div className="text-xs mt-3 text-gray-500">
              {repo.language} • ⭐ {repo.stars}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
