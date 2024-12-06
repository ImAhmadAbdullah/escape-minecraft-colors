/**
 * Escapes Minecraft color codes from the given string.
 * If a specific color is provided, it escapes only that color; otherwise, all colors are escaped.
 * @param {string} text - The string to escape colors from.
 * @param {import("../enums/colors.js")[keyof import("../enums/colors.js")]} [color=Colors.ALL] - Optional. The specific color to escape. Can be any key from the Colors object. Leave blank to escape all colors.
 * @param {string} symbol - Optional. Can be & or §. Leave blank to check for both.
 * @returns {string} - The string with Minecraft color codes escaped.
 */
export function escapeColor(text: string, color?: any[keyof any], symbol?: string): string;
import { Colors } from "./enums/colors";
export { Colors };
//# sourceMappingURL=index.d.ts.map