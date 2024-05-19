const jwt = require('jsonwebtoken');
const secret_data = "This is very confidential";

const fetchUserFunction = (req, res, next) => {
    const token = req.headers['authorization'];
    console.log(token);
    if (!token) {
        return res.status(401).send({ error: "Access denied" });
    } else {
            req.token=token;
            next();
    }
};

module.exports = fetchUserFunction;
