import { Link } from "wouter";
import { ArrowLeft, ArrowUpRight, Check, HeartHandshake } from "lucide-react";

export type ContentSlug = "ansiedade-na-adolescencia" | "autoestima-na-adolescencia" | "ansiedade-em-jovens-adultos" | "autoestima-em-jovens-adultos";

type Article = {
  title: string;
  kicker: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  audience: string;
  intro: string;
  sections: { heading: string; text: string }[];
  tips: string[];
  serviceHref: string;
  serviceLabel: string;
};

const articles: Record<ContentSlug, Article> = {
  "ansiedade-na-adolescencia": {
    title: "Ansiedade na adolescência: quando a preocupação ocupa espaço demais",
    kicker: "Conteúdo para adolescentes e responsáveis",
    description: "Entenda sinais comuns de ansiedade na adolescência e descubra formas acolhedoras de buscar apoio.",
    seoTitle: "Ansiedade na Adolescência: sinais e como buscar ajuda",
    seoDescription: "Saiba reconhecer sinais de ansiedade na adolescência e como a psicoterapia pode ajudar adolescentes e famílias.",
    audience: "Adolescentes, pais e responsáveis",
    intro: "A adolescência envolve mudanças no corpo, nos relacionamentos, na escola e na forma de enxergar o futuro. Um pouco de preocupação faz parte, mas a ansiedade merece atenção quando começa a limitar a rotina, o sono, as relações ou a participação em atividades importantes.",
    sections: [
      { heading: "Como a ansiedade pode aparecer", text: "Além de pensamentos acelerados, podem surgir irritabilidade, dificuldade para dormir, tensão no corpo, medo de errar, necessidade de evitar situações e queda de concentração. Nem todo adolescente consegue explicar o que sente, por isso mudanças persistentes de comportamento também são sinais importantes." },
      { heading: "O papel dos adultos", text: "Escutar sem minimizar é um primeiro passo. Perguntas abertas, presença e uma rotina possível ajudam mais do que cobranças para que o adolescente simplesmente se acalme. Quando o sofrimento persiste ou interfere na vida, uma avaliação psicológica pode orientar os próximos passos." },
    ],
    tips: ["Escolher um momento tranquilo para conversar, sem interrogatório", "Observar sono, alimentação, escola, relações e situações evitadas", "Validar o sentimento sem tratar a ansiedade como incapacidade", "Buscar ajuda profissional quando o sofrimento estiver interferindo na rotina"],
    serviceHref: "/psicologo-para-adolescentes",
    serviceLabel: "Conhecer o atendimento para adolescentes",
  },
  "autoestima-na-adolescencia": {
    title: "Autoestima na adolescência: construindo uma relação mais gentil consigo",
    kicker: "Conteúdo para adolescentes e responsáveis",
    description: "A autoestima não é gostar de tudo em si: é aprender a reconhecer seu valor mesmo em fases de mudança.",
    seoTitle: "Autoestima na Adolescência: como fortalecer a confiança",
    seoDescription: "Reflexões sobre autoestima na adolescência, comparação, identidade e formas de desenvolver mais autocompaixão.",
    audience: "Adolescentes, pais e responsáveis",
    intro: "Na adolescência, a identidade está em construção. Comparações, comentários sobre o corpo, redes sociais e a busca por pertencimento podem influenciar a maneira como o jovem se enxerga. Cuidar da autoestima é criar espaço para uma visão mais realista, curiosa e respeitosa de si.",
    sections: [
      { heading: "Autoestima vai além da aparência", text: "A confiança também se relaciona com a sensação de ser ouvido, conseguir pedir ajuda, experimentar coisas novas e reconhecer esforços. Reduzir o valor pessoal a desempenho, corpo ou aprovação dos outros costuma tornar qualquer erro muito pesado." },
      { heading: "Como apoiar sem aumentar a cobrança", text: "Elogios específicos, respeito à individualidade e interesse genuíno pela experiência do adolescente ajudam. Comparações e críticas sobre aparência podem fechar o diálogo. A terapia pode oferecer um espaço protegido para falar sobre identidade, pertencimento e autocrítica." },
    ],
    tips: ["Perceber pensamentos autocríticos e perguntar se trataria alguém querido da mesma forma", "Valorizar processos, tentativas e qualidades além de resultados", "Limitar comparações que aumentam sofrimento nas redes sociais", "Conversar com um profissional quando houver isolamento ou desvalorização intensa"],
    serviceHref: "/psicologo-para-adolescentes",
    serviceLabel: "Conhecer o atendimento para adolescentes",
  },
  "ansiedade-em-jovens-adultos": {
    title: "Ansiedade em jovens adultos: quando dar conta de tudo parece impossível",
    kicker: "Conteúdo para jovens adultos",
    description: "Entenda a ansiedade nas transições de estudos, trabalho, relacionamentos e autonomia.",
    seoTitle: "Ansiedade em Jovens Adultos: escolhas, cobranças e terapia",
    seoDescription: "Como lidar com ansiedade em jovens adultos diante de estudos, trabalho, escolhas, relacionamentos e autocobrança.",
    audience: "Jovens adultos",
    intro: "A passagem para a vida adulta pode reunir muitas decisões ao mesmo tempo: estudar, trabalhar, se sustentar, construir relações e descobrir o próprio caminho. A ansiedade pode aparecer como urgência constante, medo de escolher errado e sensação de que todos estão avançando menos você.",
    sections: [
      { heading: "O peso da autocobrança", text: "Comparar bastidores com resultados visíveis de outras pessoas costuma alimentar a impressão de atraso. A ansiedade também pode levar à procrastinação: quanto mais importante parece uma tarefa, mais difícil fica começar ou tolerar a possibilidade de não sair perfeito." },
      { heading: "Organizar sem controlar tudo", text: "Diferenciar o que está sob seu controle do que depende do tempo e de outras pessoas ajuda a reduzir o excesso de preocupação. A terapia oferece um espaço para identificar padrões, definir prioridades e desenvolver decisões mais coerentes com seus valores." },
    ],
    tips: ["Separar decisões urgentes de decisões importantes, mas não imediatas", "Transformar objetivos grandes em próximos passos observáveis", "Criar pausas e limites para estudo, trabalho e disponibilidade digital", "Buscar apoio quando a ansiedade estiver afetando sono, relações ou funcionamento"],
    serviceHref: "/psicologo-para-jovens",
    serviceLabel: "Conhecer o atendimento para jovens adultos",
  },
  "autoestima-em-jovens-adultos": {
    title: "Autoestima em jovens adultos: valor pessoal além do desempenho",
    kicker: "Conteúdo para jovens adultos",
    description: "Reflexões para construir uma autoestima menos dependente de produtividade, aprovação e comparação.",
    seoTitle: "Autoestima em Jovens Adultos: confiança e autocompaixão",
    seoDescription: "Reflexões sobre autoestima em jovens adultos, produtividade, comparação, relacionamentos e construção de confiança.",
    audience: "Jovens adultos",
    intro: "Quando o valor pessoal parece depender de produtividade, aparência, aprovação ou conquistas, qualquer pausa pode ser confundida com fracasso. Uma autoestima mais estável não elimina inseguranças, mas permite atravessá-las sem transformar um resultado em definição de quem você é.",
    sections: [
      { heading: "Reconhecer a voz da autocrítica", text: "A autocrítica costuma falar em absolutos: sempre, nunca, deveria. Observar esse modo de pensar e buscar uma leitura mais completa da situação ajuda a separar um erro, uma fase difícil ou uma escolha de uma identidade inteira." },
      { heading: "Confiança também se constrói na prática", text: "Autoconfiança cresce quando você se permite agir com alguma incerteza, cumprir acordos possíveis consigo e rever rotas. Relações respeitosas e psicoterapia podem apoiar esse processo sem exigir que você se sinta pronto antes de começar." },
    ],
    tips: ["Registrar evidências de esforços e recursos usados, não apenas resultados", "Praticar limites em relações que exigem aprovação constante", "Escolher metas compatíveis com sua fase atual, sem comparação automática", "Conversar com um psicólogo quando a autocrítica estiver restringindo sua vida"],
    serviceHref: "/psicologo-para-jovens",
    serviceLabel: "Conhecer o atendimento para jovens adultos",
  },
};

export default function ContentPage({ slug }: { slug: ContentSlug }) {
  const article = articles[slug];

  return (
    <article className="content-page">
      <header className="content-hero">
        <div className="container content-hero-inner">
          <Link href="/" className="back-link"><ArrowLeft size={15} /> Voltar para início</Link>
          <span className="eyebrow light">{article.kicker}</span>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <span className="content-audience">{article.audience}</span>
        </div>
      </header>
      <div className="container content-body">
        <p className="content-intro">{article.intro}</p>
        {article.sections.map((section) => <section className="article-section" key={section.heading}><h2>{section.heading}</h2><p>{section.text}</p></section>)}
        <section className="content-tips"><span className="eyebrow">Para começar</span><h2>Pequenos passos de cuidado</h2><div>{article.tips.map((tip) => <p key={tip}><Check size={16} /> {tip}</p>)}</div></section>
        <aside className="content-note"><HeartHandshake size={22} /><p>Este conteúdo é informativo e não substitui avaliação psicológica. Se o sofrimento estiver intenso ou persistente, procure um profissional qualificado.</p></aside>
        <Link href={article.serviceHref} className="content-cta">{article.serviceLabel} <ArrowUpRight size={17} /></Link>
      </div>
    </article>
  );
}
