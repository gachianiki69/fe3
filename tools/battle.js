'use strict';

const random = require('./random.js');
const grow = require('./grow.js');

exports.turn = function(config, randoms) {
    let result = {
        winner: 'none',
        phase: 0,
        enemyDamage: 0,
        enemyHesitate: false,
        playerDamage: 0,
        playerHesitate: false,
        enemyDamage2: 0,
        enemyHesitate2: false,
        randomIndex: 0,
    };

    let randomIndex = 0;
    let hit = 0;
    let critical = 0;
    let damage = 0;
    let playerHp = config.player.hp;
    let enemyHp = config.enemy.hp;

    // player attack
    hit = config.player.hit - randoms[randomIndex++];

    if (hit > 0) {
        critical = config.player.clt - randoms[randomIndex++];
        damage = config.player.atc - config.enemy.def;

        if (critical > 0) {
            damage *= 3;
        }

        result.enemyDamage = damage;
        enemyHp -= damage;

        if (enemyHp <= 0) {
            result.phase = 1;
            result.winner = 'player';
            result.randomIndex = randomIndex;

            return result;
        }

    } else {
        result.enemyHesitate = true;
    }

    // enemy attack
    if (config.enemy.counter) {
        hit = config.enemy.hit - randoms[randomIndex++];

        if (hit > 0) {
            critical = config.enemy.clt - randoms[randomIndex++];
            damage = config.enemy.atc - config.player.def;

            if (critical > 0) {
                damage *= 3;
            }

            result.playerDamage = damage;
            playerHp -= damage;

            if (playerHp <= 0) {
                result.phase = 2;
                result.winner = 'enemy';
                result.randomIndex = randomIndex;

                return result;
            }

        } else {
            result.playerHesitate = true;
        }
    }

    // player re-attack
    if (config.player.spd - config.enemy.spd >= 3) {
        hit = config.player.hit - randoms[randomIndex++];

        if (hit > 0) {
            critical = config.player.clt - randoms[randomIndex++];
            damage = config.player.atc - config.enemy.def;

            if (critical > 0) {
                damage *= 3;
            }

            result.enemyDamage2 = damage;
            enemyHp -= damage;

            if (enemyHp <= 0) {
                result.phase = 3;
                result.winner = 'player';
                result.randomIndex = randomIndex;

                return result;
            }

        } else {
            result.enemyHesitate2 = true;
        }
    }

    result.randomIndex = randomIndex;

    return result;
}
