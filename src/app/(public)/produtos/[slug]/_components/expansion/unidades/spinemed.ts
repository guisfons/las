// Unidades SpineMED: estado com entrada fica azul e clicável sozinho.
import type { MapaUnidades, StateData } from './tipos';

export const SPINEMED_ESTADOS: Record<string, StateData> = {
  MA: {
    name: 'Maranhão',
    clinics: [
      {
        name: 'Instituto do Cérebro e Coluna Dr. Cruz',
        city: 'Imperatriz – MA',
        address: 'R. Luís Domingues, 1649 – Entroncamento – Imperatriz – MA',
        cep: 'CEP: 65001-120',
        email: 'drcruzneuro@hotmail.com',
        phone: '(99) 3524-4422',
      },
    ],
  },
  TO: {
    name: 'Tocantins',
    clinics: [
      {
        name: 'Instituto de Neurociências de Palmas',
        city: 'Palmas – TO',
        address:
          '501 Sul Rua NS 1 Conj 01 lote 9, Dentro Do Life Center Hospital, Térreo – Plano Diretor Sul – Palmas – TO',
        cep: 'CEP: 77016-524',
        email: 'spinemed.to@gmail.com',
        phone: '(63) 98444-4430',
      },
      {
        name: 'Instituto de Neurociências de Palmas (2)',
        city: 'Palmas – TO',
        address:
          '501 Sul Rua NS 1 Conj 01 lote 9, Dentro Do Life Center Hospital, Térreo – Plano Diretor Sul – Palmas – TO',
        cep: 'CEP: 77016-524',
        email: 'spinemed.to@gmail.com',
        phone: '(63) 98444-4430',
      },
    ],
  },
  GO: {
    name: 'Goiás',
    clinics: [
      {
        name: 'Clinica Traumat – Dr Tulio Rocha',
        city: 'Goiânia – GO',
        address:
          'Av. Dr. Ismerino Soares de Carvalho, 660 – St. Aeroporto – Goiânia – GO',
        cep: 'CEP: 74075-040',
        email: 'traumatclinica@gmail.com',
        phone: '(62) 9981-9447',
        waze: 'https://ul.waze.com/ul?place=ChIJ7-JXUOLzXpMR-JC_vYIM1k0&ll=-16.67563880%2C-49.27099460&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location',
      },
      {
        name: 'Eficaz Clinica da Coluna Ltda',
        city: 'Rio Verde – GO',
        address:
          'Av. Eurico Veloso do Carmo, 1500 – Sala 05 – Jardim Bela Vista – Rio Verde – GO',
        cep: 'CEP: 75901-970',
        email: 'spinemedrioverdego@gmail.com',
      },
    ],
  },
  DF: {
    name: 'Distrito Federal',
    clinics: [
      {
        name: 'Instituto dos Reis – Dr. Felipe Reis',
        city: 'Brasília – DF',
        address:
          'SGAS 611 – Centro Clínico Lúcio Costa, Conjunto F, Bloco 2, Sala 13 (subsolo) – Asa Sul – Brasília – DF',
        cep: 'CEP: 70200-700',
        phone: '(61) 99984-9628',
      },
    ],
  },
  MT: {
    name: 'Mato Grosso',
    clinics: [
      {
        name: 'Studio Pilates do Bosque Cuiabá',
        city: 'Cuiabá – MT',
        address: 'Rua T – Jardim Aclimação, Cuiabá – MT',
        cep: 'CEP: 78050-256',
        email: 'a.barbosa.leite@gmail.com',
        phone: '(65) 98102-0324',
      },
      {
        name: 'Medcoluna – Clínica Miranda',
        city: 'Sinop – MT',
        address: 'Avenida das Itaúbas, 3101 – St Comercial – Sinop – MT',
        cep: 'CEP: 78550-88',
        email: 'a.barbosa.leite@gmail.com',
        phone: '(66) 98151-2552',
      },
      {
        name: 'Neurocenter',
        city: 'Rondonópolis – MT',
        address: 'R. Pedro Ferrer, 157 – Rondonópolis – MT',
        cep: 'CEP: 78710-408',
        email: 'secretaria.dr.edilson.marques@hotmail.com',
        phone: '(66) 99913-7229',
      },
    ],
  },
  MS: {
    name: 'Mato Grosso do Sul',
    clinics: [
      {
        name: 'NeuroVitali',
        city: 'Campo Grande – MS',
        address:
          'R Alagoas, 396 – Sala 1201 – Jd dos Estados – Campo Grande – MS',
        cep: 'CEP: 79020-120',
        email: 'neurovitali@outlook.com',
        phone: '(67) 99658-6798',
      },
    ],
  },
  SP: {
    name: 'São Paulo',
    clinics: [
      {
        name: 'Clínica InMulti Marília',
        city: 'Marília – SP',
        address: 'Rua Carlos Botelho, 703 – Jardim Maria Izabel – Marília – SP',
        cep: 'CEP: 17515-240',
        email: 'instituto_inmulti@outlook.com',
        phone: '(14) 3433-6198',
      },
      {
        name: 'Clínica Brigante',
        city: 'Itapetininga – SP',
        address: 'Rua João Adolfo, 510 – Centro – Itapetininga – SP',
        cep: 'CEP: 18200-353',
        email: 'clinicabrigante@gmail.com',
        phone: '(15) 99611-6067',
      },
    ],
  },
  PR: {
    name: 'Paraná',
    clinics: [
      {
        name: 'Instituto Neuro Bela Suiça',
        city: 'Londrina – PR',
        address:
          'Rua Alberto Mauricio Barroso Jr, 110 – Sala 01 – B. Colonial – Londrina – PR',
        cep: 'CEP: 86047-260',
      },
    ],
  },
  SC: {
    name: 'Santa Catarina',
    clinics: [
      {
        name: 'Neurosul Neuroespecialistas',
        city: 'Criciúma – SC',
        address: 'Rua Léo Lombardi, 365 – Pio Corrêa – Criciúma – SC',
        cep: 'CEP: 88811-600',
        email: 'wlevati@bol.com.br',
      },
    ],
  },
  RS: {
    name: 'Rio Grande do Sul',
    clinics: [
      {
        name: 'Clínica da Coluna',
        city: 'Novo Hamburgo – RS',
        address:
          'Av. Dr. Maurício Cardoso, 833 – Sala 310 – Hamburgo Velho – Novo Hamburgo – RS',
        cep: 'CEP: 93510-223',
        phone: '(51) 9983-75005',
      },
      {
        name: 'Clínica Dr. Telmo Tiburcio',
        city: 'Santa Cruz do Sul – RS',
        address:
          'R. Cap. Fernando Tatsch, 210 – Sala 1701 – Centro, Santa Cruz do Sul – RS',
        cep: 'CEP: 96810-342',
        phone: '(51) 3053-1610',
      },
      {
        name: 'Cadore e Guarise',
        city: 'Caxias do Sul – RS',
        address:
          'Rua Marechal Floriano, 949 – Sala Térreo – Bairro Pio X – Caxias do Sul – RS',
        cep: 'CEP: 95034-105',
        email: 'pguarise@gmail.com',
      },
    ],
  },
  ES: {
    name: 'Espírito Santo',
    clinics: [
      {
        name: 'Clínica Dr Thanguy',
        city: 'Vila Velha – ES',
        address:
          'Av. Luciano das Neves, 2418 – Divino Shopping – Vila Velha – ES',
        cep: 'CEP: 29107-900',
        email: 'drthanguy@gmail.com',
        phone: '(27) 3062-0400',
        waze: 'https://ul.waze.com/ul?place=ChIJW_SrBagXuAARaa_RFffiSVw&ll=-20.35235400%2C-40.29804990&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location',
      },
    ],
  },
};

export const SPINEMED: MapaUnidades = {
  titulo: 'Unidades de Atendimento',
  instrucao:
    'Selecione um estado no mapa para ver as unidades SpineMED disponíveis.',
  ariaMapa: 'Mapa do Brasil – Unidades SpineMED',
  legendaCom: 'Com unidade SpineMED',
  legendaSem: 'Sem unidade',
  vazio: 'Clique em um estado azul no mapa para ver as unidades',
  singular: 'unidade encontrada',
  plural: 'unidades encontradas',
  estados: SPINEMED_ESTADOS,
};
