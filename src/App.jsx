import { useState } from 'react'
import logoAnaClara from '../imgs/ana_clara_logo.png'
import heroBanner from '../imgs/mesa_de_trabalho_juridica_sofisticada.jpg'
import whatsappLogo from '../imgs/whatsapp-logo-4456_1024.png'
import fotoPerfilAnaClara from '../imgs/foto_ana_clara_perfil.jpeg'
const whatsappUrl =
  'https://wa.me/5583998075205?text=Olá,%20gostaria%20de%20receber%20orientação%20sobre%20inventário.'

const trustCards = [
  {
    title: 'Experiência',
    text: 'Atuação técnica em inventários, partilhas e regularização de bens.',
  },
  {
    title: 'Clareza',
    text: 'Orientação objetiva para que cada etapa seja compreendida com segurança. A transparência e confiabilidade são a nossa marca.',
  },
  {
    title: 'Ética',
    text: 'Atendimento responsável, transparente e alinhado às necessidades do caso.',
  },
]

const services = [
  'Inventário judicial e extrajudicial',
  'Partilha de bens entre herdeiros',
  'Regularização de imóveis e patrimônio',
  'Orientação em sucessões e herança',
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`site-header ${isMenuOpen ? 'is-menu-open' : ''}`}
      aria-label="Cabeçalho principal"
    >
      <a className="brand" href="#inicio" aria-label="Ir para o início">
        <img src={fotoPerfilAnaClara} alt="Logotipo Dra. Ana Clara" />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-controls="main-navigation"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
        onClick={() => setIsMenuOpen((currentState) => !currentState)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`main-nav ${isMenuOpen ? 'is-open' : ''}`}
        id="main-navigation"
        aria-label="Navegação principal"
      >
        <a href="#atuacao" onClick={closeMenu}>
          Atuação
        </a>
        <a href="#processo" onClick={closeMenu}>
          Como funciona
        </a>
        <a href="#duvidas" onClick={closeMenu}>
          Dúvidas
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="inicio" aria-label="Apresentação da Dra. Ana Clara">
      <img className="hero-image" src={heroBanner} alt="" aria-hidden="true" />
      <div className="hero-overlay" />

      <Header />

      <div className="hero-content">
        <p className="eyebrow">Direito das Sucessões</p>
        <h1>Advogada especialista em Família e sucessões</h1>
        <p className="hero-subtitle">
          Orientação jurídica para conduzir inventários com técnica, clareza e
          segurança em momentos delicados.
        </p>
        <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">
          Fale com a Dra. Ana Clara
        </a>
      </div>
    </section>
  )
}

function TrustCards() {
  return (
    <section className="trust-section" aria-label="Diferenciais do atendimento">
      <div className="trust-grid">
        {trustCards.map((card) => (
          <article className="trust-card" key={card.title}>
            <span className="card-marker" aria-hidden="true" />
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section" id="atuacao">
      <div className="section-heading">
        <p className="eyebrow">Áreas de atuação</p>
        <h2>Suporte jurídico para organizar o inventário com segurança</h2>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service}>
            <h3>{service}</h3>
            <p>
              Análise cuidadosa da documentação e orientação sobre os caminhos
              adequados para cada situação familiar e patrimonial.
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section section-muted" id="processo">
      <div className="section-heading">
        <p className="eyebrow">Como funciona</p>
        <h2>Atendimento claro desde a primeira conversa</h2>
      </div>

      <div className="steps">
        <article>
          <span>01</span>
          <h3>Conversa inicial</h3>
          <p>Entendimento do caso, dos herdeiros envolvidos e dos bens existentes.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Análise documental</h3>
          <p>Verificação dos documentos necessários e identificação do melhor caminho.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Condução jurídica</h3>
          <p>Acompanhamento técnico do inventário, com comunicação objetiva.</p>
        </article>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section className="section faq" id="duvidas">
      <div className="section-heading">
        <p className="eyebrow">Dúvidas frequentes</p>
        <h2>Inventário não precisa ser enfrentado sem orientação</h2>
      </div>

      <div className="faq-list">
        <details>
          <summary>Quando devo procurar uma advogada para inventário?</summary>
          <p>
            O ideal é buscar orientação logo após o falecimento, para entender
            prazos, documentos e possibilidades de inventário judicial ou extrajudicial.
          </p>
        </details>
        <details>
          <summary>Todo inventário precisa ir para a Justiça?</summary>
          <p>
            Nem sempre. Em algumas situações, o inventário pode ser feito em cartório,
            desde que os requisitos legais estejam presentes.
          </p>
        </details>
        <details>
          <summary>Posso tirar dúvidas pelo WhatsApp?</summary>
          <p>
            Sim. O WhatsApp é o canal principal para iniciar o contato e agendar uma
            conversa sobre o caso.
          </p>
        </details>
      </div>
    </section>
  )
}

function Cta() {
  return (
    <section className="cta-section" id="contato">
      <div>
        <p className="eyebrow">Atendimento jurídico</p>
        <h2>Precisa iniciar ou regularizar um inventário?</h2>
        <p>
          Fale com a Dra. Ana Clara e receba orientação para compreender os próximos
          passos do seu caso.
        </p>
      </div>
      <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">
        Chamar no WhatsApp
      </a>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <img src={logoAnaClara} alt="Logotipo Dra. Ana Clara" />
      <p>Dra. Ana Clara | Família e Sucessões</p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <TrustCards />
        <Services />
        <Process />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <a
        className="floating-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chamar a Dra. Ana Clara no WhatsApp"
      >
        <img src={whatsappLogo} alt="" aria-hidden="true" />
      </a>
    </>
  )
}
