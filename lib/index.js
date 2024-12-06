const { Colors } = require("./enums/colors");

/**
 * Escapes Minecraft color codes from the given string.
 * If a specific color is provided, it escapes only that color; otherwise, all colors are escaped.
 * @param {string} text - The string to escape colors from.
 * @param {import("../enums/colors.js")[keyof import("../enums/colors.js")]} [color=Colors.ALL] - Optional. The specific color to escape. Can be any key from the Colors object. Leave blank to escape all colors.
 * @param {string} symbol - Optional. Can be & or §. Leave blank to check for both.
 * @returns {string} - The string with Minecraft color codes escaped.
 */
function escapeColor(text, color = Colors.ALL, symbol = "&|§") {
	const colorRegex = /(&|§)[0-9a-p]/gi;
	if (color !== Colors.ALL) {
		const colorCode = Colors[color.toUpperCase()];
		return text.replace(new RegExp(`(&|§)${colorCode}`, "gi"), "");
	}
	return text.replace(colorRegex, "");
}

module.exports = { escapeColor, Colors };
