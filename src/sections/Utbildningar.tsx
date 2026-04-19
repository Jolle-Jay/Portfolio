export default function Utbildningar() {
  return (
    <div className='flex flex-col bg-green-900 text-orange-300 p-10'>
      <div className="max-w-2xl mx-auto flex flex-col gap-4">
        <h1 className="text-orange-500 text-3xl bg-orange-800 rounded-lg">🎓 Utbildningar</h1>
        <div className="text-center">
          <h3 className="text-orange-500 underline text-2xl">Mjukvaruutvecklare </h3>
          <p>Inriktning AI Handelsakademien Malmö 2025-2027</p>
        </div>
        <div className="text-center">
          <h3 className="text-orange-500 underline text-2xl">Ledarskap & Coaching</h3>
          <p> Herold Communication 2023</p>
        </div>
        <div className="text-center">
          <h3 className="text-orange-500 underline text-2xl">Trelleborg gymnasium </h3>
          <p>Snickarlinje 2009-2012</p>
        </div>


      </div>
    </div>
  );
}