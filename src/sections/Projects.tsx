export default function Projects() {
  return (
    <div className='flex flex-col bg-transparent text-sand p-10'>
      <div className="max-w-2xl w-full mx-auto flex flex-col gap-8">
        <h1 className="text-accent text-3xl bg-secondary rounded-lg">🛠️ Mina projekt</h1>

        {/* Skolprojekt */}
        <h2 className="text-accent text-2xl bg-secondary rounded-lg">🎓 Skolprojekt</h2>

        <div className='flex flex-col gap-2'>
          <h3 className='text-accent text-xl'>• EuroQuest – Resebyråapplikation</h3>
          <p>Ett grupprojekt där vi byggde ett REST API för en resebyrå med möjlighet att boka resor, hotell och aktiviteter. Det var möjligt att boka en
            resa med boende, och med boendet så ingick det aktiviteter, utflykter och restaurang besök. Det gick även att välja endast resa utan tillbehör.
          </p>
          <p>Tech: C# · Minimal API · MySQL</p>
          <p>Min roll: Byggde endpoints och verifierade att de fungerade korrekt via manuell testning i Thunderclient.</p>
          <a href="https://github.com/Piexgear/EuroQuest" target="_blank" rel="noopener noreferrer">🐙 GitHub →</a>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='text-accent text-xl'>• Kvartersbion – Biosalongsbokningssystem</h3>
          <p>Ett fullstack-grupprojekt där vi byggde en komplett biosalong med bokningssystem, användarhantering och databas.
            Det går att gå in på hemsidan, gå till filmer, kolla trailers, skapa inloggning, logga in, boka biljetter, se bokningshistorik samt prata med en AI chat
            som hjälper dig att navigera och med svar på frågor gällande filmer.
          </p>
          <p>Tech: React · TypeScript · C# · Minimal API · MySQL</p>
          <p>Min roll: Byggde bokningsflödet och bokningsbekräftelser från backend till frontend, samt delar av inloggningsfunktionaliteten.</p>
          <a href="https://github.com/Jolle-Jay/Kvarters-Bion" target="_blank" rel="noopener noreferrer">🐙 GitHub →</a>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='text-accent text-xl'>• HealthCare System – Sjukhushanteringssystem</h3>
          <p>Ett grupprojekt där vi byggde ett konsolbaserat sjukhussystem med rollbaserad åtkomstkontroll för patienter, personal och administratörer.
            Det går att logga in som patient, kolla sin journal, boka tid med läkare. Som personal går det att logga in kolla journaler, skicka journaler eller patienter
            till läkare.
          </p>
          <p>Tech: C# · CSV-lagring · XUnit</p>
          <p>Min roll: Implementerade utloggningsfunktionalitet och patientjournal-hantering.</p>
          <a href="https://github.com/Mezea11/health-care-system/branches" target="_blank" rel="noopener noreferrer">🐙 GitHub →</a>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='text-accent text-xl'>• WordPlay – Ordspel</h3>
          <p>Ett grupprojekt där vi byggde ett ordspel där man får en bokstav och ska fylla i olika kategorier med den bokstaven. Helt fokuserat på testning.</p>
          <p>Tech: React · TypeScript · C# · Minimal API</p>
          <p>Min roll: Endpoints, testning med Postman och XUnit, samt var delaktid i att bygga CI/CD pipeline.</p>
          <a href="https://github.com/LinaHalle/WordPlay" target="_blank" rel="noopener noreferrer">🐙 GitHub →</a>
        </div>

        {/* Egna projekt */}
        <h2 className="text-accent text-2xl bg-secondary rounded-lg">🔨 Egna projekt</h2>

        <div className='flex flex-col gap-2'>
          <h3 className='text-accent text-xl'>• Location API</h3>
          <p>Ett eget projekt där jag byggde ett C# API som hämtar GPS-koordinater via OpenStreetMap, och integrerade det med en lokal AI-agent (Llama 8B) som ett tool — agenten bestämmer när och hur API:et ska anropas.</p>
          <p>Tech: C# · Minimal API · Nominatim · Python · Llama 8B</p>
          <a href="https://github.com/Jolle-Jay/LocationApi" target="_blank" rel="noopener noreferrer">🐙 GitHub →</a>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='text-accent text-xl'>• Todo API – Entity Framework</h3>
          <p>Byggde ett Todo API för att förstå hur Entity Framework fungerar och hur man kan integrera och skala upp API:er.</p>
          <p>Tech: C# · Entity Framework</p>
          <a href="https://github.com/Jolle-Jay/TodoApi-EF" target="_blank" rel="noopener noreferrer">🐙 GitHub →</a>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='text-accent text-xl'>• Todo API – Minimal API</h3>
          <p>Ett enkelt Todo API byggt med Minimal API som grund för att lära mig hur routing och endpoints fungerar.</p>
          <p>Tech: C# · Minimal API</p>
          <a href="https://github.com/Jolle-Jay/todoAPi" target="_blank" rel="noopener noreferrer">🐙 GitHub →</a>
        </div>

        <a href="https://github.com/Jolle-Jay" target="_blank" rel="noopener noreferrer">🐙 Se alla projekt på GitHub →</a>
      </div>
    </div>
  );
}
