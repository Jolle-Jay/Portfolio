import me from '../assets/me.jpg';

export default function Hero() {
  return (
    <div className='flex flex-col bg-green-900 gap-4 text-orange-200 p-20 pt-40'>
      <div className='flex flex-col md:flex-row gap-12 justify-center'>


        <div className='flex flex-col items-center'>
          <h1 className='text-4xl mb-10'>Jonathan Lopez</h1>
          <img src={me} alt="me" className="w-58 h-58 object-cover rounded-full" />
        </div>


        <div className='flex flex-col text-orange-300 gap-2'>
          <div className='border border-orange-300 rounded-lg p-4 '>
            <p>📚  Student inom Mjukvaruuteckling med inriktning AI.</p>
            <p>🌱 Nyfiken och motiverad, med ett starkt intresse för att <br />hjälpa andra, sammarbeta och en vilja att alltid fortsätta lära</p>
          </div>
          <div className='border border-orange-300 rounded-lg p-4'>
            <a href="mailto:jonathan.cesar.henry.lopez@student.nbi-handelsakademin.se" target="_blank" rel="noopener noreferrer">✉️ jonathan.cesar.henry.lopez@student.nbi-handelsakademin.se</a>
            <div>📞 +46 761-105175</div>
            <div>📍 Malmö</div>
            <div>🌐 Svenska, Engelska, Spanska</div>
          </div>
          <a href="https://linkedin.com/in/jonathan-lopez-a53782390" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>

        </div>

      </div>
    </div>
  );
}