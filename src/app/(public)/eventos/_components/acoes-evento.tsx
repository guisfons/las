'use client';

import { useEffect, useRef, useState } from 'react';
import { Calendar, Share2 } from 'lucide-react';
import { WPEventoNode } from '@/lib/types/events';
import { cn } from '@/lib/utils';
import { linksDeCalendario, linkWhatsApp } from '@/lib/eventos/agenda';

/**
 * Compartilhar no WhatsApp e adicionar ao calendário — os mesmos dois botões
 * no card da listagem e no topo da página do evento.
 *
 * Eram duas implementações, e divergiam: o card só mostrava o WhatsApp quando
 * havia link de inscrição, e os dois só mostravam o calendário com `fullDate`,
 * que 86 dos 87 eventos não têm. Ver src/lib/eventos/agenda.ts.
 */

type Variante = 'icone' | 'escuro';

export function BotaoWhatsApp({
  evento,
  variante = 'icone',
}: {
  evento: WPEventoNode;
  variante?: Variante;
}) {
  return (
    <a
      href={linkWhatsApp(evento)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Compartilhar no WhatsApp"
      title="Compartilhar no WhatsApp"
      className={cn(
        'inline-flex items-center gap-2 font-exo2 transition-colors',
        variante === 'icone'
          ? 'p-2 rounded-full bg-[#25D366]/10 text-[#1fa855] hover:bg-[#25D366]/20'
          : 'font-medium text-sm rounded-full px-5 py-3 bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/30',
      )}
    >
      <Share2 className={variante === 'icone' ? 'size-3.5' : 'size-4'} />
      {variante === 'escuro' && 'WhatsApp'}
    </a>
  );
}

export function BotaoCalendario({
  evento,
  variante = 'icone',
}: {
  evento: WPEventoNode;
  variante?: Variante;
}) {
  const [aberto, setAberto] = useState(false);
  const raiz = useRef<HTMLDivElement>(null);
  const links = linksDeCalendario(evento);

  // Fecha ao clicar fora ou apertar Esc.
  useEffect(() => {
    if (!aberto) return;
    const fora = (e: MouseEvent) => {
      if (!raiz.current?.contains(e.target as Node)) setAberto(false);
    };
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setAberto(false);
    document.addEventListener('mousedown', fora);
    document.addEventListener('keydown', esc);
    return () => {
      document.removeEventListener('mousedown', fora);
      document.removeEventListener('keydown', esc);
    };
  }, [aberto]);

  if (!links) return null;

  // O .ics é gerado na hora: um arquivo por evento publicado no site seria
  // mais uma coisa para manter em dia com o WordPress.
  const baixarIcs = () => {
    const blob = new Blob([links.ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${evento.slug}.ics`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setAberto(false);
  };

  const item =
    'flex w-full items-center gap-2 px-4 py-3 font-exo2 text-sm text-gray-800 hover:bg-gray-50 transition-colors text-left';

  return (
    <div ref={raiz} className="relative">
      <button
        type="button"
        onClick={() => setAberto((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={aberto}
        aria-label="Adicionar ao calendário"
        title="Adicionar ao calendário"
        className={cn(
          'inline-flex items-center gap-2 font-exo2 transition-colors',
          variante === 'icone'
            ? 'p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200'
            : 'font-medium text-sm rounded-full px-5 py-3 bg-white/15 backdrop-blur-sm border border-white/20 text-white hover:bg-white/25',
        )}
      >
        <Calendar className={variante === 'icone' ? 'size-3.5' : 'size-4'} />
        {variante === 'escuro' && 'Adicionar ao Calendário'}
      </button>

      {aberto && (
        <div
          role="menu"
          className="absolute bottom-full mb-2 left-0 z-50 min-w-[190px] overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5"
        >
          <a
            role="menuitem"
            href={links.google}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setAberto(false)}
            className={item}
          >
            Google Agenda
          </a>
          <a
            role="menuitem"
            href={links.outlook}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setAberto(false)}
            className={cn(item, 'border-t border-gray-100')}
          >
            Outlook
          </a>
          <button
            role="menuitem"
            type="button"
            onClick={baixarIcs}
            className={cn(item, 'border-t border-gray-100')}
          >
            Apple e outros (.ics)
          </button>
        </div>
      )}
    </div>
  );
}
