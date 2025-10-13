'use client';

import { Menu } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useScrollTo } from '@/hooks/use-autoScroll';
import Link from 'next/link';

interface MenuItem {
  title: string;
  url: string;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  items?: MenuItem[];
  with_border?: boolean;
  class?: string;
  sectionId?: string;
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
    sectionId: string;
  }[];
  auth?: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
    };
    register: {
      text: string;
      url: string;
    };
  };
}

const Navbar = ({
  logo = {
    url: '/',
    src: '/logo.svg',
    alt: 'logo',
    title: 'Shadcnblocks.com',
  },
  menu = [
    {
      title: 'O Movimento',
      url: '/',
      sectionId: 'AboutUs',
    },
    {
      title: 'LASFORLIFE',
      url: '/',
      sectionId: 'WaysToTransformHealth',
    },
    {
      title: 'Produtos',
      url: '/products',
    },
    {
      title: 'Eventos',
      url: '/education',
      sectionId: 'nextEvent',
    },
    {
      title: 'Serviços Técnicos',
      url: '/technical',
    },
  ],
  auth = {
    login: { text: 'Seja um distribuidor', url: `/become-a-distributor` },
    signup: { text: 'Sign up', url: '/' },
    register: {
      text: 'Seja um distribuidor',
      url: `/become-a-distributor`,
    },
  },
}: Navbar1Props) => {
  const [activeSection, setActiveSection] = useState('');
  const { scrollToSection } = useScrollTo();

  const handleMobileNavClick = (item: MenuItem, e: React.MouseEvent) => {
    e.preventDefault();

    if (item.sectionId) {
      setActiveSection(item.sectionId);
      const targetPage = item.url !== '/' ? item.url : undefined;
      scrollToSection(item.sectionId, targetPage);

      // Fechar o menu mobile (opcional)
      const closeButton = document.querySelector(
        '[data-sheet-close]',
      ) as HTMLButtonElement;
      closeButton?.click();
    } else {
      window.location.href = item.url;
    }
  };

  return (
    <>
      <section className="sticky top-0 py-4 px-6 z-50 bg-white">
        <div className="w-full mx-auto">
          {/* Desktop Menu */}
          <nav className="hidden max-w-7xl mx-auto justify-between lg:flex z-50">
            <div className="w-full flex items-center gap-6">
              <Link href={logo.url} className=" flex items-center gap-2">
                <Image
                  width={108}
                  height={48}
                  src={logo.src}
                  alt={logo.alt}
                  className="size-full"
                />
              </Link>
              <div className="flex items-center ml-auto">
                <NavigationMenu>
                  <NavigationMenuList>
                    {menu.map((item) => renderMenuItem(item, activeSection))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>

            <div className="flex gap-3 items-center w-max">
              <a
                href={auth.register.url}
                className="min-w-max w-11/12 bg-[#F9D229] text-base font-exo2 text-center font-medium rounded-full px-6 py-3 text-[#000000]"
              >
                {auth.register.text}
              </a>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="block lg:hidden">
            <div className="flex items-center justify-between py-3 lg:p-0">
              <Link href={logo.url} className="flex items-center gap-2">
                <Image width={100} height={50} src={logo.src} alt={logo.alt} />
              </Link>

              <div className="flex items-center gap-6">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-transparent border-transparent"
                    >
                      <Menu className="!size-8  text-[#rgb(9, 9, 9)] bg-transparent" />
                    </Button>
                  </SheetTrigger>

                  <SheetContent
                    side="left"
                    className="overflow-y-auto flex flex-col items-center justify-start"
                  >
                    <SheetHeader>
                      <SheetTitle>
                        <a title="Logo" href={logo.url}>
                          <Image
                            width={100}
                            height={50}
                            src={logo.src}
                            alt={logo.alt}
                          />
                        </a>
                      </SheetTitle>
                    </SheetHeader>

                    <div className="size-full !h-navMobile flex flex-col relative ">
                      <Accordion
                        type="single"
                        collapsible
                        className="relative flex w-full flex-col gap-4 px-4 pb-24 z-10 max-h-accordionNav overflow-auto"
                      >
                        {menu.map((item, idx) =>
                          renderMobileMenuItem(
                            item,
                            idx,
                            handleMobileNavClick,
                            activeSection,
                          ),
                        )}
                      </Accordion>

                      <div className="absolute py-7 bottom-0 w-full flex flex-col gap-2 items-center justify-center z-20">
                        <a
                          href={auth.register.url}
                          className="w-11/12 bg-[#F9D229] text-base text-center font-exo2 font-medium rounded-full px-6 py-3 text-[#000000]"
                        >
                          {auth.register.text}
                        </a>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const renderMenuItem = (item: MenuItem, activeSection: string) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-muted-foreground">
        <NavigationMenuTrigger className="font-exo2 text-base font-normal text-[#090909] hover:!bg-transparent focus:!bg-transparent hover:!text-[#090909]">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent
          className={cn('max-w-7xl mx-auto w-full !grid !grid-cols-2', {
            '!grid-cols-3': item.items.length > 4,
          })}
        >
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  const isActive = item.sectionId === activeSection;

  return (
    <Link
      rel="preload"
      scroll={true}
      key={item.title}
      href={`${item.url}${item.sectionId ? `#${item.sectionId}` : ''}`}
      className={cn(
        'font-exo2 text-base font-normal group h-max w-max border-b-2 text-[#090909] border-solid transition-colors hover:bg-transparent focus:bg-transparent hover:text-[#090909] focus:text-[#090909] focus:outline-none disabled:pointer-events-none disabled:opacity-50 items-center justify-center bg-transparent !mx-4 inline-flex cursor-pointer',
        {
          'border-[#090909]': isActive,
          'border-transparent hover:!border-[#090909]': !isActive,
        },
      )}
    >
      {item.title}
    </Link>
  );
};

const renderMobileMenuItem = (
  item: MenuItem,
  idx: number,
  handleMobileNavClick: (item: MenuItem, e: React.MouseEvent) => void,
  activeSection: string,
) => {
  if (item.items) {
    return (
      <AccordionItem
        key={idx}
        value={item.title}
        className="border-b-0 text-[#090909]"
      >
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline text-[#090909]">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  const isActive = item.sectionId === activeSection;

  return (
    <a
      key={item.title}
      className={cn(
        'text-md font-semibold text-[#090909] cursor-pointer block py-2',
        {
          'text-blue-600 font-bold': isActive,
        },
      )}
      onClick={(e) => handleMobileNavClick(item, e)}
    >
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  if (item.title && item.icon) {
    return (
      <a
        className={cn(
          `group lg:max-w-[350px] lg:border-none border-b-[1px] border-[#7D7D7D4D] border-solid 
          flex flex-row w-full gap-4 p-3 leading-none no-underline transition-colors 
          outline-none select-none hover:text-accent-foreground
        `,
          { 'row-span-2': !item.title && !item.icon },
          {
            'lg:border-b-[1px]  lg:border-[#7D7D7D4D] lg:border-solid py-8 lg:py-0 !pb-8':
              item.with_border,
          },
          item?.class,
        )}
        href={item.url}
      >
        {item.title && item.icon && (
          <>
            <div className="text-[#090909]">{item.icon}</div>
            <div className="flex flex-col gap-1">
              <span
                className="text-xl font-sourceSans3 transition-all
                text-[#090909] group-hover:text-transparent bg-clip-text 
                bg-gradient-to-br from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100% "
              >
                {item.title}
              </span>
              {item.description && (
                <p className="text-lg leading-snug text-muted-foreground font-sourceSans3 text-[#7D7D7D]">
                  {item.description}
                </p>
              )}
            </div>
          </>
        )}
      </a>
    );
  } else {
    return (
      <a
        className={cn(
          'lg:max-w-[350px] hidden lg:flex lg:border-none border-b-[1px]  border-[#7D7D7D4D] border-solid flex-row w-full gap-4 p-3 leading-none no-underline transition-colors outline-none select-none  hover:text-accent-foreground',
          { 'row-span-2': !item.title && !item.icon },
          {
            'lg:border-b-[1px]  lg:border-[#7D7D7D4D]  lg:border-solid py-8 lg:py-0 !pb-8':
              item.with_border,
          },
        )}
        href={item.url}
      >
        {!item.title && !item.icon && item.description && (
          <figure className="min-w-[476px]"> {item.description} </figure>
        )}
      </a>
    );
  }
};

export { Navbar };
