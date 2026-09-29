import { Link } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  BookOpen,
  Check,
  CircleUserRound,
  Compass,
  Heart,
  LaptopMinimal,
  LockKeyhole,
  MessageCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { FAQ } from "../App";

const services = [
  { icon: CircleUserRound, number: "01", title: "Psicólogo para adolescentes", description: "Um espaço de escuta para atravessar mudanças, pressões e descobertas com mais segurança.", href: "/psicologo-para-adolescentes", tint: "tint-sky" },
  { icon: Compass, number: "02", title: "Psicólogo para jovens", description: "Apoio para escolhas, relacionamentos, estudos, trabalho e para a vida que está começando a ganhar forma.", href: "/psicologo-para-jovens", tint: "tint-cobalt" },
  { icon: LaptopMinimal, number: "03", title: "Psicoterapia online", description: "Atendimento com privacidade e flexibilidade, onde você estiver — com presença e vínculo.", href: "/psicoterapia-online", tint: "tint-teal" },
];

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-grain" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> Psicologia clínica online</span>
            <h1>Um lugar para <em>entender</em> o que você sente.</h1>
            <p className="hero-lede">Cuidar da saúde mental é criar espaço para se ouvir, se compreender e construir novas possibilidades com mais leveza.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="https://wa.me/message/FTFXCKFOOR6FL1" target="_blank" rel="noreferrer">Agendar Consulta <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#servicos">Conhecer o trabalho <ArrowRight size={16} /></a>
            </div>
            <div className="hero-signals">
              <span><ShieldCheck size={16} /> Atendimento sigiloso</span>
              <span><LaptopMinimal size={16} /> 100% online</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Ilustração abstrata em tons de azul">
            <div className="visual-card main-visual-card">
              <div className="visual-topline"><span>um espaço de cuidado</span><span className="visual-dot" /></div>
              <div className="visual-sun"><Sparkles size={28} /></div>
              <div className="visual-wave wave-back" />
              <div className="visual-wave wave-front" />
              <div className="visual-caption"><span>respirar</span><span>recomeçar</span><span>florescer</span></div>
            </div>
            <div className="floating-chip chip-top"><Heart size={15} fill="currentColor" /> cuidado possível</div>
            <div className="floating-chip chip-bottom"><LockKeyhole size={14} /> espaço seguro</div>
          </div>
        </div>
        <div className="hero-bottom-line container"><span>Antonio Costa</span><span>CRP 21/07351</span><span className="line" /><span>Para adolescentes e jovens</span></div>
      </section>

      <section id="servicos" className="section-pad services-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div><span className="eyebrow">Como posso ajudar</span><h2>Cada fase tem suas perguntas.<br /><em>Você não precisa respondê-las sozinho.</em></h2></div>
            <p>Meu trabalho é oferecer um espaço ético, acolhedor e baseado em evidências para que você possa olhar para sua história com mais clareza.</p>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, number, title, description, href, tint }) => (
              <Link href={href} className={`service-card ${tint}`} key={title}>
                <div className="service-top"><span className="service-icon"><Icon size={22} /></span><span>{number}</span></div>
                <div><h3>{title}</h3><p>{description}</p></div>
                <span className="card-link">Ver como funciona <ArrowUpRight size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="tcc" className="tcc-section section-pad">
        <div className="container tcc-grid">
          <div className="tcc-visual">
            <div className="tcc-circle circle-large" />
            <div className="tcc-circle circle-small" />
            <div className="tcc-note note-one"><span>pensamentos</span><Brain size={17} /></div>
            <div className="tcc-note note-two"><span>emoções</span><Heart size={16} /></div>
            <div className="tcc-note note-three"><span>comportamentos</span><UsersRound size={16} /></div>
            <div className="tcc-center"><Brain size={32} /><span>TCC</span></div>
          </div>
          <div className="tcc-copy">
            <span className="eyebrow">Abordagem</span>
            <h2>Clareza para compreender. Ferramentas para transformar.</h2>
            <p>A Terapia Cognitivo-Comportamental entende que pensamentos, emoções e comportamentos estão conectados. Ao observar esses padrões com cuidado, é possível desenvolver maneiras mais saudáveis de lidar com os desafios.</p>
            <ul className="check-list"><li><Check size={16} /> Foco no presente e nos seus objetivos</li><li><Check size={16} /> Estratégias práticas para o dia a dia</li><li><Check size={16} /> Processo colaborativo e individualizado</li></ul>
            <a href="#contato" className="text-link dark-link">Conversar sobre terapia <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="audience-section section-pad">
        <div className="container audience-grid">
          <div className="audience-intro"><span className="eyebrow">Para quem é</span><h2>Seu momento merece ser levado a sério.</h2><p>A terapia pode ajudar quando tudo parece demais, quando as escolhas pesam ou quando existe a sensação de estar parado no mesmo lugar.</p></div>
          <div className="audience-list">
            <div className="audience-item"><span>01</span><div><h3>Adolescentes</h3><p>Ansiedade, autoestima, relações, escola, identidade e as transformações de crescer.</p></div><Link href="/psicologo-para-adolescentes"><ArrowUpRight size={20} /></Link></div>
            <div className="audience-item"><span>02</span><div><h3>Jovens adultos</h3><p>Transições, estudos, trabalho, vínculos, autonomia e o peso das expectativas.</p></div><Link href="/psicologo-para-jovens"><ArrowUpRight size={20} /></Link></div>
            <div className="audience-item"><span>03</span><div><h3>Pais e responsáveis</h3><p>Orientação para apoiar o adolescente com presença, escuta e limites possíveis.</p></div><a href="#contato"><ArrowUpRight size={20} /></a></div>
          </div>
        </div>
      </section>

      <section className="quote-section section-pad">
        <div className="container quote-inner"><Quote size={38} /><blockquote>“O cuidado começa quando podemos falar sobre aquilo que, por muito tempo, tentamos carregar sozinhos.”</blockquote><span>— Um convite à escuta</span></div>
      </section>
      <section className="content-index-section section-pad">
        <div className="container">
          <div className="section-heading split-heading content-index-heading"><div><span className="eyebrow"><BookOpen size={14} /> Conteúdos para cuidar</span><h2>Informação para entender melhor o que você sente.</h2></div><p>Textos breves e acolhedores sobre saúde mental na adolescência e na vida adulta.</p></div>
          <div className="content-card-grid">
            <Link href="/conteudos/ansiedade-na-adolescencia" className="content-card"><span className="content-card-tag">Adolescentes</span><h3>Ansiedade na adolescência</h3><p>Sinais de preocupação, mudanças de comportamento e formas de buscar apoio.</p><span className="card-link">Ler conteúdo <ArrowUpRight size={16} /></span></Link>
            <Link href="/conteudos/autoestima-na-adolescencia" className="content-card"><span className="content-card-tag">Adolescentes</span><h3>Autoestima na adolescência</h3><p>Como fortalecer uma relação mais gentil com a própria identidade e aparência.</p><span className="card-link">Ler conteúdo <ArrowUpRight size={16} /></span></Link>
            <Link href="/conteudos/ansiedade-em-jovens-adultos" className="content-card"><span className="content-card-tag">Jovens adultos</span><h3>Ansiedade em jovens adultos</h3><p>Escolhas, cobranças e a sensação de precisar dar conta de tudo.</p><span className="card-link">Ler conteúdo <ArrowUpRight size={16} /></span></Link>
            <Link href="/conteudos/autoestima-em-jovens-adultos" className="content-card"><span className="content-card-tag">Jovens adultos</span><h3>Autoestima e desempenho</h3><p>Construindo confiança para além da produtividade e da aprovação.</p><span className="card-link">Ler conteúdo <ArrowUpRight size={16} /></span></Link>
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
}
