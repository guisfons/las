import { cn } from '@/lib/utils';
import Icon from '@/shared/icon/icon';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroBanner({
  imageLine,
  title,
  description,
  label,
  classNameTitle,
  classNameDescription,
  classNameBanner,
  classNameBotton,
}: {
  imageLine: string;
  title?: string;
  description?: string;
  label?: string;
  classNameTitle?: string;
  classNameDescription?: string;
  classNameBanner?: string;
  classNameBotton?: string;
}) {
  return (
    <section
      className={cn(
        'relative w-full h-dvh  bg-no-repeat bg-top bg-cover flex items-center justify-center flex-col',
        classNameBanner,
      )}
    >
      <Image
        src={imageLine}
        width={1440}
        height={774}
        alt="line"
        className="hidden sm:flex absolute top-0 w-full h-full object-cover"
      />

      <div className="flex items-center justify-center flex-col">
        <p
          className={cn(
            'font-exo2 font-bold text-2xl lg:text-[56px]  text-center',
            classNameTitle,
          )}
        >
          {title}
        </p>

        <p
          className={cn(
            'max-w-[300px] md:max-w-[565px] font-exo2 font-normal text-base text-center mt-10 mb-10',
            classNameDescription,
          )}
        >
          {description}
        </p>

        <Link
          href={'/education#Initiatives'}
          className={cn(
            'min-w-max z-20 flex items-center justify-center gap-1 text-base font-exo2 text-center font-medium rounded-full px-7 py-2',
            classNameBotton,
          )}
        >
          {label} <Icon name="arrow_right"></Icon>
        </Link>
      </div>
    </section>
  );
}
