import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Meno musí mať aspoň 2 znaky"),
  company: z.string().min(2, "Názov firmy musí mať aspoň 2 znaky"),
  email: z.string().email("Zadajte platný e-mail"),
  phone: z.string().optional().refine(
    (val) => !val || /^(\+421|0)[0-9]{9}$/.test(val.replace(/\s/g, "")),
    "Zadajte platné telefónne číslo (napr. +421900123456)"
  ),
  message: z.string().optional(),
  gdprConsent: z.boolean().refine((val) => val === true, "Súhlas so spracovaním osobných údajov je povinný"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
