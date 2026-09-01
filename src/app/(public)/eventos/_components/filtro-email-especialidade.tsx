'use client';

import { useState } from 'react';
import { Bell, Send, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FiltroEmailEspecialidadeProps {
  especialidades: string[];
  filter: string | null;
  segment: string;
  onFilterChange: (f: string | null) => void;
  dynamicSegments: string[];
}

export default function FiltroEmailEspecialidade({
  especialidades,
  dynamicSegments,
  filter,
  segment,
  onFilterChange,
  onSegmentChange,
}: FiltroEmailEspecialidadeProps) {
  const tabs = [...dynamicSegments, 'Passados'];
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedAlertType, setSelectedAlertType] = useState('Autoral');

  const cleanEspecialidades = (especialidades || []).filter(
    (sp) => sp && sp.trim().toLowerCase() !== 'todos',
  );

  async function handleAlertSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      await fetch('https://formsubmit.co/ajax/m.sousa@lasforlife.com.br', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      setSubmitted(true);
    } catch {
      form.submit();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
      {/* ─── 1. Filtros Principais (Esquerda) ─────────────────────────────── */}
      <div className="flex flex-col gap-8 flex-1">
        <div>
          <h2 className="font-exo2 font-bold text-3xl md:text-4xl text-[#1a2a5e]">
            Eventos
          </h2>
          <p className="font-exo2 text-gray-500 text-sm md:text-base mt-1">
            Explore os eventos da LAS For Life por segmento e especialidade.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Abas de Segmento */}
          <div className="flex flex-col gap-2">
            <h3 className="font-exo2 text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Segmento
            </h3>
            <div className="flex flex-wrap gap-2">
              {tabs.map((s) => (
                <button
                  key={s}
                  onClick={() => onSegmentChange(s)}
                  className={cn(
                    'font-exo2 text-sm md:text-base px-5 py-2 rounded-full border transition-all duration-200 font-medium',
                    segment === s
                      ? 'bg-[#1a2a5e] text-white border-[#1a2a5e] shadow-md shadow-[#1a2a5e]/20 font-semibold'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-[#1a2a5e]/40 hover:text-[#1a2a5e]',
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Abas de Especialidade */}
          <div className="flex flex-col gap-2">
            <h3 className="font-exo2 text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Especialidade
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                key="todos"
                onClick={() => onFilterChange(null)}
                className={cn(
                  'font-exo2 text-sm px-4 py-1.5 rounded-full border transition-all duration-200',
                  !filter
                    ? 'bg-[#31A1FF] text-white border-[#31A1FF] font-semibold'
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-[#31A1FF]/50 hover:text-[#31A1FF] hover:bg-blue-50/50',
                )}
              >
                Todos
              </button>
              {cleanEspecialidades.map((sp) => {
                const isActive = filter === sp;
                return (
                  <button
                    key={sp}
                    onClick={() => onFilterChange(isActive ? null : sp)}
                    className={cn(
                      'font-exo2 text-sm px-4 py-1.5 rounded-full border transition-all duration-200',
                      isActive
                        ? 'bg-[#31A1FF] text-white border-[#31A1FF] font-semibold'
                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-[#31A1FF]/50 hover:text-[#31A1FF] hover:bg-blue-50/50',
                    )}
                  >
                    {sp}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ─── 2. Formulário de Alerta (Direita) ────────────────────────────── */}
      <div className="w-full lg:w-[380px] shrink-0 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a2a5e] to-[#0a1433] p-6 text-white shadow-xl border border-[#31A1FF]/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#31A1FF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/15 w-fit">
            <Bell className="size-3.5 text-[#31A1FF]" />
            <span className="font-exo2 text-[10px] sm:text-xs font-semibold tracking-wide uppercase">
              Quero ser avisado
            </span>
          </div>

          <h3 className="font-exo2 font-bold text-xl leading-tight">
            Sobre os próximos eventos
          </h3>

          {submitted ? (
            <div className="flex flex-col items-center gap-2 p-5 bg-white/10 rounded-2xl border border-[#7EE000]/40 text-center mt-2">
              <CheckCircle className="size-8 text-[#7EE000]" />
              <h4 className="font-exo2 font-bold text-lg text-white">
                Cadastrado!
              </h4>
              <p className="font-exo2 text-white/80 text-xs">
                Avisaremos você sobre novos eventos.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleAlertSubmit}
              action="https://formsubmit.co/m.sousa@lasforlife.com.br"
              method="POST"
              className="flex flex-col gap-3 mt-2"
            >
              <input
                type="hidden"
                name="_subject"
                value={`Alerta de Eventos — ${selectedAlertType}`}
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="flex flex-col gap-1.5">
                <label className="font-exo2 text-xs text-white/80">
                  Tipo de evento
                </label>
                <select
                  name="tipo_evento"
                  value={selectedAlertType}
                  onChange={(e) => setSelectedAlertType(e.target.value)}
                  className="w-full font-exo2 text-sm px-3 py-2.5 rounded-xl border border-white/20 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#31A1FF]"
                >
                  <option value="Autoral" className="text-gray-900">
                    Autoral
                  </option>
                  <option value="Educacional" className="text-gray-900">
                    Educacional
                  </option>
                  <option value="Patrocinado" className="text-gray-900">
                    Patrocinado
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5 mt-1">
                <label className="font-exo2 text-xs text-white/80">
                  Seu e-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="digite@seuemail.com.br"
                  required
                  className="w-full font-exo2 text-sm px-3 py-2.5 rounded-xl border border-white/20 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#31A1FF]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 font-exo2 font-bold text-sm rounded-xl px-4 py-3 bg-[#31A1FF] text-white hover:bg-[#2090ee] transition-all disabled:opacity-50"
              >
                {loading ? (
                  <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="size-4" /> Enviar
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
