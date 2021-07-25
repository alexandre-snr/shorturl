const { v4: uuidv4 } = require('uuid');
const lockfile = require('proper-lockfile');

const dbPath = 'store/db.json';

function getDb() {

    const low = require('lowdb')
    const FileSync = require('lowdb/adapters/FileSync')

    const adapter = new FileSync(dbPath)
    const db = low(adapter)

    db.defaults({ links: [] })
        .write();

    return db;
}

function insert(dest) {
    const db = getDb();
    const short = uuidv4().split('-')[0];
    while (select(short))
        short = uuidv4().split('-')[0];

    const release = lockfile.lockSync(dbPath);
    db.get('links')
        .push({ 'short': short.toString(), 'dest': dest })
        .write()
    release();
    return short;
}

function select(short) {
    const db = getDb();
    const results = db.get('links')
        .filter({short: short})
        .take(1)
        .value();

    if (results.length <= 0)
        return null;

    return results[0].dest;
}

module.exports = {
    insert: insert,
    select: select
};
