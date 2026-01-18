import "../styles/Hero.css";
import React from "react";
import {
  IconPhone,
  IconLaptop,
  IconWatch,
  IconBolt,
  IconTools,
  IconSettings,
  IconCheck,
  IconLocation,
  IconPhoneContact,
  IconBus,
} from "../assets/Icons";

export default function Hero() {
  const icons = {
    phone: <IconPhone />,
    laptop: <IconLaptop />,
    watch: <IconWatch />,
    bolt: <IconBolt />,
    tools: <IconTools />,
    settings: <IconSettings />,
    check: <IconCheck />,
    location: <IconLocation />,
    phone2: <IconPhoneContact />,
    bus: <IconBus />,
  };

  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Black Pearl Trójmiasto</h1>
            <p className="hero-subtitle">
              Renomowany serwis telefonów, tabletów, komputerów i smartwatchy w
              Gdańsku
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
            Oferujemy kompleksowe usługi naprawy i serwisu. Nasz zespół
            doświadczonych techników zapewni szybką i profesjonalną obsługę
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">{icons.phone}</div>
              <h3>Naprawa Telefonów</h3>
              <p>
                Wymiana wyświetlaczy, baterii, naprawa płyt głównych. Szybka i
                profesjonalna obsługa wszystkich marek
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">{icons.laptop}</div>
              <h3>Serwis Komputerów</h3>
              <p>
                Diagnostyka, naprawa laptopów i PC. Wymiana podzespołów,
                czyszczenie, optymalizacja systemu
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">{icons.watch}</div>
              <h3>Naprawa Smartwatchy</h3>
              <p>
                Profesjonalny serwis smartwatchy i urządzeń wearables. Wymiana
                ekranów i baterii
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">{icons.bolt}</div>
              <h3>Lutowanie Mikrokontrolerów</h3>
              <p>
                Skomplikowane naprawy na poziomie komponentów. Precyzyjne prace
                lutownicze
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">{icons.tools}</div>
              <h3>Akcesoria</h3>
              <p>
                Szeroki wybór akcesoriów do telefonów, tabletów i komputerów.
                Doradztwo w doborze
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">{icons.settings}</div>
              <h3>Konfiguracja Urządzeń</h3>
              <p>
                Pomoc w konfiguracji laptopów, telefonów i tabletów. Instalacja
                oprogramowania
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-container">
          <h2>O Nas</h2>
          <div className="about-text">
            <p>
              Black Pearl Trójmiasto to więcej niż serwis – to miejsce, gdzie
              technologia spotyka się z pasją. Od ponad 2 lat pomagamy
              mieszkańcom Gdańska i okolic w naprawie ich urządzeń
              elektronicznych, stawiając na najwyższą jakość obsługi i
              transparentność działania.
            </p>
            <p>
              Nasz zespół składa się z doświadczonych techników, którzy na co
              dzień zajmują się naprawą smartfonów, tabletów, laptopów i
              smartwatchy. Dysponujemy profesjonalnym sprzętem do diagnostyki i
              lutowania na poziomie mikrokontrolerów, co pozwala nam podejmować
              się nawet najbardziej skomplikowanych napraw.
            </p>
            <p>
              Znajdujemy się w samym sercu Starego Miasta w Gdańsku, przy ulicy
              Szerokiej 119/120. Nasza lokalizacja sprawia, że jesteśmy łatwo
              dostępni zarówno dla mieszkańców centrum, jak i osób
              odwiedzających nasze piękne miasto.
            </p>
          </div>

          <h2 style={{ marginTop: "60px" }}>Dlaczego Black Pearl?</h2>
          <div className="about-features">
            <div className="about-feature">
              <span className="about-icon">{icons.check}</span>
              <div>
                <h4>Szybka Naprawa</h4>
                <p>
                  Większość napraw realizujemy do godziny czasu. Nie musisz
                  czekać dni na swoje urządzenie.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <span className="about-icon">{icons.check}</span>
              <div>
                <h4>Uczciwe Podejście</h4>
                <p>
                  Transparentne ceny i rzetelna diagnostyka. Zawsze informujemy
                  o kosztach przed naprawą.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <span className="about-icon">{icons.check}</span>
              <div>
                <h4>Doświadczony Zespół</h4>
                <p>
                  Profesjonalni technicy z wieloletnim doświadczeniem w naprawie
                  elektroniki.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <span className="about-icon">{icons.check}</span>
              <div>
                <h4>Konkurencyjne Ceny</h4>
                <p>
                  Najlepszy stosunek jakości do ceny w Trójmieście. Sprawdź
                  nasze opinie!
                </p>
              </div>
            </div>

            <div className="about-feature">
              <span className="about-icon">{icons.check}</span>
              <div>
                <h4>Bezpłatna Diagnostyka</h4>
                <p>
                  Nie pobieramy opłat za diagnozę problemu z Twoim urządzeniem.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <span className="about-icon">{icons.check}</span>
              <div>
                <h4>Gwarancja Jakości</h4>
                <p>
                  Udzielamy gwarancji na wszystkie wykonane naprawy i użyte
                  części.
                </p>
              </div>
            </div>
          </div>

          <div className="about-text" style={{ marginTop: "60px" }}>
            <p>
              Stawiamy na indywidualne podejście do każdego klienta. Oferujemy
              szczegółowe wyjaśnienie problemu oraz transparentną wycenę przed
              rozpoczęciem naprawy. Dzięki temu nie musisz martwić się o ukryte
              koszty czy nieoczekiwane dopłaty.
            </p>
            <p>
              Naszym celem jest nie tylko naprawa urządzeń, ale także budowanie
              długotrwałych relacji z klientami opartych na zaufaniu i
              profesjonalizmie. Świadczy o tym ocena 4.8/5 oraz liczne pozytywne
              opinie naszych zadowolonych klientów, którzy wrócili do nas z
              kolejnymi problemami lub polecili nas swoim znajomym.
            </p>
            <p>
              Obsługujemy wszystkie popularne marki: Apple, Samsung, Xiaomi,
              Huawei, Honor, Motorola i wiele innych. Bez względu na to, czy
              potrzebujesz prostej wymiany baterii, czy skomplikowanej naprawy
              płyty głównej – jesteśmy tutaj, aby Ci pomóc.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
