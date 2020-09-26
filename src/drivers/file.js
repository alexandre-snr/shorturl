const { v4: uuidv4 } = require('uuid');

function insert(dest) {
    const short = uuidv4();

    db.get('links')
        .push({ 'short': short.toString(), 'dest': dest })
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

const dbPath = 'store/db.json';

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync(dbPath)
const db = low(adapter)

db.defaults({ links: [] })
  .write();

module.exports = {
    insert: insert,
    select: select
};
