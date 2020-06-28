const port = process.env.PORT || 8080;

const db = require('./drivers/file');

const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', express.static('./client/build'));

app.post('/', require('./routes/new')(db));
app.get('/:short', require('./routes/redirect')(db));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});