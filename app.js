const saber = require('./node-scoresaber');

(async () => {
    let p = await saber.getPlayerByRank(600);

    console.log(p)
})();
