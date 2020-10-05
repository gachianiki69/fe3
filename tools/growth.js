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

const GROWTH = {
    'マルス': [ 90, 50, 40, 50, 70, 40, 20, 3, ],
    'シーダ': [ 50, 20, 70, 90, 70, 80, 20, 3, ],
    'ジェイガン': [ 10, 10, 10, 10, 0, 0, 0, 3, ],
    'カイン': [ 60, 30, 60, 60, 50, 90, 20, 3, ],
    'アベル': [ 70, 40, 50, 50, 40, 70, 20, 3, ],
    'ドーガ': [ 60, 20, 40, 40, 20, 20, 10, 3, ],
    'ゴードン': [ 40, 30, 30, 30, 40, 50, 10, 3, ],
    'オグマ': [ 80, 40, 20, 30, 40, 70, 30, 3, ],
    'バーツ': [ 60, 50, 50, 50, 70, 30, 50, 3, ],
    'サジ': [ 90, 50, 50, 10, 30, 20, 50, 3, ],
    'マジ': [ 10, 30, 20, 40, 40, 50, 40, 3, ],
    'カシム': [ 70, 60, 40, 40, 20, 20, 20, 3, ],
    'ジュリアン': [ 80, 70, 50, 50, 80, 40, 30, 3, ],
    'レナ': [ 10, 20, 40, 20, 70, 40, 10, 3, ],
    'ナバール': [ 90, 50, 40, 50, 60, 30, 20, 3, ],
    'ハーディン': [ 50, 30, 50, 60, 30, 70, 20, 3, ],
    'ウルフ': [ 70, 40, 10, 20, 50, 60, 20, 3, ],
    'ザガロ': [ 90, 30, 20, 10, 10, 30, 20, 3, ],
    'ビラク': [ 50, 30, 10, 20, 10, 70, 10, 3, ],
    'マチス': [ 50, 40, 30, 20, 20, 70, 20, 3, ],
    'マリク': [ 80, 20, 30, 50, 50, 80, 20, 3, ],
    'リカード': [ 50, 50, 20, 60, 40, 30, 20, 3, ],
    'ウェンデル': [ 60, 10, 30, 20, 40, 70, 10, 3, ],
};

const JUDGES = [
    {
        label: 'ちから',
        randomIndex: 0,
        growthIndex: 1,
    },
    {
        label: 'わざ',
        randomIndex: 1,
        growthIndex: 2,
    },
    {
        label: 'すばやさ',
        randomIndex: 2,
        growthIndex: 3,
    },
    {
        label: 'こううん',
        randomIndex: 3,
        growthIndex: 4,
    },
    {
        label: 'ぶきレベル',
        randomIndex: 7,
        growthIndex: 5,
    },
    {
        label: 'しゅびりょく',
        randomIndex: 4,
        growthIndex: 6,
    },
    {
        label: 'まほうぼうぎょ',
        randomIndex: 5,
        growthIndex: 7,
    },
    {
        label: 'さいだいHP',
        randomIndex: 6,
        growthIndex: 0,
    },
];

const CONSUMPTION = 2;

function getRandoms(index) {
    let randoms = RANDOMS.slice(index, index + JUDGES.length + CONSUMPTION);
    let lack = JUDGES.length - randoms.length;

    return randoms.concat(RANDOMS.slice(0, lack));
}

function getGrowth(name) {
    return GROWTH[name];
}

function main() {
    for (let name in GROWTH) {
        let labelString = name;
        let growth = getGrowth(name);

        labelString += ' HP' + growth[0] + '%';
        labelString += ' 力' + growth[1] + '%';
        labelString += ' 技' + growth[2] + '%';
        labelString += ' 速さ' + growth[3] + '%';
        labelString += ' 幸運' + growth[4] + '%';
        labelString += ' 武器' + growth[5] + '%';
        labelString += ' 守備' + growth[6] + '%';
        labelString += ' 魔防' + growth[7] + '%';

        console.log(labelString);

        for (let i = 0; i < RANDOMS.length; i++) {
            let randoms = getRandoms(i);
            let outputString = '#' + i + ' 命中' + randoms[0] + ' 必殺' + randoms[1];

            for (let j = 0; j < JUDGES.length; j++) {
                let result = growth[JUDGES[j].growthIndex] - randoms[JUDGES[j].randomIndex + CONSUMPTION];

                if (result > 0) {
                    outputString += ' ' + JUDGES[j].label;
                }
            }

            console.log(outputString);
        }

        console.log('');
    }
}

main();
