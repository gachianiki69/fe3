'use strict';

const fs = require('fs');

const random = require('./random.js');
const grow = require('./grow.js');
const battle = require('./battle.js');

function getConfig(fileName) {
    let text = fs.readFileSync(fileName);

    return JSON.parse(text);
}

function printLevelUp(name, randoms, index) {
    let levelUpResult = grow.levelUp(name, randoms);

    for (let j = 0; j < levelUpResult.length; j++) {
        if (levelUpResult[j].result > 0) {
            console.log(levelUpResult[j].label + ' が' + 1 + 'あがった！');
        }
    }
}

function main() {
    const RANDOM_LENGTH = 6 + 8; // BATTLE + LVUP

    let config = getConfig(process.argv[2]);

    for (let i = 0; i < random.length(); i++) {
        let randoms = random.get(i, RANDOM_LENGTH);
        let labelString = '#' + i + ':';

        for (let j = 0; j < randoms.length; j++) {
            labelString += ' ' + randoms[j];
        }

        console.log(labelString);

        let battleResult = battle.turn(config, randoms);

        if (battleResult.enemyHesitate) {
            console.log(config.enemy.name + 'はすばやくみをかわした！');

        } else {
            console.log(config.enemy.name + 'は' + battleResult.enemyDamage + 'のダメージを うけた');
        }

        if (battleResult.phase === 1) {
            console.log(config.enemy.name + 'は たおれた');
            printLevelUp(config.player.name, randoms.slice(battleResult.randomIndex));
            console.log('');
            continue;
        }

        if (config.enemy.counter) {
            if (battleResult.playerHesitate) {
                console.log(config.player.name + 'はすばやくみをかわした！');

            } else {
                console.log(config.player.name + 'は' + battleResult.playerDamage + 'のダメージを うけた');
            }

            if (battleResult.phase === 2) {
                console.log(config.player.name + 'は たおれた');
                console.log('');
                continue;
            }
        }

        if (battleResult.enemyHesitate2) {
            console.log(config.enemy.name + 'はすばやくみをかわした！');

        } else {
            console.log(config.enemy.name + 'は' + battleResult.enemyDamage2 + 'のダメージを うけた');
        }

        if (battleResult.phase === 3) {
            console.log(config.enemy.name + 'は たおれた');
            printLevelUp(config.player.name, randoms.slice(battleResult.randomIndex));
            console.log('');
            continue;
        }

        console.log('');
    }
}

if (process.argv.length < 3) {
    console.log('Usage: node battle-tool.js JSON');
    return;
}

main();
