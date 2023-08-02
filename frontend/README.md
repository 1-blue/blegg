> 도메인은 가지고 있던 것 중에서 아무거나 사용했기 때문에 사이트와 맞지 않습니다... 🥲<br />
> 무료 `Riot Api`를 사용하기 때문에 요청 수의 제한이 있어 정상적으로 동작하지 않을 수 있습니다.<br />
> 또한 매일 새로운 키로 업데이트해줘야 하기 때문에 메인 / 소환사 검색 페이지가 정상적으로 작동하지 않을 수 있습니다.

# 📱 blegg
+ ✏️ 개인 프로젝트 - 리그오브레전드 전적 검색 프로젝트
+ ⏱️ 프로젝트 기간: `2023/06/19 ~ 2023/08/01`
+ ⛓️ 배포 링크: [프로젝트 결과물](https://bleshop.shop)
+ 가짜 계정들
  1. 아이디: ( 브론즈 ~ 챌린저 영문 ) + "1"
  2. 비밀번호: 123456789a!

<br />

# 📝 문서
1. [API 명세서](https://bleshop.shop/swagger)
2. [GitHub Projects](https://github.com/users/1-blue/projects/4)
3. [Storybook](https://648fa14a937924b712976e49-jagdginlsz.chromatic.com/?path=/docs)

<br />

# 🧑‍💻 구현 기능
1. [챔피언](https://github.com/1-blue/blegg/issues/2)
2. [소환사 전적](https://github.com/1-blue/blegg/issues/5)
3. [인증](https://github.com/1-blue/blegg/issues/8)
4. [커뮤니티](https://github.com/1-blue/blegg/issues/11)
5. [프로필](https://github.com/1-blue/blegg/issues/14)
6. [리그](https://github.com/1-blue/blegg/issues/17)

<br />

# 🎩 Tech Stack

## 🛠️ Tools
| Git | Github | SourceTree | Window 11 |
| :---: | :---: | :---: | :---: |
| <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/git/F05032" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/github/181717" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/sourcetree/0052CC" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/windows11/#0078D4" alt="icon" width="75" height="75" /></div> |

<br />

## 📤 FrontEnd

| TypeScript | React.js | Vite | Storybook | TailwindCss | React-Query | Framer-Motion | React-Hook-Form |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/typescript/3178C6" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/react/#61DAFB" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/vite/#646CFF" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/storybook/#FF4785" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/tailwindcss/#06B6D4" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/reactquery/FF4154" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/framer/#0055FF" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/reacthookform/#EC5990" alt="icon" width="75" height="75" /></div> |

# 💡 가이드 라인

## 📤 FrontEnd

### 0️⃣ 환경 변수 등록

+ `.env.development`

```
# 테스트용 서버 URL
VITE_SERVER_URL=http://localhost:3050
```

+ `.env.production`

```
# 배포용 서버 URL
VITE_SERVER_URL=https://bleshop.shop
```

### 1️⃣ 종속성 설치

```bash
$ cd frontend
$ npm install
```

### 2️⃣ 개발 모드 실행

```bash
$ npm run dev
```

### 3️⃣ 배포 모드 빌드

```bash
$ npm run build
```
