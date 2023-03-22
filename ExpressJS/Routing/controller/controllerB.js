const bigB = (req, res) => {
    if(req) return res.send('Hello User, I am B!')
}

const smallB = (req, res) => {
    if(req) return res.send('Hello User! I am b!')
}


module.exports = {
    bigB,
    smallB,
}