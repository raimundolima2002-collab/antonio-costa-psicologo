import { useEffect } from "react";

const SITE_URL = "https://psicologoparaadolescente.com.br";

type SeoMetaProps = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

export default function SeoMeta({ title, description, path, type = "website" }: SeoMetaProps) {
  useEffect(() => {
    const url = `${SITE_URL}${path === "/" ? "/" : path}`;
    document.title = title;

    const setMeta = (selector: string, attribute: "name" | "property", content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, selector.match(/['\"]([^'\"]+)['\"]/)?.[1] ?? "");
        document.head.appendChild(element);
      }
      element.content = content;
    };

    setMeta('meta[name="description"]', "name", description);
    setMeta('meta[property="og:type"]', "property", type);
    setMeta('meta[property="og:title"]', "property", title);
    setMeta('meta[property="og:description"]', "property", description);
    setMeta('meta[property="og:url"]', "property", url);
    setMeta('meta[name="twitter:title"]', "name", title);
    setMeta('meta[name="twitter:description"]', "name", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    let structuredData = document.head.querySelector<HTMLScriptElement>('script[data-seo-route="true"]');
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.type = "application/ld+json";
      structuredData.dataset.seoRoute = "true";
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": type === "article" ? "Article" : "WebPage",
      name: title,
      description,
      url,
      inLanguage: "pt-BR",
      ...(type === "article" ? { author: { "@type": "Person", name: "Antonio Costa", url: SITE_URL } } : {}),
    });
  }, [description, path, title, type]);

  return null;
}
