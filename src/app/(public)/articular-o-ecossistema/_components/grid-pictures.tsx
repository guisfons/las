'use client';

import { cn } from '@/lib/utils';

import { WPPageArticulateAcf } from '@/lib/types/pages';

export default function GridPictures({
  title,
  pictures,
  acfData,
}: {
  title?: string;
  pictures: string[];
  acfData?: WPPageArticulateAcf['gridPictures'];
}) {
  const displayTitle = acfData?.title || title;
  const displayPictures =
    acfData?.pictures?.nodes && acfData.pictures.nodes.length > 0
      ? acfData.pictures.nodes.map((n) => n.sourceUrl)
      : pictures;

  return (
    <section
      id="Initiatives"
      className="relative w-full flex items-center justify-center flex-wrap"
    >
      <div className="relative z-20 max-w-7xl w-full px-6 py-6">
        {displayTitle && (
          <p className="w-full font-exo2 text-2xl font-bold md:text-3xl">
            {displayTitle}
          </p>
        )}

        <div className="w-full h-[460px] grid grid-cols-2 md:grid-cols-7 md:grid-rows-2 gap-6 mt-10 mx-auto">
          {displayPictures.map((el, idx) => {
            return (
              <div
                key={idx}
                className={cn(
                  'relative w-full m-0 p-0 flex flex-col items-center justify-center rounded-2xl overflow-hidden',
                  { 'col-span-2 md:col-span-3 md:row-span-2': idx === 0 },
                  { 'md:col-span-2': idx === 1 },
                  { 'md:col-span-2': idx === 2 },
                  { 'md:col-span-4': idx === 3 },
                  { 'md:col-span-2': idx >= 4 },
                )}
                style={{
                  backgroundImage: `url(${el})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
