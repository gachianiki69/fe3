'use strict';

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

function getGrowth(name) {
    return GROWTH[name];
}

exports.levelUp = function(name, randoms) {
    let result = [];
    let growth = getGrowth(name);

    for (let i = 0; i < JUDGES.length; i++) {
        result.push(
            {
                label: JUDGES[i].label,
                result: growth[JUDGES[i].growthIndex] - randoms[JUDGES[i].randomIndex],
            }
        );
    }

    return result;
}
