import { z } from 'zod';

export const filterProductsSchema = z.object({
  specialities: z.array(z.string()).optional(),
  brands: z.array(z.string()).optional(),
});

export type FilterProductsFormDataType = z.infer<typeof filterProductsSchema>;
