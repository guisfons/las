'use client';

import { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import Icon from '@/shared/icon/icon';
import { Product } from '../../../_components/card-product';

// Interfaces para os itens do popup
interface PopupItem {
  id: string;
  title: string;
  description?: string;
  author?: string;
  type:
    | 'CATALOG'
    | 'CASE_REPORTS'
    | 'ARTICLES'
    | 'DIRECTIONS_FOR_USE'
    | 'DEFAULT';
  url?: string;
  onClick?: () => void;
}

interface PopupState {
  isOpen: boolean;
  type:
    | 'CATALOG'
    | 'CASE_REPORTS'
    | 'ARTICLES'
    | 'DIRECTIONS_FOR_USE'
    | 'DEFAULT';
  title: string;
  items: PopupItem[];
  iconName: string;
}

// Props dos componentes
interface PopupOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

interface PopupContentProps {
  title: string;
  items: PopupItem[];
  onClose: () => void;
  iconName: string;
  type:
    | 'CATALOG'
    | 'CASE_REPORTS'
    | 'ARTICLES'
    | 'DIRECTIONS_FOR_USE'
    | 'DEFAULT';
}

interface ContentsProductProps {
  product: Product;
}

// Componente Popup Overlay
const PopupOverlay: React.FC<PopupOverlayProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-md w-full max-h-[80vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

// Componente Popup Content
const PopupContent: React.FC<PopupContentProps> = ({
  title,
  items,
  onClose,
}) => {
  const getItemIcon = (itemType: PopupItem['type']) => {
    switch (itemType) {
      case 'CATALOG':
        return <Icon name="lists" className="size-4 text-green" />;
      case 'ARTICLES':
        return <Icon name="file_lines" className="size-4 text-green" />;
      case 'CASE_REPORTS':
        return <Icon name="circle_check" className="size-4 text-green" />;
      case 'DIRECTIONS_FOR_USE':
        return <Icon name="book_open" className="size-4 text-green" />;
      default:
        return <Icon name="lists" className="size-4 text-green" />;
    }
  };

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between p-6 pb-0">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-bold text-green font-exo2">{title}</h2>
        </div>
        <button
          title="open dialog"
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="size-5 text-gray-500" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 overflow-y-auto max-h-[60vh]">
        <div className="space-y-4">
          {items && items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4 p-4 border border-[#d4d2e3] rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer group"
                onClick={() => item.onClick && item.onClick()}
              >
                <div className="flex-shrink-0 mt-1 bg-[#f1fae6] p-4 rounded-xl">
                  {getItemIcon(item.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-exo2 text-[#9494a1] text-xl mb-1">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="font-exo2 text-sm text-[#9494a1] leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <ExternalLink className="size-4 text-gray-400 group-hover:text-green transition-colors flex-shrink-0 ml-3" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p className="text-sm">Nenhum item disponível no momento.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default function ContentsProduct({ product }: ContentsProductProps) {
  console.log(product);

  const [popupState, setPopupState] = useState<PopupState>({
    isOpen: false,
    type: 'DEFAULT',
    title: '',
    items: [],
    iconName: '',
  });

  const openPopup = (
    type: PopupState['type'],
    title: string,
    items: PopupItem[],
    iconName: string,
  ) => {
    setPopupState({
      isOpen: true,
      type,
      title,
      items,
      iconName,
    });
  };

  const closePopup = () => {
    setPopupState({
      isOpen: false,
      type: 'DEFAULT',
      title: '',
      items: [],
      iconName: '',
    });
  };

  // Função para buscar dados do produto baseado no tipo
  const getProductData = (
    type:
      | 'CATALOG'
      | 'CASE_REPORTS'
      | 'ARTICLES'
      | 'DIRECTIONS_FOR_USE'
      | 'DEFAULT',
  ): PopupItem[] => {
    if (!product?.detail?.links) return [];

    return product.detail.links
      .filter((link) => link.type === type)
      .map((link, index) => ({
        id: `${type}-${index}`,
        title: link.title,
        description: link.file_name ?? undefined,
        author:
          type === 'CASE_REPORTS'
            ? product.detail?.testimonial?.doctor?.name
            : undefined,
        type: type,
        url: link.url,
        onClick: () => {
          // Aqui você pode adicionar a lógica para abrir o link
          if (link.url) {
            window.open(link.url, '_blank');
          }
          console.log(`Abrir ${type}:`, link);
        },
      }));
  };

  return (
    <>
      <p className="max-w-3xl font-exo2 text-xs lg:text-lg text-label">
        Acesse materiais exclusivos que comprovam a eficácia do {product?.name}{' '}
        e apoiam o cuidado de excelência ao paciente.
      </p>

      <div className="w-full grid grid-cols-2 grid-rows-2 lg:grid-rows-1 lg:grid-cols-3 gap-2 lg:gap-4 my-6">
        <div
          className="h-full border border-gray-[#d4d2e3] p-2 lg:p-8 rounded-2xl flex justify-start items-center flex-col gap-6 cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() =>
            openPopup('CATALOG', 'Catálogo', getProductData('CATALOG'), 'lists')
          }
        >
          <p className="text-green font-exo2 text-lg lg:text-3xl font-bold flex items-start gap-3 text-center">
            <Icon name="lists" className="size-4 lg:size-5 mt-2 "></Icon>
            Catálogo
          </p>
          <p className="text-xs lg:text-xl text-center text-label font-exo2">
            Dados e especificações para conhecer melhor nossas soluções
          </p>
        </div>

        <div
          className="h-full border border-gray-[#d4d2e3] p-2 lg:p-8 rounded-2xl flex justify-start items-center flex-col gap-6 cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() =>
            openPopup(
              'CASE_REPORTS',
              'Relatos de Caso',
              getProductData('CASE_REPORTS'),
              'circle_check',
            )
          }
        >
          <p className="text-green font-exo2 text-lg lg:text-3xl font-bold flex items-start gap-3 text-center">
            <Icon name="circle_check" className="size-4 lg:size-5 mt-2 "></Icon>
            <span className="w-[91px] sm:w-max">Relatos de Caso</span>
          </p>
          <p className="text-xs lg:text-xl text-center text-label font-exo2">
            Casos clínicos que demonstram resultados
          </p>
        </div>

        <div
          className="h-full border border-gray-[#d4d2e3] p-2 lg:p-8 rounded-2xl flex justify-start items-center flex-col gap-6 cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() =>
            openPopup(
              'ARTICLES',
              'Artigos',
              getProductData('ARTICLES'),
              'file_lines',
            )
          }
        >
          <p className="text-green font-exo2 text-lg lg:text-3xl font-bold flex items-start gap-3 text-center">
            <Icon name="file_lines" className="size-3 lg:size-4 mt-2"></Icon>
            Artigos
          </p>
          <p className="text-xs lg:text-xl text-center text-label font-exo2">
            Conteúdo científico para sua atualização
          </p>
        </div>

        <div
          className="h-full border border-gray-[#d4d2e3] p-2 lg:p-8 rounded-2xl flex justify-start items-center flex-col gap-6 cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() =>
            openPopup(
              'DIRECTIONS_FOR_USE',
              'Instruções de Uso',
              getProductData('DIRECTIONS_FOR_USE'),
              'book_open',
            )
          }
        >
          <p className="text-green font-exo2 text-lg lg:text-3xl font-bold flex items-start gap-3 text-center">
            <Icon name="book_open" className="size-3 lg:size-4 mt-2"></Icon>
            Instruções de Uso
          </p>
          <p className="text-xs lg:text-xl text-center text-label font-exo2">
            Informações detalhadas para o uso correto dos produtos
          </p>
        </div>
      </div>

      {/* Popup */}
      <PopupOverlay isOpen={popupState.isOpen} onClose={closePopup}>
        <PopupContent
          title={popupState.title}
          items={popupState.items}
          onClose={closePopup}
          iconName={popupState.iconName}
          type={popupState.type}
        />
      </PopupOverlay>
    </>
  );
}
