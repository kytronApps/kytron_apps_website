import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases de Tailwind sin duplicados.
 * Ejemplo: cn("p-2", condition && "bg-blue-500", "p-2") → "p-2 bg-blue-500"
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}