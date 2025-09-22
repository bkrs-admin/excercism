"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.age = age;
function age(planet, seconds) {
    let year = 0;
    year = seconds / 31557600;
    if (planet === "mercury") {
        year = year / 0.2408467;
    }
    else if (planet === "venus") {
        year = year / 0.61519726;
    }
    else if (planet === "mars") {
        year = year / 1.8808158;
    }
    else if (planet === "jupiter") {
        year = year / 11.862615;
    }
    else if (planet === "saturn") {
        year = year / 29.447498;
    }
    else if (planet === "uranus") {
        year = year / 84.016846;
    }
    else if (planet === "neptune") {
        year = year / 164.79132;
    }
    return Number(year.toFixed(2));
}
