export async function fetchGitHubRepos() {
  const res = await fetch(
    "https://api.github.com/users/jedangelomanubag/repos"
  );

  if (!res.ok) throw new Error("Failed to fetch GitHub repos");

  const data = await res.json();

  return data.map((repo: any) => ({
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
    stars: repo.stargazers_count,
    language: repo.language,
  }));
}
