import fs from "node:fs";
import path from "node:path";

const outputRoot = path.resolve("dist/public");
const baseHtml = fs.readFileSync(path.join(outputRoot, "index.html"), "utf8");
const siteUrl = "https://psicologoparaadolescente.com.br";

const pages = {
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
    article: true,
  },
  "/conteudos/autoestima-na-adolescencia": {
    title: "Autoestima na adolescência: como oferecer apoio",
    description: "Reflexões sobre autoestima, comparação, identidade e formas de apoiar adolescentes com mais respeito e segurança.",
    article: true,
  },
  "/conteudos/ansiedade-em-jovens-adultos": {
    title: "Ansiedade em jovens adultos: escolhas e autocobrança",
    description: "Como compreender a ansiedade em jovens adultos diante de estudos, trabalho, decisões, relacionamentos e autocobrança.",
    article: true,
  },
  "/conteudos/autoestima-em-jovens-adultos": {
    title: "Autoestima em jovens adultos além do desempenho",
    description: "Reflexões sobre produtividade, comparação, autocrítica e construção de uma autoestima mais estável em jovens adultos.",
    article: true,
  },
};

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

for (const [route, page] of Object.entries(pages)) {
  const url = `${siteUrl}${route}`;
  let html = baseHtml
    .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(page.title)}</title>`)
    .replace(/(<meta name="description" content=").*?(" \/>)/s, `$1${escapeHtml(page.description)}$2`)
    .replace(/(<meta property="og:title" content=").*?(" \/>)/s, `$1${escapeHtml(page.title)}$2`)
    .replace(/(<meta property="og:description" content=").*?(" \/>)/s, `$1${escapeHtml(page.description)}$2`)
    .replace(/(<meta property="og:url" content=").*?(" \/>)/s, `$1${url}$2`)
    .replace(/(<meta name="twitter:title" content=").*?(" \/>)/s, `$1${escapeHtml(page.title)}$2`)
    .replace(/(<meta name="twitter:description" content=").*?(" \/>)/s, `$1${escapeHtml(page.description)}$2`)
    .replace(/<link rel="canonical" href=".*?" \/>/s, `<link rel="canonical" href="${url}" />`);

  const target = path.join(outputRoot, route.slice(1), "index.html");
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html);
}

console.log(`Generated ${Object.keys(pages).length} route-specific SEO pages.`);
