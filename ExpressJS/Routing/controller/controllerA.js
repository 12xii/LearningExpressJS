const bigA = (req, res) => {
    if (req) return res.send('Hello, I am small!');
}

const smallA = (req, res) => {
    if (req) return res.send('Hello, I am BIG!');
}


module.exports = {
    bigA,
    smallA,
}