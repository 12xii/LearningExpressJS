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

---

