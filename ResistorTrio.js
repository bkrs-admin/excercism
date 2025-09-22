"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodedResistorValue = decodedResistorValue;
function decodedResistorValue(code) {
    const COLOR_MAP = {
        'black': 0,
        'brown': 1,
        'red': 2,
        'orange': 3,
        'yellow': 4,
        'green': 5,
        'blue': 6,
        'violet': 7,
        'grey': 8,
        'white': 9,
    };
    const firstDigit = COLOR_MAP[code[0]];
    const secondDigit = COLOR_MAP[code[1]];
    const multiplier = COLOR_MAP[code[2]];
    let value = (firstDigit * 10 + secondDigit) * Math.pow(10, multiplier);
    if (value >= 1000000000) {
        return `${value / 1000000000} gigaohms`;
    }
    if (value >= 1000000) {
        return `${value / 1000000} megaohms`;
    }
    if (value >= 1000) {
        return `${value / 1000} kiloohms`;
    }
    return `${value} ohms`;
}
