export interface Clinic {
  name: string;
  city: string;
  address: string;
  cep: string;
  email?: string;
  phone?: string;
  waze?: string;
  /** Médicos que atendem na clínica, só com autorização de cada um. */
  doctors?: string[];
}

export interface StateData {
  name: string;
  clinics: Clinic[];
}

/** Um mapa por produto: textos da seção e as clínicas por UF. */
export interface MapaUnidades {
  titulo: string;
  instrucao: string;
  ariaMapa: string;
  legendaCom: string;
  legendaSem: string;
  vazio: string;
  singular: string;
  plural: string;
  /** Nota curta abaixo do mapa (opcional). */
  nota?: string;
  estados: Record<string, StateData>;
}
