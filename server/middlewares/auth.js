exports.authCheck = (req, res, next) => {
    try {
        console.log("test - middlewares - authCheck");
        if ( true ) {
            next();
        } else {
            res.status(500).json({ message: "access denied" });
        }
    } catch (error) {
        console.log(error.message);
    }
};
