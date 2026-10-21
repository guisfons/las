/**
 * Dados estruturados (schema.org em JSON-LD) dentro da página. Vai no HTML que
 * o servidor entrega, então Google e robôs de IA que não executam script leem.
 * O "<" é escapado para o conteúdo nunca fechar a tag por engano.
 */
export function JsonLd({ dados }: { dados: object | object[] }) {
  const grafo = Array.isArray(dados)
    ? { '@context': 'https://schema.org', '@graph': dados }
    : { '@context': 'https://schema.org', ...dados };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(grafo).replace(/</g, '\\u003c'),
      }}
    />
  );
}
