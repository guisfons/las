// Clínicas que oferecem o DUROLANE®.
// Só entra quem autorizou aparecer no site (coluna "Autoriza aparecer no site" = Sim
// na planilha do Comercial). Enquanto a lista estiver vazia, a seção não aparece
// na página do produto.
//
// Formato de cada estado (mesmo do SpineMED):
//   SP: {
//     name: 'São Paulo',
//     clinics: [
//       {
//         name: 'Nome público da clínica',
//         city: 'São Paulo – SP',
//         address: 'Rua, número – Bairro – São Paulo – SP',
//         cep: 'CEP: 00000-000',
//         phone: '(11) 0000-0000',
//         email: 'contato@clinica.com.br',
//         doctors: ['Dr. Nome Sobrenome'],
//       },
//     ],
//   },
import type { MapaUnidades, StateData } from './tipos';

export const DUROLANE_ESTADOS: Record<string, StateData> = {};

export const DUROLANE: MapaUnidades = {
  titulo: 'Onde encontrar o DUROLANE®',
  instrucao:
    'Selecione um estado no mapa para ver clínicas que oferecem o DUROLANE®.',
  ariaMapa: 'Mapa do Brasil – Clínicas que oferecem o DUROLANE®',
  legendaCom: 'Com clínica',
  legendaSem: 'Sem clínica listada',
  vazio: 'Clique em um estado azul no mapa para ver as clínicas',
  singular: 'clínica encontrada',
  plural: 'clínicas encontradas',
  nota: 'A indicação e a aplicação do DUROLANE® são decisão do médico. As clínicas listadas autorizaram a divulgação.',
  estados: DUROLANE_ESTADOS,
};
