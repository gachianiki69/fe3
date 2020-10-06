'use strict';

const random = require('./random.js');
const grow = require('./grow.js');

function main() {
    for (const name of grow.names()) {
        let labelString = name;
        let growth = grow.getGrowth(name);

        labelString += ' HP' + growth[0] + '%';
        labelString += ' 力' + growth[1] + '%';
        labelString += ' 技' + growth[2] + '%';
        labelString += ' 速さ' + growth[3] + '%';
        labelString += ' 幸運' + growth[4] + '%';
        labelString += ' 武器' + growth[5] + '%';
        labelString += ' 守備' + growth[6] + '%';
        labelString += ' 魔防' + growth[7] + '%';

        console.log(labelString);

        for (let i = 0; i < random.length(); i++) {
            let randoms = random.get(i, growth.length);
            let levelUpResult = grow.levelUp(name, randoms);
            let outputString = '#' + i;

            for (let j = 0; j < levelUpResult.length; j++) {
                if (levelUpResult[j].result > 0) {
                    outputString += ' ' + levelUpResult[j].label;
                }
            }

            console.log(outputString);
        }

        console.log('');
    }
}

main();
