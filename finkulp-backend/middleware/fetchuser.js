const fetchUserFunction = (req, res, next) => {
    console.log("Middleware: Fetching user");
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).send({ error: "Access denied" });
    } else {
            console.log("Token is: ", token);
            req.token=token;
            next();
    }
};

module.exports = fetchUserFunction;
