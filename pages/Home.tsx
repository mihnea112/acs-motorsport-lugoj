import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background-dark">
        <div className="absolute inset-0 z-0">
          <img
            alt="Rally car speeding on dirt track"
            className="w-full h-full object-cover opacity-30"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq4qh9lmjcnXZ_mvWqX674Yq0epPOVtq2xuSTv6eAhG8r-yeDIMZ1_JwPdYags1lcTsBDmYjABh6BTU7Uqaech_DsEhJcff3pdoPtILAoX3lTWgv0Ou5xIebsBIY3xYksJiopCvFzKyJrMWv7C4Jo6SNh3t7dnW3r7dcEa86jZW0n7o2wkmcVx0V-6QuNNtvOINtOMAy7Y3QcmNL0uVqRKxMgmiSod8ZUM-wMVB-zphwsatKNuF_fzoCw8jW-eEChTBgTOceMlvAga"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/90 to-transparent"></div>
          <div className="absolute inset-0 bg-checkered-pattern opacity-10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-2/3 lg:w-1/2 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary/20 border border-secondary/40 text-blue-400 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-xs font-bold tracking-wider uppercase">Sezonul 2024</span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] mb-6 uppercase">
              Pasiune pentru <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Viteză</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg border-l-4 border-accent pl-4">
              ACS Motorsport Lugoj: Raliuri, competiții și evenimente auto de top în vestul României.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/events" className="bg-primary hover:bg-red-700 text-white text-center font-display font-bold text-xl tracking-wide py-3 px-8 rounded skew-x-[-10deg] transition-all hover:translate-y-[-2px] shadow-lg shadow-primary/30">
                <span className="skew-x-[10deg] inline-block">VEZI EVENIMENTELE</span>
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white hover:border-accent hover:text-accent text-white text-center font-display font-bold text-xl tracking-wide py-3 px-8 rounded skew-x-[-10deg] transition-all hover:bg-white/5">
                <span className="skew-x-[10deg] inline-block">ÎNSCRIERE RAPIDĂ</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Strip */}
        <div className="absolute bottom-0 right-0 w-1/3 h-2 flex">
          <div className="h-full w-1/3 bg-secondary"></div>
          <div className="h-full w-1/3 bg-accent"></div>
          <div className="h-full w-1/3 bg-primary"></div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-surface-light dark:bg-surface-dark border-y border-gray-200 dark:border-gray-800 relative z-20 -mt-8 mx-4 md:mx-auto max-w-6xl rounded shadow-xl flex flex-wrap justify-around py-6 md:py-8">
        <div className="text-center px-4 w-1/2 md:w-auto mb-4 md:mb-0">
          <h3 className="font-display font-bold text-4xl md:text-5xl text-primary">15+</h3>
          <p className="text-xs uppercase tracking-widest font-bold text-gray-500 dark:text-gray-400 mt-1">Evenimente</p>
        </div>
        <div className="text-center px-4 w-1/2 md:w-auto mb-4 md:mb-0 border-l border-gray-200 dark:border-gray-700">
          <h3 className="font-display font-bold text-4xl md:text-5xl text-primary">500+</h3>
          <p className="text-xs uppercase tracking-widest font-bold text-gray-500 dark:text-gray-400 mt-1">Participanți</p>
        </div>
        <div className="text-center px-4 w-1/2 md:w-auto border-l border-gray-200 dark:border-gray-700">
          <h3 className="font-display font-bold text-4xl md:text-5xl text-primary">10</h3>
          <p className="text-xs uppercase tracking-widest font-bold text-gray-500 dark:text-gray-400 mt-1">Ani Experiență</p>
        </div>
        <div className="text-center px-4 w-1/2 md:w-auto border-l border-gray-200 dark:border-gray-700">
          <h3 className="font-display font-bold text-4xl md:text-5xl text-primary">100%</h3>
          <p className="text-xs uppercase tracking-widest font-bold text-gray-500 dark:text-gray-400 mt-1">Pasiune</p>
        </div>
      </div>

      {/* Next Event Section */}
      <section className="py-20 bg-background-light dark:bg-background-dark" id="events">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white uppercase mb-2">Următorul <span className="text-primary">Eveniment</span></h2>
              <div className="h-1 w-24 bg-accent"></div>
            </div>
            <div className="hidden md:flex space-x-2 mt-4 md:mt-0">
              <div className="bg-gray-200 dark:bg-gray-800 p-2 rounded cursor-pointer hover:bg-primary hover:text-white transition-colors text-gray-600 dark:text-gray-400">
                <span className="material-icons-round">chevron_left</span>
              </div>
              <div className="bg-gray-200 dark:bg-gray-800 p-2 rounded cursor-pointer hover:bg-primary hover:text-white transition-colors text-gray-600 dark:text-gray-400">
                <span className="material-icons-round">chevron_right</span>
              </div>
            </div>
          </div>
          
          <div className="bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col lg:flex-row group">
            <div className="lg:w-1/2 relative overflow-hidden h-64 lg:h-auto">
              <img
                alt="Rally car in action"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3cRj3A8vvG4oqtxXgGC8VRfm57b56squD1Jp3UjbBgaeTg3JzLN9sjDQMsTGHzQa_Cu2e_4xoiWwpVDU2geaQ9pQYGuEu5peCpvCcymqsVUNF2YV7JmbAh2lzIz75_8rLwFm2SQRVV803m0EJDT7WDnLKkwtPGXIvThOr9m21QActAs5-Yxvn-C8U05BoTIveGKm2R_cXkTMrv1aYiUqbp-jweNLDyEqkeLHDCjhFHRiTILcvrAImqAqL_2QfdhWQ7VdGXCPSRG3R"
              />
              <div className="absolute top-4 left-4 bg-accent text-black font-bold px-3 py-1 rounded text-sm uppercase tracking-wide">
                Înscrieri Deschise
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent lg:hidden"></div>
              <div className="absolute bottom-4 left-4 lg:hidden">
                <span className="block text-white font-display text-3xl font-bold">Raliul Timișului 2024</span>
              </div>
            </div>
            
            <div className="lg:w-1/2 p-8 flex flex-col justify-between relative bg-surface-light dark:bg-surface-dark">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <span className="material-icons-round text-9xl text-gray-900 dark:text-white">sports_motorsports</span>
              </div>
              <div>
                <div className="flex items-center space-x-2 text-primary mb-2">
                  <span className="material-icons-round">calendar_today</span>
                  <span className="font-bold text-lg">25-26 Mai 2024</span>
                </div>
                <h3 className="hidden lg:block font-display font-bold text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4 uppercase leading-none">
                  Raliul Timișului <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-400 dark:to-gray-600">Ediția a V-a</span>
                </h3>
                <div className="flex items-start space-x-2 text-gray-600 dark:text-gray-400 mb-6">
                  <span className="material-icons-round mt-1">location_on</span>
                  <p className="text-lg">Traseu mixt: Lugoj - Făget - Surduc. <br />Start festiv în Piața Victoriei.</p>
                </div>
                
                <div className="grid grid-cols-4 gap-2 md:gap-4 mb-8">
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 md:p-3 rounded text-center border border-gray-200 dark:border-gray-700">
                    <span className="block font-display text-2xl md:text-3xl font-bold text-primary">12</span>
                    <span className="text-[10px] uppercase font-bold text-gray-500">Zile</span>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 md:p-3 rounded text-center border border-gray-200 dark:border-gray-700">
                    <span className="block font-display text-2xl md:text-3xl font-bold text-primary">08</span>
                    <span className="text-[10px] uppercase font-bold text-gray-500">Ore</span>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 md:p-3 rounded text-center border border-gray-200 dark:border-gray-700">
                    <span className="block font-display text-2xl md:text-3xl font-bold text-primary">45</span>
                    <span className="text-[10px] uppercase font-bold text-gray-500">Min</span>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 md:p-3 rounded text-center border border-gray-200 dark:border-gray-700">
                    <span className="block font-display text-2xl md:text-3xl font-bold text-primary">10</span>
                    <span className="text-[10px] uppercase font-bold text-gray-500">Sec</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button className="flex-1 bg-primary hover:bg-red-700 text-white py-3 px-6 rounded font-bold uppercase tracking-wider text-sm transition-colors shadow-lg shadow-primary/20">
                  Înscrie-te acum
                </button>
                <button className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 py-3 px-6 rounded font-bold uppercase tracking-wider text-sm transition-colors">
                  Regulament & Detalii
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Participate */}
      <section className="py-20 bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white uppercase mb-4">De ce să participi?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Organizare profesională, securitate la standarde FRAS și o comunitate unită de pasionați de motorsport.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'security', color: 'text-secondary', bg: 'bg-secondary', title: 'Siguranță', desc: 'Prioritatea noastră numărul 1. Trasee verificate și măsuri de securitate stricte pentru piloți și spectatori.' },
              { icon: 'gavel', color: 'text-accent', bg: 'bg-accent', title: 'Regulament FRAS', desc: 'Competiții organizate sub egida Federației Române de Automobilism Sportiv, respectând toate normele.' },
              { icon: 'timer', color: 'text-primary', bg: 'bg-primary', title: 'Timing Precis', desc: 'Sisteme de cronometrare profesionale pentru a asigura corectitudinea rezultatelor la milisecundă.' },
              { icon: 'groups', color: 'text-green-500', bg: 'bg-green-500', title: 'Comunitate', desc: 'Mai mult decât curse. Un loc unde pasionații de auto se întâlnesc, schimbă experiențe și leagă prietenii.' },
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-colors group">
                <div className={`w-14 h-14 ${item.bg}/10 rounded-full flex items-center justify-center mb-6 group-hover:${item.bg}/20 transition-colors`}>
                  <span className={`material-icons-round ${item.color} text-3xl`}>{item.icon}</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-2 uppercase">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold tracking-[0.3em] uppercase text-gray-400 mb-8">Parteneri Oficiali</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {['local_gas_station:PETROL', 'build:AUTO PARTS', 'directions_car:RACING TIRES', 'shield:INSURANCE', 'campaign:MEDIA GROUP'].map((partner, i) => {
              const [icon, name] = partner.split(':');
              return (
                <div key={i} className="text-2xl font-display font-bold text-gray-400 dark:text-gray-600 flex items-center space-x-2">
                  <span className="material-icons-round">{icon}</span>
                  <span>{name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-checkered-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white uppercase mb-6">Gata de Start?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">Nu rata următoarea competiție. Înscrie-te în newsletter pentru a primi noutăți despre evenimente.</p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
            <input className="flex-grow px-4 py-3 rounded text-gray-900 border-none focus:ring-2 focus:ring-accent outline-none font-medium" placeholder="Adresa ta de email" type="email" />
            <button className="bg-black text-white px-6 py-3 rounded font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors" type="submit">
              Abonează-te
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;