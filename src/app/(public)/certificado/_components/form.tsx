'use client';

import { useEffect, useState } from 'react';

type CertData = {
  email: string;
  link: string;
};

export default function CertificadoForm() {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState<string | null>(null);
  const [emailData, setEmailData] = useState<CertData[]>([]);
  const [resultado, setResultado] = useState<CertData | null>(null);

  useEffect(() => {
    fetch('/api/certificados')
      .then((r) => r.json())
      .then((d: CertData[]) => setEmailData(d));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const item = emailData.find(
      (i) => i.email.toLowerCase() === email.toLowerCase(),
    );

    if (item) {
      setResultado(item);
      setMensagem('Certificado encontrado!');
    } else {
      setResultado(null);
      setMensagem('E-mail não encontrado.');
    }
  };

  return (
    <>
      <div className="w-full flex justify-center mt-10">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="email"
            required
            placeholder="Digite seu e-mail"
            className="flex border border-input px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground !outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full font-exo2 !text-lg h-12 md:w-11/12 max-w-96 rounded-full bg-[#f7f7f7]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="bg-[#73CC00] font-exo2 py-3 px-6 rounded-full text-center text-white"
          >
            Consultar
          </button>
        </form>
      </div>

      {(mensagem || resultado) && (
        <div className="text-center mt-4 text-white text-lg flex flex-col items-center gap-4">
          {mensagem && <p>{mensagem}</p>}

          {resultado && (
            <a
              href={resultado.link}
              target="_blank"
              rel="noreferrer"
              className="min-w-max w-11/12 bg-[#F9D229] text-base font-exo2 text-center font-medium rounded-full px-6 py-3 text-[#000000]"
            >
              Baixar certificado
            </a>
          )}
        </div>
      )}
    </>
  );
}
