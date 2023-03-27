const write = require('../model').write;

const createWriting = async (req, res) => {
    const { writeID, writeHead, writeBody, writeUser } = req.body;
    
    try {
        const haveID = await write.findOne({
            where: { writeID },
        })

        if(haveID) return res.status(409).json({"message" : "중복된 아이디입니다."})

        await write.create({
            writeID,
            writeHead,
            writeBody,
            writeUser,
        })

        return res.status(201).json({
            "message" : "요청에 성공하였습니다."
        })
    } catch (err) {
        console.error(err);
        return res.status(400).json({
            "message" : "요청에 실패하였습니다."
        })
    }
}

const readWriting = async (req, res) => {
    const { writeID } = req.body;

    try {
        const writed = await write.findOne({
            where : { writeID },
        })

        return res.status(200).json({
            "message": "요청에 성공했습니다.",
            writed,
        })

    } catch (err) {
        console.error(err);
        return res.status(400).json({
            "message" : "요청에 실패했습니다."
        })
    }
}

module.exports = {
    createWriting,
    readWriting,
}