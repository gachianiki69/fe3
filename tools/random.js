'use strict';

const RANDOMS = [
     0, 55, 11, 67, 23, 79, 35, 91, 46,  2, 58, 14, 70, 26, 82, 37,
    93, 49,  5, 61, 17, 73, 28, 84, 40, 96, 52,  8, 64, 19, 75, 31,
    87, 43, 99, 55, 10, 66, 22, 78, 34, 90, 46,  1, 57, 13, 69, 25,
    81, 37, 92, 48,  4, 60, 16, 72, 28, 83, 39, 95, 51,  7, 63, 19,
    75, 30, 86, 42, 98, 54, 10, 66, 21, 77, 33, 89, 45,  1, 57, 12,
    68, 24, 80, 36, 92, 48,  3, 59, 15, 71, 27, 83, 39, 94, 50,  6,
    62, 18, 74, 30, 85, 41, 97, 53,  9, 65, 21, 76, 32, 88, 44,  0,
    56, 12, 67, 23, 79, 35, 91, 47,  3, 58, 14, 70, 26, 82, 38, 94,
    50,  5, 61, 17, 73, 29, 85, 41, 96, 52,  8, 64, 20, 76, 32, 87,
    43, 99, 55, 11, 67, 23, 78, 34, 90, 46,  2, 58, 14, 69, 25, 81,
    37, 93, 49,  5, 60, 16, 72, 28, 84, 40, 96, 51,  7, 63, 19, 75,
    31, 87, 42, 98, 54, 10, 66, 22, 78, 33, 89, 45,  1, 57, 13, 69,
    25, 80, 36, 92, 48,  4, 60, 16, 71, 27, 83, 39, 95, 51,  7, 62,
    18, 74, 30, 86, 42, 98, 53,  9, 65, 21, 77, 33, 89, 44,  0, 56,
    12, 68, 24, 80, 35, 91, 47,  3, 59, 15, 71, 26, 82, 38, 94, 50,
     6, 62, 17, 73, 29, 85, 41, 97, 53,  8, 64, 20, 76, 32, 88, 44,
];

exports.get = function(index, length) {
    let randoms = RANDOMS.slice(index, index + length);
    let lack = length - randoms.length;

    return randoms.concat(RANDOMS.slice(0, lack));
}

exports.length = function() {
    return RANDOMS.length;
}
