import '../styles/Hero.css';

export default function Hero() {
  const icons = {
    phone: (
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    laptop: (
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
    watch: (
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="9" y="7" width="6" height="11" rx="1"/>
        <path d="M9 6V4h6v2M9 18v2h6v-2"/>
      </svg>
    ),
    bolt: (
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    tools: (
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    settings: (
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v6m0 6v6m5.2-13.2l-4.2 4.2m0 6l4.2 4.2M1 12h6m6 0h6m-13.2-5.2l4.2 4.2m0 6l-4.2 4.2"/>
      </svg>
    ),
    check: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    location: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    phone2: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    bus: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 17h2l.64-2.54c.24-.959.24-1.962 0-2.92l-1.07-4.27A3 3 0 0 0 17.66 5H4a2 2 0 0 0-2 2v10h2"/>
        <circle cx="7" cy="17" r="2"/>
        <circle cx="17" cy="17" r="2"/>
      </svg>
    )
  };

  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Black Pearl Trójmiasto</h1>
            <p className="hero-subtitle">
              Renomowany serwis telefonów, tabletów, komputerów i smartwatchy w Gdańsku
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">4.8</span>
                <span className="stat-label">Ocena klientów</span>
              </div>
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Lata doświadczenia</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Zadowolenie</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services-container">
          <h2>Nasze Usługi</h2>
          <p className="services-intro">
            Oferujemy kompleksowe usługi naprawy i serwisu. Nasz zespół doświadczonych 
            techników zapewni szybką i profesjonalną obsługę
          </p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">{icons.phone}</div>
              <h3>Naprawa Telefonów</h3>
              <p>Wymiana wyświetlaczy, baterii, naprawa płyt głównych. Szybka i profesjonalna obsługa wszystkich marek</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">{icons.laptop}</div>
              <h3>Serwis Komputerów</h3>
              <p>Diagnostyka, naprawa laptopów i PC. Wymiana podzespołów, czyszczenie, optymalizacja systemu</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">{icons.watch}</div>
              <h3>Naprawa Smartwatchy</h3>
              <p>Profesjonalny serwis smartwatchy i urządzeń wearables. Wymiana ekranów i baterii</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">{icons.bolt}</div>
              <h3>Lutowanie Mikrokontrolerów</h3>
              <p>Skomplikowane naprawy na poziomie komponentów. Precyzyjne prace lutownicze</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">{icons.tools}</div>
              <h3>Akcesoria</h3>
              <p>Szeroki wybór akcesoriów do telefonów, tabletów i komputerów. Doradztwo w doborze</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">{icons.settings}</div>
              <h3>Konfiguracja Urządzeń</h3>
              <p>Pomoc w konfiguracji laptopów, telefonów i tabletów. Instalacja oprogramowania</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-container">
          <h2>O Nas</h2>
          <div className="about-text">
            <p>
              Black Pearl Trójmiasto to więcej niż serwis – to miejsce, gdzie technologia spotyka się z pasją. 
              Od ponad 2 lat pomagamy mieszkańcom Gdańska i okolic w naprawie ich urządzeń elektronicznych, 
              stawiając na najwyższą jakość obsługi i transparentność działania.
            </p>
            <p>
              Nasz zespół składa się z doświadczonych techników, którzy na co dzień zajmują się naprawą 
              smartfonów, tabletów, laptopów i smartwatchy. Dysponujemy profesjonalnym sprzętem do diagnostyki 
              i lutowania na poziomie mikrokontrolerów, co pozwala nam podejmować się nawet najbardziej 
              skomplikowanych napraw.
            </p>
            <p>
              Znajdujemy się w samym sercu Starego Miasta w Gdańsku, przy ulicy Szerokiej 119/120. 
              Nasza lokalizacja sprawia, że jesteśmy łatwo dostępni zarówno dla mieszkańców centrum, 
              jak i osób odwiedzających nasze piękne miasto.
            </p>
          </div>

          <h2 style={{marginTop: '60px'}}>Dlaczego Black Pearl?</h2>
          <div className="about-features">
            <div className="about-feature">
              <span className="about-icon">{icons.check}</span>
              <div>
                <h4>Szybka Naprawa</h4>
                <p>Większość napraw realizujemy do godziny czasu. Nie musisz czekać dni na swoje urządzenie.</p>
              </div>
            </div>
            
            <div className="about-feature">
              <span className="about-icon">{icons.check}</span>
              <div>
                <h4>Uczciwe Podejście</h4>
                <p>Transparentne ceny i rzetelna diagnostyka. Zawsze informujemy o kosztach przed naprawą.</p>
              </div>
            </div>
            
            <div className="about-feature">
              <span className="about-icon">{icons.check}</span>
              <div>
                <h4>Doświadczony Zespół</h4>
                <p>Profesjonalni technicy z wieloletnim doświadczeniem w naprawie elektroniki.</p>
              </div>
            </div>
            
            <div className="about-feature">
              <span className="about-icon">{icons.check}</span>
              <div>
                <h4>Konkurencyjne Ceny</h4>
                <p>Najlepszy stosunek jakości do ceny w Trójmieście. Sprawdź nasze opinie!</p>
              </div>
            </div>

            <div className="about-feature">
              <span className="about-icon">{icons.check}</span>
              <div>
                <h4>Bezpłatna Diagnostyka</h4>
                <p>Nie pobieramy opłat za diagnozę problemu z Twoim urządzeniem.</p>
              </div>
            </div>

            <div className="about-feature">
              <span className="about-icon">{icons.check}</span>
              <div>
                <h4>Gwarancja Jakości</h4>
                <p>Udzielamy gwarancji na wszystkie wykonane naprawy i użyte części.</p>
              </div>
            </div>
          </div>

          <div className="about-text" style={{marginTop: '60px'}}>
            <p>
              Stawiamy na indywidualne podejście do każdego klienta. Oferujemy szczegółowe wyjaśnienie problemu 
              oraz transparentną wycenę przed rozpoczęciem naprawy. Dzięki temu nie musisz martwić się o ukryte 
              koszty czy nieoczekiwane dopłaty.
            </p>
            <p>
              Naszym celem jest nie tylko naprawa urządzeń, ale także budowanie długotrwałych relacji 
              z klientami opartych na zaufaniu i profesjonalizmie. Świadczy o tym ocena 4.8/5 oraz 
              liczne pozytywne opinie naszych zadowolonych klientów, którzy wrócili do nas z kolejnymi problemami 
              lub polecili nas swoim znajomym.
            </p>
            <p>
              Obsługujemy wszystkie popularne marki: Apple, Samsung, Xiaomi, Huawei, Honor, Motorola i wiele innych. 
              Bez względu na to, czy potrzebujesz prostej wymiany baterii, czy skomplikowanej naprawy płyty głównej 
              – jesteśmy tutaj, aby Ci pomóc.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}