const jwt = require("jsonwebtoken");
const jwtSECRET = process.env.SECRET;

exports.verifyToken = async (req,res,next) => {
    try {
        let { token } = req.headers;
        if (!token) {
            return res.status(400).json({ msg: "Authorization required", result: false });
        }
        let decoded = await jwt.verify(token, jwtSECRET);
        next();
    }
    catch (err) {
        console.log(err)
        return err;
    }
};

exports.createAuthToken = async (book_name, author) => {
    try {
        let payload = {
            book_name,
            author,
        };
        const token = await jwt.sign(payload, jwtSECRET);
        return token;
    }
    catch (err) {
        return err;
    }
};
