import { Product } from '../../../_components/card-product';

function getYouTubeEmbedUrl(url: string): string | null {
  const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? `https://www.youtube.com/embed/${match[1]}?rel=0` : null;
}

export default function VideoProduct({ product }: { product: Product }) {
  return (
    <div className="w-full">
      {!product.detail?.videos ||
        (product.detail?.videos.length === 0 && (
          <p className="max-w-3xl font-exo2 text-lg text-label">
            Não há vídeos disponíveis.
          </p>
        ))}

      {product.detail?.videos.map((item, index) => {
        const embedUrl = getYouTubeEmbedUrl(item.url);
        if (!embedUrl) return null; // Se não conseguiu extrair, não mostra

        return (
          <div
            key={index}
            className="w-full flex flex-col-reverse md:grid md:grid-cols-2 gap-4 mb-8"
          >
            <div className="aspect-video w-full bg-bgCard rounded-2xl overflow-hidden">
              <iframe
                src={embedUrl}
                title={`YouTube video ${index}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="aspect-video w-full h-full"
                frameBorder="0"
              />
            </div>

            <p
              className="max-w-3xl font-exo2 text-sm md:text-lg text-label"
              dangerouslySetInnerHTML={{
                __html: item.description || '',
              }}
            ></p>
          </div>
        );
      })}
    </div>
  );
}
