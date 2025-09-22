"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLORS = void 0;
exports.decodedValue = decodedValue;
function decodedValue(color) {
    var result = 0;
    var color1 = exports.COLORS.indexOf(color[0]);
    var color2 = exports.COLORS.indexOf(color[1]);
    result = (color1 * 10 + color2);
    return result;
}
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
