function insert(dest) {
    const short = db.get('count').value()

    db.get('links')
        .push({ 'short': short.toString(), 'dest': dest })
        .write()

    db.update('count', (n) => { return n + 1 })
        .write()

    return short;
}

function select(short) {
    const results = db.get('links')
        .filter({short: short})
        .take(1)
        .value();

    if (results.length <= 0)
        return null;

    return results[0].dest;
}

const dbPath = 'db.json';

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync(dbPath)
const db = low(adapter)

db.defaults({ links: [], count: 0 })
  .write();

module.exports = {
    insert: insert,
    select: select
};