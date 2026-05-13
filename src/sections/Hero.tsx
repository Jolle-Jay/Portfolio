import me from '../assets/me.jpg';

export default function Hero() {
  return (
    <div className='flex flex-col bg-transparent gap-4 text-sand p-10 md:pt-40'>
      <div className='flex flex-col md:flex-row gap-12 justify-center'>

        <div className='flex flex-col items-center'>
          <h1 className='text-4xl text-accent'>Jonathan Lopez</h1>
          <img src={me} alt="me" className="w-60 h-60 object-cover rounded-full mt-16" />
        </div>

        <div className='flex flex-col text-sand gap-3 max-w-md'>
          <div className='border border-accent/40 rounded-lg p-6 bg-secondary flex flex-col gap-2'>
            <p>📚 Student inom Mjukvaruutveckling med inriktning på AI.</p>
            <p>🌱 Nyfiken och motiverad, med ett brinnande intresse för att hjälpa andra, samarbeta och kontinuerligt lära mig nya saker</p>
          </div>
          <div className='border border-accent/40 rounded-lg p-6 bg-secondary flex flex-col gap-2'>
            <a className="break-all" href="mailto:jonathan.cesar.henry.lopez@student.nbi-handelsakademin.se" target="_blank" rel="noopener noreferrer">✉️ jonathan.cesar.henry.lopez@student.nbi-handelsakademin.se</a>
            <div>📞 +46 761-105175</div>
            <div>📍 Malmö</div>
            <div>🌐 Svenska, Engelska, Spanska</div>
            <a href="https://linkedin.com/in/jonathan-lopez-a53782390" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
            <a href="https://github.com/Jolle-Jay" target="_blank" rel="noopener noreferrer">🐙 Se alla projekt på GitHub →</a>
          </div>
        </div>

      </div>
    </div>
  );
}
