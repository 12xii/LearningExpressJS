const User = require('../models').User;
const crypto = require('crypto');

const signUp = async (req, res) => {
    const userID = req.body.ID;
    const PW = req.body.PW;
    const name = req.body.name || 'nonamedUser';

    try {
        const isUser = await User.findOne({
            where: { userID },
        })
        if (isUser) {
            return res.status(409).json({
                "message" : "이미 존재하는 회원입니다.",
            })
        }

        const salt = crypto.randomBytes(32).toString("hex");
        const userPW = crypto
            .pbkdf2Sync(PW, salt, 2, 32, "sha512")
            .toString("hex");
        
        await User.create({
            userID,
            PW : userPW,
            name,
            salt,
        })
        
        return res.status(201).json({
            "message" : "회원가입이 완료되었습니다."
        })

    } catch (err) {
        console.error(err);
        return res.status(400).json({
            "message" : "요청 실패",
        })
    }
}

module.exports = { signUp }