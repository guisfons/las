import { NextResponse } from 'next/server';

export async function GET() {
  const raw = process.env.CERTIFICATES_JSON;

  if (!raw) {
    return NextResponse.json(
      { error: 'Variável CERTIFICATES_JSON não foi configurada.' },
      { status: 500 },
    );
  }

  try {
    const data = JSON.parse(raw);

    if (!Array.isArray(data)) {
      return NextResponse.json(
        { error: 'CERTIFICATES_JSON precisa ser um array JSON válido.' },
        { status: 500 },
      );
    }

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: 'CERTIFICATES_JSON contém um JSON inválido.' },
      { status: 500 },
    );
  }
}
