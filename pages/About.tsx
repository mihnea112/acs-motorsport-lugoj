import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <>
      <header className="relative bg-gray-900 h-96 flex items-center justify-center clip-slant overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <img
            alt="Rally Car in Action"
            className="w-full h-full object-cover opacity-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYw1qY0MjsQfKm5pFpPOH7JJ7_Onufqt1L49I-gQqdwlgyL1jm8Iqm8LUEJq3ynNQVh9F-O5HiHXXhAg_m5eSZuTm0_b-hq_s-yPffq7Cq8I0P060rbP0oKnxDXPg8IcFfUfzwKc_QKl4P4DXLLx2mIqEbFHk5D3G3cOOshKAZUfr0TcUTzxC1m1Y8mVLiXhmUiQuSfG_rH6BNLt0EzGDYNVo-ghxVb8vTTw2hoS0O48M2jU6USvZ9a-p2U3GwQq10k5K98RAvi-gJ"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-80"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <h1 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tight mb-4 drop-shadow-lg">
            Pasiune pentru <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-primary">Motorsport</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto">
            Promovăm performanța, siguranța și spiritul de echipă în inima Banatului.
          </p>
        </div>
      </header>

      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:-rotate-1 transition-transform duration-300">
              <img
                alt="Echipa ACS Motorsport Lugoj la start"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMTP3O3RcRGfpmXYtb7R92SkpPgpAWdJpTMY_XcO1cIyzetvZfTn30bBmzPHoPrY3qye-0IG2VHafA-kbXsJoeCIU2x6dWUdInu2HNH91ufoiG1o50RRjCdQ2CG9O-na1A_5tkxBBdSX1brJxeNjBrc5hnAd7XNozUo7VdhNCGQQNbZ_9NbMY0uw04vhl78FP9K7vp2i4UigaqRPTAneYF3AgSmU82n6u8hQKZAQo7tesSlmG3GCsI79gNs3vw92_wumXIZojV3rPZ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white font-display font-bold text-lg">
                Raliul Perla Banatului
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-4">
              <span className="h-1 w-12 bg-primary mr-4 rounded-full"></span>
              <h2 className="text-primary font-bold uppercase tracking-wider text-sm">Cine suntem</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Tradiție și Adrenalină la Lugoj
            </h3>
            <div className="prose prose-lg text-gray-600 dark:text-gray-300">
              <p className="mb-4">
                <strong>ACS Motorsport Lugoj</strong> a luat naștere din dorința de a revitaliza tradiția automobilistică în zona de vest a țării. Suntem un club dedicat organizării de evenimente de raliu și promovării tinerelor talente în motorsportul românesc.
              </p>
              <p>
                Istoria noastră începe cu un grup de pasionați care au înțeles că motorsportul nu este doar despre viteză, ci despre disciplină, inginerie și comunitate. De la primele etape locale, am crescut constant, devenind un punct de referință în calendarul automobilistic național.
              </p>
            </div>
            <div className="mt-8">
              <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 dark:bg-primary dark:hover:bg-red-700 transition-colors">
                Istoricul Clubului
                <span className="material-icons ml-2">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-light dark:bg-surface-dark py-16 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">Misiune și Valori</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Principiile care ne ghidează pe traseu și în afara lui.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-background-dark p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-secondary group">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons text-3xl text-secondary dark:text-blue-300">security</span>
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">Siguranță</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Prioritatea zero în motorsport. Promovăm condusul defensiv și respectarea strictă a normelor de securitate în toate competițiile noastre.
              </p>
            </div>
            <div className="bg-white dark:bg-background-dark p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-accent group">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons text-3xl text-yellow-600 dark:text-yellow-300">handshake</span>
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">Fair-Play</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Competiția onestă este esența sportului. Respectăm adversarii, regulamentele și integritatea fiecărui participant la evenimentele noastre.
              </p>
            </div>
            <div className="bg-white dark:bg-background-dark p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary group">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons text-3xl text-primary dark:text-red-300">groups</span>
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">Comunitate</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Suntem o familie unită de pasiunea pentru motoare. Organizăm evenimente pentru publicul larg și susținem comunitatea locală din Lugoj.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">Echipa Noastră</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Oamenii din spatele organizării</p>
          </div>
          <a className="hidden md:inline-flex items-center text-primary font-semibold hover:text-red-700 mt-4 md:mt-0" href="#">
            Vezi toată organigrama <span className="material-icons ml-1 text-sm">arrow_forward_ios</span>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Ion Popescu", role: "Președinte Club", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVRvGTf_4rQ7al_qQScwQov6K7dcQhTFGGVErQZz06FXikj2D-cdSQ1gTncAJvJHmrQSIRWS7OFPsJyiGGTzV7LsCzE0dF2IJYhvJuTZBCrdiBbG-LuerZjPl-rEaHUps-MPj1Njmfz33y14G8lSyEjEl5CcqpPk2WG9AKTPy7uz-GNwXStH5jDanGLuyfz3lpzqpA2THcrCdg4xRqMfjP4mS8Unu0Ec-LNSM8cIUFJeic4ONtnCc28_dzDWifi_T4iM185BN5LAC5", color: "bg-primary" },
            { name: "Maria Ionescu", role: "Director Cursă", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmb43qTqR-rKeKve0CXnuyjgjFyQ7jEnw_2El1RBX1GggvnIn2WcBz2FN8WrgkVvgVk74qqPZ613dYwJQ_YYhDmxe1J1qp_v12FoMEphEkuGXObp9bldzfOlHQXgkuz-5-kdpqfH_RsgYwdJj8UORuR7XynluPO9Eo1sQMINbORFmm8TsBpjdDnK4_YJOMq7CSv620rxFMMsLMQhv3Xt357hQwftgooKzgIOseCXtPwR8ia0cQpguVEdS83_qtxFrG-pLzh9QfMTuS", color: "bg-accent" },
            { name: "Andrei Radu", role: "Responsabil Tehnic", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC64Rxwv5jKE1HIROOM7DCHqwobRSA-ufCSsHcDMzyJqLLBunR6iq51bMaPMuzEbUuXpLSOTCpS0GyRUn1H_Tr1AcCDY4JJa8xy9eZp6balEB2gUJic_hIGsqLKcKdOFJ5QlhysGs_BUDhIcQsjAWtgCHFvN6gakoP7Ee7u5YdANUqZ3GEleMRrRGWx9k2ZYLTu_ZnL8qU1DQWc4FY7Wd9AtFSuZb-lmagKR4wIfFnHxGEljLXwo4NGYbOeUZI8zUxhM_3sHhl9MqD3", color: "bg-secondary" },
            { name: "Vlad Dumitrescu", role: "Secretar General", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtVbV9KSI7gHls5Bcxl8-s3gFQjBLlSZ2AqLvMraufKL1uleK_liCIZgf1Z8Bd6XwqCSfwmHPyZ1NCx-RQ_rvN2AdG8YywBhRq93GBcg2hHdrnLVXdt8APaaX-JQwizlYifqqk_EvO4otUIcXrxBbrblseVXWFf7Dqun5hI1l5kplNosAP8UzuxOXe9Psmol4hzkdl26O7LEIZSzBY63TncAskl17TSkL5KMnEDvZJC_M6oBHblqGzjQSv1M8hBYqfIclEskjGJioC", color: "bg-primary" },
          ].map((member, i) => (
            <div key={i} className="group relative">
              <div className="relative w-full h-80 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
                <img
                  alt={member.role}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 filter grayscale group-hover:grayscale-0"
                  src={member.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <h3 className="text-white text-lg font-bold font-display">{member.name}</h3>
                  <p className="text-gray-300 text-sm font-medium">{member.role}</p>
                  <div className={`h-1 w-0 ${member.color} group-hover:w-full transition-all duration-300 mt-2`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white dark:bg-black py-12 border-t border-gray-200 dark:border-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 opacity-80 hover:opacity-100 transition-opacity">
            <div className="text-center md:text-right">
              <span className="block text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">Afiliat la</span>
              <div className="flex items-center justify-center space-x-2">
                <div className="text-3xl font-black italic tracking-tighter text-gray-800 dark:text-gray-200">FRAS</div>
                <div className="h-8 w-px bg-gray-300 dark:bg-gray-700 mx-2"></div>
                <div className="text-xs text-left leading-tight text-gray-600 dark:text-gray-400 font-semibold uppercase w-24">Federația Română de Automobilism Sportiv</div>
              </div>
            </div>
            <div className="hidden md:block h-12 w-px bg-gray-300 dark:bg-gray-700"></div>
            <div className="text-center md:text-left">
              <span className="block text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">Parteneri Locali</span>
              <div className="flex space-x-6 items-center justify-center grayscale hover:grayscale-0 transition-all">
                <span className="font-bold text-gray-400 dark:text-gray-600 text-xl">Primăria Lugoj</span>
                <span className="font-bold text-gray-400 dark:text-gray-600 text-xl">•</span>
                <span className="font-bold text-gray-400 dark:text-gray-600 text-xl">Sponsor 1</span>
                <span className="font-bold text-gray-400 dark:text-gray-600 text-xl">•</span>
                <span className="font-bold text-gray-400 dark:text-gray-600 text-xl">Sponsor 2</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;