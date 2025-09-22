"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLeap = isLeap;
function isLeap(year) {
    var isLeap = false;
    if (year % 4 == 0 && year % 400 == 0) {
        isLeap = true;
    }
    else if (year % 4 == 0 && year % 100 != 0) {
        isLeap = true;
    }
    else if (year % 4 == 0 && year % 5 == 0) {
        if (year % 100 == 0 && year % 200 == 0 && year % 400 != 0) {
            isLeap = false;
        }
        else if (year % 100 == 0 && year % 3 != 0 || year % 400 != 0) {
            isLeap = false;
        }
        else {
            isLeap = true;
        }
    }
    return isLeap;
}
