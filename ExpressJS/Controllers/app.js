const express = require('express');
const controller = require('./controller/a'); // 컨트롤러를 가져온다

const port = 8080;

const app = express(); // 익스프레스 함수를 따로 설정해준다

app.use('/A', controller.a) // End Point에 맞는 컨트롤러를 설정해준다
app.use('/B', controller.b)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})