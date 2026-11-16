/**
 * Devuelve el saludo de la app.
 *
 * Sin nombre (o solo espacios) saluda al mundo; con nombre, saluda a esa
 * persona. El nombre se recorta pero se conserva tal cual lo escribió el
 * usuario (mayúsculas, acentos, etc.).
 */
export function greet(name?: string): string {
  const trimmed = name?.trim();
  if (trimmed === undefined || trimmed === "") {
    return "¡Hola, mundo!";
  }
  return `¡Hola, ${trimmed}!`;
}
