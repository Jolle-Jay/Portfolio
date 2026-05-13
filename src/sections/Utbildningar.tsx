export default function Utbildningar() {
  return (
    <div className='flex flex-col bg-transparent text-sand p-10'>
      <div className="max-w-2xl w-full mx-auto flex flex-col gap-4">
        <h1 className="text-accent text-3xl bg-secondary rounded-lg">🎓 Utbildningar</h1>
        <div>
          <h3 className="text-accent underline text-2xl">Mjukvaruutvecklare</h3>
          <p>Inriktning AI Handelsakademin Malmö 2025-2027</p>
        </div>
        <div>
          <h3 className="text-accent underline text-2xl">Ledarskap & Coaching</h3>
          <p>Herold Communication 2023</p>
        </div>
        <div>
          <h3 className="text-accent underline text-2xl">Trelleborg gymnasium</h3>
          <p>Snickarlinje 2009-2012</p>
        </div>
      </div>
    </div>
  );
}
