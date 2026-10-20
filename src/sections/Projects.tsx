type Project = {
  title: string;
  context?: string;
  description: string;
  decision?: string;
  result?: string;
  tech: string;
  role?: string;
  github?: string;
};

const featured: Project[] = [
  {
    title: 'Auto Furnishing – Traxmate',
    context: 'LIA · Combain, Lund',
    description:
      'Traxmate visar inomhuskartor, men rummen är tomma. Jag bygger ett Python-verktyg som läser byggnadsdata och automatiskt möblerar rum: bänkar i rutnät, möbler längs väggar, från skolor, till köpcentrum och flygplatser.',

    tech: 'Python · Geometri & koordinatprojektioner · OSM-liknande dataformat',
  },
  {
    title: 'Kvartersbion – Biosalongsbokningssystem',
    description:
      'Ett fullstack-grupprojekt där vi byggde en komplett biosalong med bokningssystem, användarhantering och databas.\nDet går att gå in på hemsidan, gå till filmer, kolla trailers, skapa inloggning, logga in, boka biljetter, se bokningshistorik samt prata med en AI chat som hjälper dig att navigera och med svar på frågor gällande filmer.',
    tech: 'React · TypeScript · C# · Minimal API · MySQL',
    role: 'Byggde bokningsflödet och bokningsbekräftelser från backend till frontend, samt delar av inloggningsfunktionaliteten.',
    github: 'https://github.com/Jolle-Jay/Kvarters-Bion',
  },
  {
    title: 'WordPlay – Ordspel',
    description:
      'Ett grupprojekt där vi byggde ett ordspel där man får en bokstav och ska fylla i olika kategorier med den bokstaven. Helt fokuserat på testning. Det går att spela över nätet då allting har blivit upplagt på Render, du skapar en lobby, väljer regler och skickar sedan en länk till dem som du vill spela med.',
    tech: 'React · TypeScript · C# · Minimal API',
    role: 'Endpoints, testning med Postman och XUnit, samt var delaktig i att bygga CI/CD pipeline.',
    github: 'https://github.com/LinaHalle/WordPlay',
  },
  {
    title: 'Location API',
    description:
      'Arkitekturen är uppbyggd i två delar — ett C# API som hanterar koordinathämtningen, och en Python-agent som bestämmer när och hur API:et ska anropas. Två språk, två repos, en integration',
    tech: 'C# · Minimal API · Nominatim · Python · Llama 8B',
    github: 'https://github.com/Jolle-Jay/LocationApi',
  },
];

const other: Project[] = [
  {
    title: 'EuroQuest – Resebyråapplikation',
    description:
      'Ett grupprojekt där vi byggde ett REST API för en resebyrå med möjlighet att boka resor, hotell och aktiviteter. Det var möjligt att boka en resa med boende, och med boendet så ingick det aktiviteter, utflykter och restaurang besök. Det gick även att välja endast resa utan tillbehör.',
    tech: 'C# · Minimal API · MySQL',
    role: 'Byggde endpoints och verifierade att de fungerade korrekt via manuell testning i Thunderclient.',
    github: 'https://github.com/Piexgear/EuroQuest',
  },
  {
    title: 'HealthCare System – Sjukhushanteringssystem',
    description:
      'Ett grupprojekt där vi byggde ett konsolbaserat sjukhussystem med rollbaserad åtkomstkontroll för patienter, personal och administratörer. Det går att logga in som patient, kolla sin journal, boka tid med läkare. Som personal går det att logga in kolla journaler, skicka journaler eller patienter till läkare. Samt som admin kan man hantera känslig data och lägga till / ta bort användare.',
    tech: 'C# · CSV-lagring · XUnit',
    role: 'Implementerade utloggningsfunktionalitet och patientjournal-hantering.',
    github: 'https://github.com/Mezea11/health-care-system',
  },
  {
    title: 'SMOLLLM',
    description:
      'Skolprojekt där vi byggde ett litet FastApi som hade en SmolLLM som kunde ta emot en CSV med ett dataset och med sin integrerade pipeline iterera och svara på enkla frågor.',
    tech: 'Python, SmolLLM, FastApi',
    role: 'Byggde allting med hjälp av alla andra små projekt som vi gick igenom samma kurs.',
    github: 'https://github.com/Jolle-Jay/Python-SmollLLM-KK2',
  },
  {
    title: 'Todo API – Entity Framework',
    description:
      'Byggde ett Todo API för att förstå hur Entity Framework fungerar och hur man kan integrera och skala upp API:er. Fokus låg på att förstå skillnaden mellan att skriva rå SQL och att låta Entity Framework hantera databasoperationerna — när man använder vad och varför.',
    tech: 'C# · Entity Framework',
    github: 'https://github.com/Jolle-Jay/TodoApi-EF',
  },
  {
    title: 'Todo API – Minimal API',
    description:
      'Ett enkelt Todo API byggt med Minimal API som grund för att lära mig hur routing och endpoints fungerar. Mitt första egna API-projekt. Byggde det för att förstå hur routing, HTTP-metoder och endpoints fungerar under huven innan jag använde dem i grupprojekt.',
    tech: 'C# · Minimal API',
    github: 'https://github.com/Jolle-Jay/todoAPi',
  },
];

function ProjectCard({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-accent text-xl">• {project.title}</h3>
      {project.context && <p className="opacity-70">{project.context}</p>}
      {!compact && (
        <p className="whitespace-pre-line">{project.description}</p>
      )}
      {!compact && project.decision && <p>Beslut: {project.decision}</p>}
      {!compact && project.result && <p>Resultat: {project.result}</p>}
      <p>Tech: {project.tech}</p>
      {project.role && <p>Min roll: {project.role}</p>}
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          🐙 GitHub →
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <div className="flex flex-col bg-transparent text-sand p-10">
      <div className="max-w-2xl w-full mx-auto flex flex-col gap-8">
        <h1 className="text-accent text-3xl">🛠️ Mina projekt</h1>

        {featured.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}

        <h2 className="text-accent text-2xl">🧪 Övriga projekt</h2>

        {other.map((p) => (
          <ProjectCard key={p.title} project={p} compact />
        ))}

        <a
          href="https://github.com/Jolle-Jay"
          target="_blank"
          rel="noopener noreferrer"
        >
          🐙 Se alla projekt på GitHub →
        </a>
      </div>
    </div>
  );
}
