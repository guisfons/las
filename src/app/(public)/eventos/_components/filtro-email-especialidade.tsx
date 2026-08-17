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
  const [alertEspecialidade, setAlertEspecialidade] = useState<string>('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const allOptions = ['Todos', ...especialidades];

  async function handleAlertSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!alertEspecialidade || !email) return;

    setLoading(true);

    // Submissão via formsubmit.co
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
      // Fallback — tenta envio direto
      form.submit();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full flex flex-col gap-8">
      {/* ─── Filtro de especialidades ─────────────────────────────── */}
      <div className="flex flex-col gap-4">
        <h2 className="font-exo2 font-bold text-2xl md:text-4xl">
          Próximos Eventos
        </h2>

        <div className="flex flex-wrap gap-2 md:gap-3">
          {allOptions.map((sp) => (
            <button
              key={sp}
              onClick={() => onFilterChange(sp)}
              className={cn(
                'font-exo2 text-sm md:text-base px-4 md:px-6 py-1.5 md:py-2 rounded-full border transition-all duration-200',
                filter === sp
                  ? 'bg-[#31A1FF] text-white border-[#31A1FF]'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-[#31A1FF]/40 hover:text-[#31A1FF]',
              )}
            >
              {sp}
            </button>
          ))}
        </div>
      </div>

      {/* ─── Captura de e-mail por especialidade ─────────────────── */}
      <div className="bg-gradient-to-r from-[#f0f7ff] to-[#f0fff4] rounded-2xl border border-[#31A1FF]/10 p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Texto */}
          <div className="flex flex-col gap-2 md:flex-1">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-full bg-[#31A1FF]/10 flex items-center justify-center">
                <Bell className="size-4 text-[#31A1FF]" />
              </div>
              <span className="font-exo2 font-bold text-base text-[#1a2a5e]">
                Fique de olho
              </span>
            </div>
            <p className="font-exo2 text-gray-600 text-sm md:text-base">
              Quero ser avisado dos próximos eventos de:
            </p>

            {/* Botões de especialidade para alerta */}
            <div className="flex flex-wrap gap-2 mt-1">
              {especialidades.map((sp) => (
                <button
                  key={sp}
                  type="button"
                  onClick={() =>
                    setAlertEspecialidade((prev) => (prev === sp ? '' : sp))
                  }
                  className={cn(
                    'font-exo2 text-xs px-3.5 py-1.5 rounded-full border transition-all',
                    alertEspecialidade === sp
                      ? 'bg-[#31A1FF] text-white border-[#31A1FF]'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-[#31A1FF]/40',
                  )}
                >
                  {sp}
                </button>
              ))}
            </div>
          </div>

          {/* Formulário */}
          <div className="md:flex-1">
            {submitted ? (
              <div className="flex flex-col items-center gap-2 py-4">
                <CheckCircle className="size-8 text-[#7EE000]" />
                <p className="font-exo2 font-semibold text-gray-800 text-center">
                  Você será avisado!
                </p>
                <p className="font-exo2 text-gray-500 text-sm text-center">
                  Avisaremos quando houver novos eventos de{' '}
                  <strong>{alertEspecialidade}</strong>.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleAlertSubmit}
                action="https://formsubmit.co/m.sousa@lasforlife.com.br"
                method="POST"
                className="flex flex-col gap-3"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value={`Alerta de Eventos — ${alertEspecialidade || 'Todas especialidades'}`}
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="hidden"
                  name="especialidade"
                  value={alertEspecialidade}
                />

                <div className="flex flex-col gap-1">
                  <label className="font-exo2 text-xs text-gray-500">
                    Especialidade selecionada:{' '}
                    <strong className="text-[#31A1FF]">
                      {alertEspecialidade || 'Nenhuma selecionada'}
                    </strong>
                  </label>
                </div>

                <div className="flex gap-2">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu e-mail"
                    required
                    className="flex-1 font-exo2 text-sm px-4 py-2.5 rounded-full border border-gray-200 bg-white focus:outline-none focus:border-[#31A1FF] focus:ring-2 focus:ring-[#31A1FF]/10 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={loading || !alertEspecialidade}
                    className={cn(
                      'inline-flex items-center gap-1.5 font-exo2 font-semibold text-sm rounded-full px-5 py-2.5 transition-all',
                      alertEspecialidade && !loading
                        ? 'bg-[#31A1FF] text-white hover:bg-[#2090ee]'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed',
                    )}
                  >
                    {loading ? (
                      <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send className="size-3.5" />
                    )}
                    Avisar-me
                  </button>
                </div>

                {!alertEspecialidade && (
                  <p className="font-exo2 text-xs text-gray-400">
                    ← Selecione uma especialidade acima para se inscrever
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
