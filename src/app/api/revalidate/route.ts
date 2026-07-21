import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { secret, path } = body;

    const expectedSecret = process.env.REVALIDATION_SECRET || 'las_secret_1234';

    if (secret !== expectedSecret) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    if (path) {
      revalidatePath(path);
      revalidatePath(path, 'page');
    } else {
      // Se não enviou path específico, revalida tudo a partir do root
      revalidatePath('/', 'layout');
    }

    return NextResponse.json({ revalidated: true, now: Date.now(), path: path || 'all' });
  } catch (err) {
    console.error('Error revalidating:', err);
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
