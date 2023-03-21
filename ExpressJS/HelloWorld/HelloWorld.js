const express = require('express')() // express에 express 모듈 할당

const port = 3000 // 포트를 3000번으로 설정

express.get('/', // '/' URL로 get 메소드 요청을 보낼 경우
    (req, res) => {    // 응답과 요청을 매개변수로 한 화살표 함수
        res.send('Hello World!') // 응답으로 Hello World! 를 보냄
})

express.listen(port, () => { // 포트 연결
  // 성공 시 실행하는 구문
  console.log(`Example app listening on port ${port}`) // 터미널에 Example app listening on port ${port} 메시지를 띄움
  // chrome에 접속해서 URL 창에 localhost:3000 을 입력해보세요! Hello 
})