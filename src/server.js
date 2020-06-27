const port = 8080;
const dbPath = 'db.json';

const express = require('express');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync(dbPath)
const db = low(adapter)

db.defaults({ links: [], count: 0 })
  .write();

const app = express();
app.use(express.json());

app.post('/', (req, res) => {
    const { dest } = req.body;

    if (typeof(dest) != "string") {
        res.sendStatus(400);
        return;
    }

    const short = db.get('count').value()

    db.get('links')
        .push({ 'short': short.toString(), 'dest': dest })
        .write()

    db.update('count', (n) => { return n + 1 })
        .write()

    res.status(200);
    res.json({
        'short': short
    });
});

app.get('/:short', (req, res) => {
    
    const { short } = req.params;

    const results = db.get('links')
        .filter({short: short})
        .take(1)
        .value();

    if (results.length <= 0) {
        res.sendStatus(404);
        return;
    }

    const dest = results[0].dest;

    res.redirect(dest);

});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});