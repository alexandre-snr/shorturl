const frontendHostname = process.env.FRONTEND_HOSTNAME || null;
let db;

module.exports = (dbLink) => {
    db = dbLink;

    return (req, res) => {
        const { dest } = req.body;

        if (typeof(dest) != "string") {
            res.sendStatus(400);
            return;
        }

        try {
            const destUrl = new URL(dest);

            if (frontendHostname != null && destUrl.hostname == frontendHostname) {
                res.sendStatus(400);
                return;
            }
        } catch (e) {
            res.sendStatus(400);
            return;
        }

        const short = dbLink.insert(dest);
        res.json({
            'short': short
        });
    }
}