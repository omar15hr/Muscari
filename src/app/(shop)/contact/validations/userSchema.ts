import { z } from "zod";

const plans = ["free", "basic", "medium", "pro"] as const;

export type Plans = (typeof plans)[number];

export const mappedPlans: { [key in Plans]: string } = {
  basic: "Consulta",
  pro: "Cuenta",
  free: "Error al realizar pago",
  medium: "Devolución de producto",
}

export const userSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Name must be at least 3 characters long",
    })
    .max(200, {
      message: "Name must be less than 200 characters long",
    }),
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  weight: z.string().refine((weight) => !isNaN(parseFloat(weight)), {
    message: "Weight must be a number",
  }),
  dateOfBirth: z.string().refine(dob => new Date(dob).toString() !== "Invalid Date", {
    message: "Please enter a valid date of birth"
  }),
  plan: z.enum(plans, {
    errorMap: () => ({ message: "Please select a plan" }),
  }),
})