# ExpressJS

---

## Express.js 프레임워크

Node.js 기반의 유연한 백엔드 프레임워크

활성화된 거대 커뮤니티와 패키지 등 다수의 장점으로 JS 백엔드 프레임워크 중 압도적으로 사용자가 많다

---

## ExpressJS를 위한 준비

### Node.js 설치

```

// node.js 공식 사이트에서 LTS 버전 받기

TERMINAL

node -v // 버전이 뜰 경우 정상 설치된 것

```

### IDE 설치

Visual Studio Code 공식 사이트에서 설치

혹은 다른 IDE 설치 가능 ( 단 JS는 VS Code 권장 )

### PowerShell 오류

파워쉘 오류에는 여러 가지가 있다

1. **기본 쉘이 파워쉘로 되어 있어 npm이 실행되지 않는 경우**

    a. Visual Studio Code에서 `Ctrl + Shift + P` 를 누르고 Terminal default shell를 `PowerShell`에서 `Command Prompt`로 바꾸어준다

    b. 간혹 가다가 설치가 되어있지 않은 경우 `Microsoft store`에서 설치해준다

2. **보안 오류가 발생하는 경우**

    a. `PowerShell`을 관리자 권한으로 실행해 `Set-ExecutionPolicy Unrestricted` 를 입력해준 후 `Y`를 입력 후 엔터키를 눌러준다.

    b. `executionpolicy`를 입력 시 `unrestricted`가 뜬다면 다시 VS Code에서 실행해보자.

### MySQL 설치

MacOS는 `Homebrew`를 이용해 설치가 가능하지만, Windows의 경우 홈페이지에 직접 가서 설치가 필요하다. 

다만 `Homebrew`를 이용해 설치하는 MacOS는 `Workbench`를 따로 설치해주어야 한다.

GUI를 원한다면 `Workbench`를 따로 설치해두도록 하자.

Community 버전을 설치하도록 하자.

---

## ExpressJS 설치

```
// Terminal

npm i express

// ...or npm install express
```

`added (NN) packages`로 시작하는 문장이 응답으로 돌아오면 성공적으로 설치된 것이다.

---

## ExpressJS 시작

```
npm init
```

패키지 이름, 버전, 설명, 시작 지점, test command 등을 물어보는 과정이 터미널에 등장한다. 
입력하지 않고 엔터를 칠 경우 디폴트값으로 설정된다.
모두 입력된 이후에는 Is this OK? 라며 다시 한 번 확인하는데, 이 경우 yes를 입력하거나 엔터를 칠 경우 다음 단계로 넘어가 자동 생성을 해준다.

이제 `Hello World!`를 띄우는 서버를 간단히 만들어볼 것이다.

|| HelloWorld 폴더를 참고하자!

다음 코드는 http://localhost:3000 에 Hello World!를 표시하는 서버를 만든다. 어떻게 가능할까?

!! 클론코딩과 주석 달기

```
const express = require('express')()

const port = 3000

express.get('/', (req, res) => {    
        res.send('Hello World!') 
})

express.listen(port, () => { 
  console.log(`Example app listening on port ${port}`)
})
```