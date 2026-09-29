import { Link } from "wouter";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, HeartHandshake, LaptopMinimal, ShieldCheck, Sparkles, UsersRound } from "lucide-react";

type ServiceType = "adolescentes" | "jovens" | "online";

type PageContent = {
  kicker: string;
  title: string;
  intro: string;
  seoTitle: string;
  seoDescription: string;
  icon: typeof UsersRound;
  color: string;
  topics: string[];
  detail: string;
  detailsTitle: string;
  details: string[];
};

const content: Record<ServiceType, PageContent> = {
  adolescentes: {
    kicker: "Psicólogo para adolescentes",
    title: "Um espaço para crescer sem precisar ter todas as respostas.",
    intro: "A adolescência é feita de mudanças intensas. A psicoterapia oferece um lugar de escuta para que o adolescente possa entender o que está vivendo, fortalecer sua identidade e encontrar recursos para lidar com os desafios.",
    seoTitle: "Psicólogo para Adolescentes | Antonio Costa Psicólogo",
    seoDescription: "Atendimento psicológico online para adolescentes com acolhimento, sigilo e Terapia Cognitivo-Comportamental. Um espaço seguro para ansiedade, autoestima e escolhas.",
    icon: UsersRound,
    color: "page-sky",
    topics: ["Ansiedade e preocupação", "Autoestima e identidade", "Relações e pertencimento", "Escola, escolhas e pressão"],
    detail: "O processo é construído com respeito à singularidade de cada adolescente. A terapia pode ajudar a nomear emoções, compreender comportamentos e desenvolver estratégias para situações que parecem difíceis de organizar sozinho.",
    detailsTitle: "Como o atendimento pode ajudar",
    details: ["Escutar sem julgamentos as mudanças, dúvidas e conflitos desta fase", "Trabalhar ansiedade, autoestima, relações, escola e pressão por desempenho", "Construir recursos para comunicação, autonomia e tomada de decisões", "Orientar pais ou responsáveis quando necessário, preservando a voz do adolescente"],
  },
  jovens: {
    kicker: "Psicólogo para jovens adultos",
    title: "Para quando a vida adulta parece começar rápido demais.",
    intro: "Entre escolhas, cobranças e mudanças, é comum sentir que você deveria saber exatamente o que fazer. A terapia pode ajudar a organizar prioridades, compreender padrões e construir decisões mais alinhadas com quem você é.",
    seoTitle: "Psicólogo para Jovens Adultos | Antonio Costa Psicólogo",
    seoDescription: "Psicoterapia online para jovens adultos com acolhimento e TCC. Atendimento para ansiedade, estudos, trabalho, relacionamentos, escolhas e autonomia.",
    icon: Sparkles,
    color: "page-cobalt",
    topics: ["Transições e decisões", "Estudos e trabalho", "Relacionamentos", "Autonomia e expectativas"],
    detail: "A psicoterapia é um espaço colaborativo para olhar para o presente sem perder de vista a história que trouxe você até aqui — com acolhimento, honestidade e ferramentas práticas para lidar com a vida que está ganhando forma.",
    detailsTitle: "Temas comuns na terapia",
    details: ["Organizar escolhas profissionais, estudos e próximos passos", "Lidar com ansiedade, autocobrança e sensação de não dar conta", "Compreender padrões em relacionamentos e fortalecer limites", "Construir autonomia sem precisar corresponder a todas as expectativas"],
  },
  online: {
    kicker: "Psicoterapia online",
    title: "Cuidado psicológico que acompanha a sua rotina.",
    intro: "O atendimento online permite fazer terapia de onde você estiver, com privacidade, flexibilidade e a mesma qualidade de vínculo e escuta de um processo presencial.",
    seoTitle: "Psicoterapia Online | Antonio Costa Psicólogo",
    seoDescription: "Psicoterapia online para adolescentes e jovens adultos, com privacidade, flexibilidade e abordagem da Terapia Cognitivo-Comportamental.",
    icon: LaptopMinimal,
    color: "page-teal",
    topics: ["Videochamadas seguras", "Horários combinados", "Atendimento individual", "Privacidade e sigilo"],
    detail: "Antes da primeira sessão, você recebe as orientações para preparar um ambiente reservado e acessar a sala virtual. O mais importante é que você se sinta confortável para estar presente no processo.",
    detailsTitle: "Para uma boa experiência online",
    details: ["Escolha um local reservado e com conexão estável", "Use fones se isso ajudar a preservar sua privacidade", "Combine um horário em que você consiga estar presente sem pressa", "Receba orientações claras antes de iniciar o atendimento"],
  },
};

export default function ServicePage({ type }: { type: ServiceType }) {
  const page = content[type];
  const Icon = page.icon;

  return (
    <>
      <section className={`service-hero ${page.color}`}>
        <div className="container service-hero-grid">
          <div className="service-hero-copy">
            <Link href="/" className="back-link"><ArrowLeft size={15} /> Voltar para início</Link>
            <span className="eyebrow light">{page.kicker}</span>
            <h1>{page.title}</h1>
            <p>{page.intro}</p>
            <a href="#contato" className="button button-light">Conversar sobre terapia <ArrowUpRight size={17} /></a>
          </div>
          <div className="service-hero-art" aria-label={`Ilustração sobre ${page.kicker}`}>
            <div className="art-halo" />
            <div className="art-card"><Icon size={46} strokeWidth={1.35} /><span>escuta</span><span>presença</span><span>caminho</span></div>
            <div className="art-caption"><ShieldCheck size={16} /> atendimento com sigilo</div>
          </div>
        </div>
      </section>
      <section className="service-content section-pad">
        <div className="container service-content-grid">
          <div><span className="eyebrow">Um processo possível</span><h2>Você pode começar pelo que está mais presente hoje.</h2><p className="large-paragraph">{page.detail}</p></div>
          <div className="topics-card"><span className="eyebrow">Temas que podemos trabalhar</span>{page.topics.map((topic) => <div className="topic-row" key={topic}><span className="topic-check"><Check size={15} /></span><span>{topic}</span></div>)}<div className="topic-note"><HeartHandshake size={17} /> A terapia é personalizada para sua história.</div></div>
        </div>
      </section>
      <section className="service-details section-pad">
        <div className="container service-details-grid">
          <div><span className="eyebrow">Cuidado individualizado</span><h2>{page.detailsTitle}</h2></div>
          <div className="details-list">{page.details.map((detail) => <div className="detail-item" key={detail}><Check size={16} /><p>{detail}</p></div>)}</div>
        </div>
      </section>
      <section className="process-strip"><div className="container process-grid"><div><span className="eyebrow light">Como começamos</span><h2>Sem pressa. Com clareza.</h2></div><div className="process-step"><span>01</span><strong>Conversa inicial</strong><p>Conhecemos sua demanda e tiramos dúvidas sobre o processo.</p></div><div className="process-step"><span>02</span><strong>Objetivos em conjunto</strong><p>Definimos um caminho de trabalho possível para você.</p></div><div className="process-step"><span>03</span><strong>Primeiro passo</strong><p>Começamos a construir mudanças pequenas e significativas.</p></div></div></section>
      <section className="service-end section-pad"><div className="container service-end-inner"><span className="eyebrow">Quando fizer sentido para você</span><h2>Vamos abrir esse espaço de cuidado?</h2><a href="#contato" className="text-link dark-link">Agendar conversa inicial <ArrowRight size={16} /></a></div></section>
    </>
  );
}
