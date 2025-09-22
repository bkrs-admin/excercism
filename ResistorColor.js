"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLORS = exports.colorCode = void 0;
const colorCode = (color) => {
    const index = exports.COLORS.indexOf(color);
    return index != -1 ? index : 0;
};
exports.colorCode = colorCode;
exports.COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
];
