let db;

module.exports = (dbLink) => {
    db = dbLink;

    return (req, res) => {
        const { dest } = req.body;

        if (typeof(dest) != "string" || dest.length <= 0) {
            res.sendStatus(400);
            return;
        }

        const short = dbLink.insert(dest);

        res.json({
            'short': short
        });
    }
}