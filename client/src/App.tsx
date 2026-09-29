import { useState } from "react";
import { Link, Route, Switch, useLocation } from "wouter";
import {
  ArrowUpRight,
  Brain,
  Check,
  ChevronDown,
  Clock3,
  HeartHandshake,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import ContentPage from "./pages/ContentPage";
import SeoMeta from "./SeoMeta";

export const WHATSAPP_LINK = "https://wa.me/message/FTFXCKFOOR6FL1";
export const EMAIL = "antoniocstpsicologo@gmail.com";
export const PHONE = "(86) 98327-906";

const routeSeo = {
  "/": {
    title: "Antonio Costa Psicólogo | Psicoterapia online para adolescentes e jovens",
    description: "Psicoterapia online para adolescentes e jovens adultos com TCC, acolhimento, sigilo e atendimento profissional.",
  },
  "/psicologo-para-adolescentes": {
    title: "Psicólogo para adolescentes online | Antonio Costa",
    description: "Atendimento psicológico online para adolescentes com acolhimento, sigilo e TCC. Apoio para ansiedade, autoestima, relações e escolhas.",
  },
  "/psicologo-para-jovens": {
    title: "Psicólogo para jovens adultos online | Antonio Costa",
    description: "Psicoterapia online para jovens adultos diante de ansiedade, escolhas, estudos, trabalho, relacionamentos e autocobrança.",
  },
  "/psicoterapia-online": {
    title: "Psicoterapia online com TCC | Antonio Costa Psicólogo",
    description: "Entenda como funciona a psicoterapia online para adolescentes e jovens adultos, com privacidade, flexibilidade e acolhimento.",
  },
  "/conteudos/ansiedade-na-adolescencia": {
    title: "Ansiedade na adolescência: sinais e como buscar ajuda",
    description: "Conheça sinais de ansiedade na adolescência e formas acolhedoras de conversar, apoiar e buscar ajuda psicológica.",
    type: "article" as const,
  },
  "/conteudos/autoestima-na-adolescencia": {
    title: "Autoestima na adolescência: como oferecer apoio",
    description: "Reflexões sobre autoestima, comparação, identidade e formas de apoiar adolescentes com mais respeito e segurança.",
    type: "article" as const,
  },
  "/conteudos/ansiedade-em-jovens-adultos": {
    title: "Ansiedade em jovens adultos: escolhas e autocobrança",
    description: "Como compreender a ansiedade em jovens adultos diante de estudos, trabalho, decisões, relacionamentos e autocobrança.",
    type: "article" as const,
  },
  "/conteudos/autoestima-em-jovens-adultos": {
    title: "Autoestima em jovens adultos além do desempenho",
    description: "Reflexões sobre produtividade, comparação, autocrítica e construção de uma autoestima mais estável em jovens adultos.",
    type: "article" as const,
  },
} as const;

const navItems = [
  { label: "Início", href: "/" },
  { label: "Como posso ajudar", href: "/#servicos" },
  { label: "Sobre a TCC", href: "/#tcc" },
  { label: "Dúvidas", href: "/#faq" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const onDarkPage = location !== "/";

  return (
    <header className={onDarkPage ? "site-header header-on-dark" : "site-header"}>
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark"><Sparkles size={17} strokeWidth={2.3} /></span>
          <span>
            <strong>Antonio Costa</strong>
            <small>Psicólogo · CRP 21/07351</small>
          </span>
        </Link>
        <button className="mobile-menu" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={location === item.href ? "active" : ""} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={WHATSAPP_LINK} className="nav-cta" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Agendar Consulta <ArrowUpRight size={15} /></a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark"><Sparkles size={17} strokeWidth={2.3} /></span>
            <span><strong>Antonio Costa</strong><small>Psicólogo · CRP 21/07351</small></span>
          </Link>
          <p className="footer-note">Um espaço seguro para compreender o que você sente e construir novos caminhos.</p>
        </div>
        <div className="footer-links">
          <span className="eyebrow">Navegação</span>
          <a href="/#servicos">Como posso ajudar</a>
          <a href="/#tcc">Sobre a TCC</a>
          <a href="/#faq">Perguntas frequentes</a>
        </div>
        <div className="footer-links">
          <span className="eyebrow">Atendimento</span>
          <span>Exclusivamente online</span>
          <span>Adolescentes e jovens</span>
          <span>Segunda a sexta</span>
          <a href={`mailto:${EMAIL}`}><Mail size={13} /> {EMAIL}</a>
          <a href={`tel:+558698327906`}>{PHONE}</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Antonio Costa Psicólogo</span>
        <span>Conteúdo informativo. Não substitui avaliação psicológica.</span>
      </div>
    </footer>
  );
}

export function ContactSection() {
  return (
    <section id="contato" className="contact-section">
      <div className="container contact-card">
        <div className="contact-copy">
          <span className="eyebrow light">Vamos conversar</span>
          <h2>O primeiro passo pode ser mais leve do que parece.</h2>
          <p>Se você sente que é hora de olhar para si com mais cuidado, entre em contato. A mensagem inicial é breve, acolhedora e sem compromisso.</p>
          <div className="contact-meta">
            <span><Clock3 size={16} /> Atendimento online</span>
            <span><ShieldCheck size={16} /> Sigilo e acolhimento</span>
          </div>
        </div>
        <div className="contact-action">
          <div className="contact-action-icon"><MessageCircle size={24} /></div>
          <strong>Agende uma conversa inicial</strong>
          <span>WhatsApp profissional</span>
          <a href={WHATSAPP_LINK} className="button button-light" target="_blank" rel="noreferrer">Agendar Consulta <ArrowUpRight size={17} /></a>
          <a href={`mailto:${EMAIL}`} className="contact-email"><Mail size={14} /> {EMAIL}</a>
          <a href={`tel:+558698327906`} className="contact-phone">Telefone: {PHONE}</a>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const questions = [
    ["Como funciona a psicoterapia online?", "Os encontros acontecem por videochamada, em um ambiente reservado e com o mesmo cuidado de um atendimento presencial. Você recebe as orientações para acessar a sala virtual com segurança."],
    ["Qual é a duração de cada sessão?", "As sessões têm duração aproximada de 50 minutos e acontecem semanalmente, conforme a necessidade e os objetivos construídos em conjunto."],
    ["O atendimento é indicado para adolescentes?", "Sim. O trabalho com adolescentes considera a fase de desenvolvimento, a autonomia possível e a participação responsável de pais ou responsáveis quando necessário."],
    ["Preciso saber exatamente o que estou sentindo?", "Não. A terapia também é um espaço para organizar aquilo que ainda parece confuso. Você não precisa chegar com respostas prontas."],
  ];
  return (
    <section id="faq" className="faq-section section-pad">
      <div className="container faq-layout">
        <div className="section-intro">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2>Informação também é uma forma de acolhimento.</h2>
          <p>Algumas respostas para tornar o começo mais claro e tranquilo.</p>
          <div className="mini-note"><HeartHandshake size={17} /> Você pode tirar outras dúvidas na conversa inicial.</div>
        </div>
        <div className="faq-list">
          {questions.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<ChevronDown size={18} /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [location] = useLocation();
  const seo = routeSeo[location as keyof typeof routeSeo] ?? routeSeo["/"];

  return (
    <div className="app-shell">
      <SeoMeta title={seo.title} description={seo.description} path={location} type={"type" in seo ? seo.type : undefined} />
      <SiteHeader />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/psicologo-para-adolescentes"><ServicePage type="adolescentes" /></Route>
          <Route path="/psicologo-para-jovens"><ServicePage type="jovens" /></Route>
          <Route path="/psicoterapia-online"><ServicePage type="online" /></Route>
          <Route path="/conteudos/ansiedade-na-adolescencia"><ContentPage slug="ansiedade-na-adolescencia" /></Route>
          <Route path="/conteudos/autoestima-na-adolescencia"><ContentPage slug="autoestima-na-adolescencia" /></Route>
          <Route path="/conteudos/ansiedade-em-jovens-adultos"><ContentPage slug="ansiedade-em-jovens-adultos" /></Route>
          <Route path="/conteudos/autoestima-em-jovens-adultos"><ContentPage slug="autoestima-em-jovens-adultos" /></Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </main>
      <ContactSection />
      <SiteFooter />
      <a className="floating-contact" href={WHATSAPP_LINK} aria-label="Falar pelo WhatsApp"><MessageCircle size={22} /></a>
    </div>
  );
}
