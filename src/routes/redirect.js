let db;

module.exports = (dbLink) => {
    db = dbLink;

    return (req, res) => {
    
        const { short } = req.params;
    
        const dest = dbLink.select(short);
    
        if (dest === null) {
            res.sendStatus(404);
            return;
        }

        res.redirect(dest);
    
    }
}