'use client';

import { useState } from 'react';
import { Bell, Send, CheckCircle, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FiltroEmailEspecialidadeProps {
  especialidades: string[];
  filter: string;
  onFilterChange: (f: string) => void;
}

export default function FiltroEmailEspecialidade({
  especialidades,
  filter,
  onFilterChange,
}: FiltroEmailEspecialidadeProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const activeCategory = filter !== 'Todos' ? filter : '';
  const cleanEspecialidades = (especialidades || []).filter(
    (sp) => sp && sp.trim().toLowerCase() !== 'todos',
  );
  const allOptions = ['Todos', ...cleanEspecialidades];

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
    <div className="w-full flex flex-col gap-8">
      {/* ─── 1. Filtro principal de especialidades (único na página) ─────────────────────────────── */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <h2 className="font-exo2 font-bold text-3xl md:text-4xl text-[#1a2a5e]">
              Próximos Eventos
            </h2>
            <p className="font-exo2 text-gray-500 text-sm md:text-base mt-1">
              Filtre os eventos da LAS For Life por especialidade médica
            </p>
          </div>
          {filter !== 'Todos' && (
            <span className="font-exo2 text-xs md:text-sm text-gray-600 bg-gray-100 px-3.5 py-1.5 rounded-full border border-gray-200 w-fit">
              Exibindo:{' '}
              <strong className="text-[#31A1FF] font-semibold">{filter}</strong>
            </span>
          )}
        </div>

        {/* Botões de filtro por categoria */}
        <div className="flex flex-wrap gap-2 md:gap-3">
          {allOptions.map((sp) => (
            <button
              key={sp}
              onClick={() => onFilterChange(sp)}
              className={cn(
                'font-exo2 text-sm md:text-base px-5 py-2.5 rounded-full border transition-all duration-200 cursor-pointer font-medium',
                filter === sp
                  ? 'bg-[#31A1FF] text-white border-[#31A1FF] shadow-md shadow-[#31A1FF]/25 font-semibold scale-[1.02]'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-[#31A1FF]/50 hover:text-[#31A1FF] hover:bg-[#31A1FF]/5',
              )}
            >
              {sp}
            </button>
          ))}
        </div>
      </div>

      {/* ─── 2. Section de alerta por e-mail (Refeita para leitura clara e elegante) ──── */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a2a5e] via-[#111e47] to-[#0a1433] p-6 sm:p-8 md:p-10 text-white shadow-xl border border-[#31A1FF]/20">
        {/* Efeitos de iluminação de fundo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#31A1FF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-[#7EE000]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Lado Esquerdo: Texto explicativo de alto contraste */}
          <div className="flex flex-col gap-4 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 w-fit">
              <Bell className="size-4 text-[#31A1FF]" />
              <span className="font-exo2 text-xs md:text-sm font-semibold tracking-wide text-white uppercase">
                Alerta de novos eventos
              </span>
            </div>

            <h3 className="font-exo2 font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
              Quer ser avisado sobre os próximos eventos?
            </h3>

            <p className="font-exo2 text-white/80 text-sm md:text-base leading-relaxed">
              Receba notificações em primeira mão assim que novas turmas,
              simpósios ou congressos da sua área forem publicados.
            </p>

            {/* Indicação da especialidade sem duplicar os botões de filtro */}
            <div className="flex items-center gap-2 text-xs md:text-sm text-white/90 pt-1">
              <Sparkles className="size-4 text-[#7EE000] shrink-0" />
              <span>
                Notificações direcionadas para:{' '}
                <strong className="text-[#31A1FF] font-bold underline underline-offset-4 decoration-[#31A1FF]/40">
                  {activeCategory ? activeCategory : 'Todas as especialidades'}
                </strong>
              </span>
            </div>
          </div>

          {/* Lado Direito: Form limpo com alto contraste */}
          <div className="w-full lg:w-[420px] shrink-0">
            {submitted ? (
              <div className="flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-[#7EE000]/40 text-center">
                <CheckCircle className="size-10 text-[#7EE000]" />
                <h4 className="font-exo2 font-bold text-xl text-white">
                  Alerta ativado com sucesso!
                </h4>
                <p className="font-exo2 text-white/80 text-sm">
                  Enviaremos um aviso para o seu e-mail assim que houver
                  novidades sobre{' '}
                  <strong className="text-[#31A1FF]">
                    {activeCategory || 'todas as especialidades'}
                  </strong>
                  .
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleAlertSubmit}
                action="https://formsubmit.co/m.sousa@lasforlife.com.br"
                method="POST"
                className="flex flex-col gap-3 bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/15 shadow-2xl"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value={`Alerta de Eventos — ${activeCategory || 'Geral'}`}
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="hidden"
                  name="especialidade"
                  value={activeCategory || 'Todas'}
                />

                <label
                  htmlFor="alert-email"
                  className="font-exo2 text-xs font-semibold text-white/90 uppercase tracking-wider"
                >
                  Seu e-mail profissional
                </label>

                <div className="flex flex-col gap-3 w-full">
                  <input
                    id="alert-email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="digite@seuemail.com.br"
                    required
                    className="w-full font-exo2 text-sm px-4 py-3 rounded-xl border border-white/20 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#31A1FF] transition-all shadow-inner"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 font-exo2 font-bold text-sm rounded-xl px-6 py-3 bg-[#31A1FF] text-white hover:bg-[#2090ee] active:scale-[0.98] transition-all shadow-lg shadow-[#31A1FF]/30 disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <span className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="size-4" /> Quero ser avisado
                      </>
                    )}
                  </button>
                </div>

                <p className="font-exo2 text-[11px] text-white/60 text-center sm:text-left mt-1">
                  Respeitamos sua privacidade. Sem spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
