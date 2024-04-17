import { z } from "zod";

const contactReason = ["consulta", "cuenta", "errorPago", "devolucionProducto", "otro"] as const;

export type Plans = (typeof contactReason)[number];

export const mappedPlans: { [key in Plans]: string } = {
  consulta: "Consulta",
  cuenta: "Cuenta",
  errorPago: "Error al realizar pago",
  devolucionProducto: "Devolución de producto",
  otro: "Otro",
}

export const userSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "El nombre debe ser de más de 3 caracteres.",
    })
    .max(30, {
      message: "El nombre debe ser de menos de 30 caracteres.",
    }),
  lastName: z
    .string()
    .min(3, {
      message: "El apellido debe ser de más de 3 caracteres.",
    })
    .max(30, {
      message: "El apellido debe ser de menos de 30 caracteres.",
    }),
  email: z.string().email({
    message: "Por favor, ingrese una dirección de correo válida.",
  }),
  contactReason: z.enum(contactReason, {
    errorMap: () => ({ message: "Por favor, seleccione un motivo de contacto" }),
  }),
  comment: z
    .string()
    .max(300, {
      message: "El comentario debe ser de menos de 300 caracteres.",
    }),
})