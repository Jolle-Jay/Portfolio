export default function Skills() {
  return (
    <div className='flex flex-col bg-transparent text-sand p-10'>
      <div className="max-w-2xl w-full mx-auto flex flex-col gap-8">
        <h2 className="text-accent text-2xl">🖥️ Skillset</h2>
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-accent underline text-xl">Backend</h3>
            <p>C# · .NET Minimal API · Entity Framework · REST API</p>
          </div>
          <div>
            <h3 className="text-accent underline text-xl">Frontend</h3>
            <p>React · JavaScript/TypeScript · Vite · Tailwind CSS · CSS</p>
          </div>
          <div>
            <h3 className="text-accent underline text-xl">Databas</h3>
            <p>MySQL · PostgreSQL · MariaDB · MSSQL · SQL</p>
          </div>
          <div>
            <h3 className="text-accent underline text-xl">Testning</h3>
            <p>XUnit · Postman · Thunderclient</p>
          </div>
          <div>
            <h3 className="text-accent underline text-xl">Verktyg</h3>
            <p>Git · GitHub · CI/CD pipeline (GitHub Actions)</p>
          </div>
          <div>
            <h3 className="text-accent underline text-xl">AI/Övrigt</h3>
            <p>Python (grunderna) · Ollama · Nominatim API-integration · GitHub Copilot</p>
          </div>
        </div>
      </div>
    </div>
  );
}
