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

        if (!writed) return res.status(404).json({
            "message" : "존재하지 않는 게시글입니다."
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

const updateWriting = async (req, res) => {
    const { writeID, writeHead, writeBody } = req.body;

    try {
        const thisWrite = await write.findOne({
            where: { writeID },
        })

        if (!thisWrite) return res.status(404).json({
            "message" : "존재하지 않는 글은 수정할 수 없습니다.",
        })

        await thisWrite.update({
            writeHead,
            writeBody,
        })

        return res.status(200).json({
            "message" : "요청에 성공했습니다."
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
    updateWriting,
}