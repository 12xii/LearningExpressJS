const a = (req, res) => { // 요청과 응답을 매개변수로 받는 화살표 함수
    if (req) { // 요청이 있을 경우
        return res.send("Hello User!"); // 응답으로 Hello User!를 전송한다
    }
}

const b = (req, res) => {
    if (req) {
        return res.send("Hello, I'm B module!"); // 응답으로 Hello, I'm B module!을 전송한다
    }
}

module.exports = {
    a,
    b,
}