"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.score = score;
function score(x, y) {
    // r^2 = (x^2) + (y^2)
    const r_sqr = ((x * x) + (y * y));
    const r = Math.sqrt(r_sqr);
    if (r <= 1) {
        return 10;
    }
    else if (r <= 5) {
        return 5;
    }
    else if (r <= 10) {
        return 1;
    }
    else {
        return 0;
    }
}
