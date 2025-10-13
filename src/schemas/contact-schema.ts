import { z } from 'zod';
import { SchemaMessageTypes } from '@/utils/';

export const contactSchema = z.object({
  title: z
    .string({ message: SchemaMessageTypes.INVALID_TYPE })
    .trim()
    .refine((value) => value !== '', {
      message: SchemaMessageTypes.REQUIRED_FIELD,
    }),
  company: z.string().default('8'),
  cellphone: z
    .string({ message: SchemaMessageTypes.INVALID_TYPE })
    .trim()
    .refine((value) => value !== '', {
      message: SchemaMessageTypes.REQUIRED_FIELD,
    }),
  text: z
    .string({ message: SchemaMessageTypes.INVALID_TYPE })
    .trim()
    .refine((value) => value !== '', {
      message: SchemaMessageTypes.REQUIRED_FIELD,
    }),
});

export type ContactFormDataType = z.infer<typeof contactSchema>;

export const contactFooterSchema = z.object({
  text: z.string().optional(),
  company: z.string().default('8'),
  email: z
    .string({ message: SchemaMessageTypes.INVALID_TYPE })
    .email({ message: SchemaMessageTypes.INVALID_EMAIL })
    .trim()
    .refine((value) => value !== '', {
      message: SchemaMessageTypes.REQUIRED_FIELD,
    }),
});

export type ContactFooterFormDataType = z.infer<typeof contactFooterSchema>;
