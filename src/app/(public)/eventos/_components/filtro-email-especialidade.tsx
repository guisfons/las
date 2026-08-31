'use client';

import { useState } from 'react';
import { Bell, Send, CheckCircle } from 'lucide-react';
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
  const [alertEspecialidade, setAlertEspecialidade] = useState<string>(
    filter !== 'Todos' ? filter : '',
  );
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sincroniza a especialidade do alerta quando o filtro da página muda
  const activeCategory = filter !== 'Todos' ? filter : alertEspecialidade;

  const allOptions = ['Todos', ...especialidades];

  const handleSelectCategory = (sp: string) => {
    onFilterChange(sp);
    if (sp !== 'Todos') {
      setAlertEspecialidade(sp);
    }
  };

  async function handleAlertSubmit(e: React.FormEvent) {
    e.preventDefault();
    const targetEspecialidade = activeCategory || 'Geral';
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
      {/* ─── Filtro de especialidades ─────────────────────────────── */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
          <h2 className="font-exo2 font-bold text-2xl md:text-4xl text-[#1a2a5e]">
            Próximos Eventos
          </h2>
          {filter !== 'Todos' && (
            <span className="font-exo2 text-xs text-gray-500">
              Categoria selecionada:{' '}
              <strong className="text-[#31A1FF]">{filter}</strong>
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2 md:gap-3">
          {allOptions.map((sp) => (
            <button
              key={sp}
              onClick={() => handleSelectCategory(sp)}
              className={cn(
                'font-exo2 text-sm md:text-base px-4 md:px-6 py-2 rounded-full border transition-all duration-200 cursor-pointer',
                filter === sp
                  ? 'bg-[#31A1FF] text-white border-[#31A1FF] shadow-sm shadow-[#31A1FF]/30 font-semibold'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-[#31A1FF]/40 hover:text-[#31A1FF]',
              )}
            >
              {sp}
            </button>
          ))}
        </div>
      </div>

      {/* ─── Captura de e-mail por especialidade (Fique de olho) ──── */}
      <div className="bg-gradient-to-r from-[#f0f7ff] via-[#f7fafc] to-[#f0fff4] rounded-3xl border border-[#31A1FF]/15 p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Texto */}
          <div className="flex flex-col gap-3 md:flex-1">
            <div className="flex items-center gap-2">
              <div className="size-9 rounded-xl bg-[#31A1FF]/15 flex items-center justify-center shrink-0">
                <Bell className="size-4 text-[#31A1FF]" />
              </div>
              <span className="font-exo2 font-bold text-lg text-[#1a2a5e]">
                Fique de olho
              </span>
            </div>
            <p className="font-exo2 text-gray-600 text-sm md:text-base leading-relaxed">
              Quero ser avisado sobre os próximos eventos de:{' '}
              {activeCategory ? (
                <strong className="text-[#31A1FF] font-bold">
                  {activeCategory}
                </strong>
              ) : (
                'minha especialidade'
              )}
            </p>

            {/* Botões de especialidade para alerta */}
            <div className="flex flex-wrap gap-2 mt-1">
              {especialidades.map((sp) => (
                <button
                  key={sp}
                  type="button"
                  onClick={() => handleSelectCategory(sp)}
                  className={cn(
                    'font-exo2 text-xs px-3.5 py-1.5 rounded-full border transition-all cursor-pointer',
                    activeCategory === sp
                      ? 'bg-[#31A1FF] text-white border-[#31A1FF] font-semibold'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-[#31A1FF]/40',
                  )}
                >
                  {sp}
                </button>
              ))}
            </div>
          </div>

          {/* Formulário */}
          <div className="md:w-80 lg:w-96 shrink-0">
            {submitted ? (
              <div className="flex flex-col items-center gap-2 py-4 px-4 bg-white/80 rounded-2xl border border-[#7EE000]/30 text-center">
                <CheckCircle className="size-8 text-[#7EE000]" />
                <p className="font-exo2 font-bold text-gray-800">
                  Inscrição realizada!
                </p>
                <p className="font-exo2 text-gray-500 text-xs">
                  Avisaremos quando houver novos eventos de{' '}
                  <strong className="text-[#31A1FF]">
                    {activeCategory || 'sua área'}
                  </strong>
                  .
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleAlertSubmit}
                action="https://formsubmit.co/m.sousa@lasforlife.com.br"
                method="POST"
                className="flex flex-col gap-3 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm"
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
                  value={activeCategory}
                />

                <div className="flex flex-col gap-1">
                  <label className="font-exo2 text-xs text-gray-500">
                    Alerta ativado para:{' '}
                    <strong className="text-[#31A1FF]">
                      {activeCategory || 'Todas as especialidades'}
                    </strong>
                  </label>
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor e-mail"
                    required
                    className="w-full font-exo2 text-sm px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-[#31A1FF] focus:ring-2 focus:ring-[#31A1FF]/15 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 font-exo2 font-semibold text-sm rounded-xl px-5 py-2.5 bg-[#31A1FF] text-white hover:bg-[#2090ee] active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="size-3.5" /> Quero ser avisado
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
