'use client';

import { cn } from '@/lib/utils';
import Icon from '@/shared/icon/icon';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    logo: string;
    height: number;
    circle: string;
    description: string;
    link: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards',
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse',
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller w-full relative z-20 max-w-7xl overflow-hidden',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap py-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl md:w-[450px]"
            key={item.logo + idx}
          >
            <blockquote>
              <div key={idx} className="flex flex-col items-center">
                <div
                  className="relative w-max min-h-12 lg:min-h-16 py-1 px-2 lg:py-3 lg:px-4 flex mb-14 items-center justify-center bg-[#f2f2f2]"
                  key={idx}
                >
                  <Image
                    width={250}
                    height={item.height}
                    src={item.logo}
                    alt={`Logo ${idx}`}
                    className="w-8/12 relative z-10 object-contain"
                    style={{
                      height: item.height + 'px',
                    }}
                  />

                  <div className="absolute rotate-45 -bottom-3 w-6 h-6 p-2 bg-[#f2f2f2]"></div>
                </div>

                <div className="relative flex justify-center items-center w-full h-[4px] bg-[#3B3D63]">
                  <div
                    className={`absolute rounded-full bg-[#3B3D63] ${item.circle}`}
                  ></div>

                  {idx !== items.length - 1 && (
                    <Icon
                      name="right_arrow"
                      className="absolute right-0 text-[#3B3D63]"
                    />
                  )}
                </div>

                <div className="mt-10 pt-10 p-4 bg-[#efefef] rounded-2xl mx-4">
                  <p className="w-full max-w-[580px] font-exo2 text-black text-base font-medium flex-wrap p-0 m-0">
                    {item.description}
                  </p>

                  <Link
                    href={item.link || ''}
                    className="w-max mt-6 z-20 flex items-center justify-center gap-1 bg-[#31a1ff] text-base font-exo2 text-center font-medium rounded-full px-4 py-2 text-white"
                  >
                    Saiba Mais
                  </Link>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
