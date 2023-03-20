module.exports = function checkIdInRequest(req, res, next) {

    if (!req.query.id) {

        // res.status(401).send('Please enter ty id you request');
    }

    next();
}
