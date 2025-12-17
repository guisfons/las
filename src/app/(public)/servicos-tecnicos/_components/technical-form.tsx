'use client';

import { Button, Input, Label } from '@/components/ui';
import Icon from '@/shared/icon/icon';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { technicalSchema, type TechnicalFormDataType } from '@/schemas';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function TechnicalForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<TechnicalFormDataType>({
    resolver: zodResolver(technicalSchema),
  });

  // Monitorar mudanças no campo file do react-hook-form
  const watchedFile = watch('attachment') as FileList | undefined;

  useEffect(() => {
    if (watchedFile && watchedFile.length > 0 && watchedFile[0]) {
      // Verificar o tamanho do arquivo (limite: 5MB)
      const MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5MB

      if (watchedFile[0].size > MAX_SIZE_BYTES) {
        toast({
          title: 'Arquivo muito grande',
          description: `O arquivo excede o limite de 5MB. Tamanho atual: ${formatFileSize(watchedFile[0].size)}`,
          variant: 'destructive',
        });

        // Limpar o campo no react-hook-form
        setValue('attachment', undefined);
        // Também limpar o input HTML
        const fileInput = document.getElementById(
          'fileInput',
        ) as HTMLInputElement;
        if (fileInput) {
          fileInput.value = '';
        }

        setSelectedFiles([]);
      } else {
        setSelectedFiles([watchedFile[0]]);
      }
    } else {
      setSelectedFiles([]);
    }
  }, [watchedFile, setValue, toast]);

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
    // Limpar o campo no react-hook-form
    setValue('attachment', undefined);
    // Também limpar o input HTML
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const onSubmit = async (data: TechnicalFormDataType) => {
    console.log('=== INÍCIO DO ENVIO DO FORMULÁRIO ===');
    setIsSubmitting(true);

    console.log('Form data sendo enviado:', data);
    console.log('Arquivos selecionados:', selectedFiles);

    try {
      const formData = new FormData();

      // Adicionar campos do formulário
      formData.append(
        '_subject',
        'Solicitação de Serviços Técnicos - LAS FOR LIFE',
      );
      formData.append('_captcha', 'false');
      formData.append('_template', 'table');
      formData.append('_next', window.location.href); // URL de retorno
      formData.append('name', data.name);
      formData.append('cnpj', data.cnpj);
      formData.append('phone', data.phone);
      formData.append('email', data.email);
      formData.append('client', data.client);
      formData.append('position', data.position);
      formData.append('reference', data.reference);
      formData.append('batch', data.batch);
      formData.append('date', data.date);
      formData.append('type', data.type);

      // Adicionar arquivos (se houver)
      if (selectedFiles.length > 0) {
        // Verificar o tamanho total dos arquivos (limite: 5MB)
        const totalSizeBytes = selectedFiles.reduce(
          (sum, file) => sum + file.size,
          0,
        );
        const MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5MB

        if (totalSizeBytes > MAX_SIZE_BYTES) {
          throw new Error(
            `O tamanho do arquivo (${formatFileSize(totalSizeBytes)}) excede o limite de 5MB.`,
          );
        }

        selectedFiles.forEach((file, index) => {
          console.log(`Adicionando arquivo ${index}:`, file.name, file.size);
          // Use 'attachment' as the field name for better compatibility with FormSubmit
          formData.append('attachment', file);
        });
      }

      // Log dos dados sendo enviados
      console.log('FormData criado com sucesso');

      const response = await fetch(
        'https://formsubmit.co/gui.santana19@hotmail.com',
        {
          method: 'POST',
          body: formData,
          // Don't set Content-Type header for multipart/form-data
          // The browser will set it correctly with the boundary
        },
      );

      console.log('FormSubmit response status:', response.status);
      console.log(
        'FormSubmit response headers:',
        Object.fromEntries(response.headers.entries()),
      );

      // When using the direct endpoint (not /ajax/), FormSubmit may redirect instead of returning JSON
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: Erro no FormSubmit`);
      }

      // Try to parse JSON response if available, but don't fail if it's not JSON
      let responseData;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        try {
          responseData = await response.json();
          console.log('FormSubmit response data:', responseData);

          // Check for explicit error in JSON response
          if (responseData && responseData.success === false) {
            throw new Error(
              responseData.message || 'Erro no envio do formulário',
            );
          }
        } catch (jsonError) {
          // If JSON parsing fails, it might be a redirect or HTML response, which is fine
          console.log(
            'Response não é JSON, mas isso pode ser normal com arquivos:',
            jsonError,
          );
        }
      } else {
        console.log(
          'FormSubmit response não é JSON, provavelmente um redirect ou HTML',
        );
      }

      toast({
        title: 'Sucesso!',
        description:
          'Solicitação enviada com sucesso. Nossa equipe técnica entrará em contato.',
        variant: 'default',
      });

      reset();
      setSelectedFiles([]);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);

      let errorMessage =
        'Ocorreu um erro ao enviar a solicitação. Tente novamente.';

      if (error instanceof Error) {
        console.error('Error message:', error.message);
        errorMessage = error.message;
      }

      toast({
        title: 'Erro!',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="Contact" className="relative overflow-hidden">
      <div className="max-w-7xl px-6 py-20 mx-auto flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
          className="w-full flex flex-col gap-6"
        >
          <div className="mb-2">
            <p className="uppercase font-exo2 font-bold text-lg text-[#9494A1]">
              LAS FOR LIFE
            </p>

            <p className="font-exo2 leading-10 font-bold mb-4 text-2xl md:text-[44px] text-black">
              Formulário
            </p>

            <p className="max-w-[445px] font-exo2 font-light text-lg text-[#9494A1]">
              Para solicitação de serviços técnicos, por favor, solicitamos o
              preenchimento do formulário abaixo. Após o recebimento das
              informações, nossa equipe técnica irá analisar a solicitação e
              entrará em contato.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
            <div className="sm:col-span-2">
              <Input
                type="text"
                {...register('name')}
                className="w-full font-exo2 !text-lg rounded-full bg-[#f7f7f7] !border-transparent"
                placeholder="Nome do Solicitante"
              />
              {errors.name && (
                <p className="text-red-500 text-sm sm:col-span-2">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <Input
                type="text"
                {...register('cnpj')}
                className="w-full font-exo2 !text-lg rounded-full bg-[#f7f7f7] !border-transparent"
                placeholder="CNPJ"
              />
              {errors.cnpj && (
                <p className="text-red-500 text-sm sm:col-span-2">
                  {errors.cnpj.message}
                </p>
              )}
            </div>

            <div>
              <Input
                type="tel"
                {...register('phone')}
                className="w-full font-exo2 !text-lg rounded-full bg-[#f7f7f7] !border-transparent"
                placeholder="Telefone com DDD"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <Input
                type="email"
                {...register('email')}
                className="w-full font-exo2 !text-lg rounded-full bg-[#f7f7f7] !border-transparent"
                placeholder="E-mail"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <Input
                type="text"
                {...register('client')}
                className="w-full font-exo2  !text-lg rounded-full bg-[#f7f7f7] !border-transparent"
                placeholder="Cliente"
              />
              {errors.client && (
                <p className="text-red-500 text-sm">{errors.client.message}</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <Input
                type="text"
                {...register('position')}
                className="w-full font-exo2 !text-lg rounded-full bg-[#f7f7f7] !border-transparent"
                placeholder="Cargo"
              />
              {errors.position && (
                <p className="text-red-500 text-sm sm:col-span-2">
                  {errors.position.message}
                </p>
              )}
            </div>

            <div>
              <Input
                type="text"
                {...register('reference')}
                className="w-full font-exo2 !text-lg rounded-full bg-[#f7f7f7] !border-transparent"
                placeholder="Referência"
              />
              {errors.reference && (
                <p className="text-red-500 text-sm">
                  {errors.reference.message}
                </p>
              )}
            </div>

            <div>
              <Input
                type="text"
                {...register('batch')}
                className="w-full font-exo2 !text-lg rounded-full bg-[#f7f7f7] !border-transparent"
                placeholder="Lote"
              />
              {errors.batch && (
                <p className="text-red-500 text-sm">{errors.batch.message}</p>
              )}
            </div>

            <div>
              <Input
                type="date"
                {...register('date')}
                className="w-full font-exo2 !text-lg rounded-full bg-[#f7f7f7] !border-transparent"
                placeholder="Data do Ocorrido"
              />
              {errors.date && (
                <p className="text-red-500 text-sm">{errors.date.message}</p>
              )}
            </div>
          </div>

          <p className="uppercase font-exo2 font-bold text-lg">
            Tipo do Serviço
          </p>

          <RadioGroup
            {...register('type')}
            className="mt-2 flex items-center gap-4"
          >
            <div className="flex items-center gap-3">
              <RadioGroupItem value="Assistência Técnica" id="r1" />
              <Label htmlFor="r1">Assistência Técnica</Label>
            </div>

            <div className="flex items-center gap-3">
              <RadioGroupItem
                value="Certificado de calibração e segurança elétrica"
                id="r2"
              />
              <Label htmlFor="r2">
                Certificado de calibração e segurança elétrica
              </Label>
            </div>

            <div className="flex items-center gap-3">
              <RadioGroupItem value="Apoio ao Cliente" id="r3" />
              <Label htmlFor="r3">Apoio ao Cliente</Label>
            </div>
          </RadioGroup>

          <div className="space-y-4">
            <p className="uppercase font-exo2 font-bold text-lg">
              Anexar vídeos e imagens{' '}
              <span className="text-sm font-normal">(máximo 5MB)</span>
            </p>

            <div className="space-y-3">
              <input
                type="file"
                id="fileInput"
                accept="image/*,video/*,.pdf,.doc,.docx"
                {...register('attachment')}
                className="hidden"
              />

              {selectedFiles.length === 0 && (
                <label
                  className="w-full md:w-auto font-exo2 font-bold text-xs !py-2 px-4 cursor-pointer !h-auto rounded-sm border border-black text-black bg-white "
                  htmlFor="fileInput"
                >
                  Escolher arquivo
                </label>
              )}

              {selectedFiles.length > 0 && (
                <div className="w-max space-y-2">
                  <p className="font-exo2 font-semibold text-sm text-gray-600">
                    Arquivo selecionado:
                  </p>
                  {selectedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="w-max flex items-center justify-between p-3 bg-gray-50 rounded-lg border mb-6"
                    >
                      <div className="flex items-center space-x-3 pr-4">
                        <Icon name="file_lines" className="text-[#42bd5c]" />
                        <div>
                          <p className="font-exo2 font-medium text-sm text-gray-800">
                            {file.name}
                          </p>
                          <p className="font-exo2 text-xs text-gray-500">
                            {formatFileSize(file.size)}
                          </p>
                        </div>
                      </div>
                      <Button
                        type="button"
                        onClick={() => removeFile(index)}
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Icon name="trash" />
                      </Button>
                    </div>
                  ))}

                  <label
                    className="w-full !py-2 px-4 cursor-pointer font-exo2 text-sm text-[#42bd5c] hover:bg-[#42bd5c]/10"
                    htmlFor="fileInput"
                  >
                    Escolher outro arquivo
                  </label>
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <Button
              type="submit"
              onClick={() => console.log(watch())}
              className="w-full md:w-max font-exo2 font-bold text-base rounded-full bg-[#42bd5c] hover:bg-[#42bd5c] disabled:opacity-50 disabled:cursor-not-allowed text-[#ffffff] !px-4 ml-auto !py-0"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}{' '}
              <Icon name="arrow_right" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
