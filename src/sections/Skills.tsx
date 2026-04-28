export default function Skills() {
  return (
    <div className='flex flex-col bg-transparent text-orange-300 p-10'>
      <div className="max-w-2xl mx-auto flex flex-col gap-8 ">
        <h2 className="text-yellow-200 text-2xl bg-green-800 rounded-lg">🖥️ Tekniska skills</h2>
        <div className="flex flex-col gap-4">
          <div className="text-center">
            <h3 className="text-orange-500 underline text-xl">Backend</h3>
            <p> C# · .NET Minimal API · Entity Framework · REST API </p>

          </div>
          <div className="text-center">
            <h3 className="text-orange-500 underline text-xl">Frontend</h3>
            <p>React · TypeScript · Vite · Tailwind CSS</p>
          </div>
          <div className="text-center">
            <h3 className="text-orange-500 underline text-xl">Databas</h3>
            <p>MySQL · SQL</p>
          </div>
          <div className="text-center">
            <h3 className="text-orange-500 underline text-xl">Testning</h3>
            <p>XUnit · Postman · Thunderclient</p>

          </div>
          <div className="text-center">
            <h3 className="text-orange-500 underline text-xl">Verktyg</h3>
            <p>Git · GitHub · CI/CD pipeline</p>

          </div>
          <div className="text-center">
            <h3 className="text-orange-500 underline text-xl">AI/Övrigt</h3>
            <p>Python (grunderna) · Ollama · Nominatim API-integration</p>

          </div>

        </div>
      </div>
    </div>

  );
}