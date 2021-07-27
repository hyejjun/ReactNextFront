# 오늘의 목적 
React 를 배운다기보다 Next 기본구조 정도 배운다
(라우터 만들기... 링크 어떻게 거는지)

# Blog 폴더 생성
- 안에 back , front 폴더 생성

# 작업할 디렉토리까지 접근해야함
- front 폴더 까지 들어감

# node js 환경에서 작업할거니까
npm init (node js 환경으로 만들어준다)

# npm install next react react-dom

# package.json 을 수정함
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev":"next dev -p 3001 -H 0.0.0.0",               
    "build":"next build",                               
    "start":"next start",                               
    "lint":"next lint" 
},
저 부분을 수정해준다.

# front 폴더 안에 pages 폴더를 생성한다.

url 이 localhost:3001 일때 hello world를 찍고 싶다면 어떻게 해야할까?
pages 폴더안에 index.jsx 파일을 만들고 그 안에서 컴포넌트만 생성하면 된다.
* export default 꼭 적기!!!

# 실행할 때는 npm run dev
localhost:3001 에 들어가면 나온다.

* 만약 노트북을 사용한다면, wifi 핸드폰이랑 같은 wifi 라면
- cmd 들어가서
ipconfig 치면

ip:v4 부분 뒤에 :3001 이렇게 하면
IPv4 주소 . . . . . . . . . : 192.168.35.229

192.168.137.1:3001
192.168.35.229:3001


데스크탑인데 공유기 사용하고 있다면 얘도 된다.

-----------------------Next.js 맛보기 --------------------------------

# pages 폴더
- index.jsx         // 메일 페이지
- join.jsx      
- login.jsx
- post.jsx          // 글쓰기 페이지
- /posts/post.jsx     // 이렇게 만드는것

만약에 localhost:3001/user/join 처럼 두개씩 있는거는 어떡하지?
Next 에서는 폴더만 생성하면 된다!


# 동적 라우팅

/admin/:menu 이런식으로 동적으로 처리한 경우

1. 파일 명을 배열형식으로 만들어야 한다 [post].jsx
import {useRouter} from 'next/router'
const router = useRouter()      // 그냥 외우기
const {post} = router.query


# 레이아웃 구성하기
---------------------
|     header         |
----------------------
|     content        |
----------------------

뭔가 고정되는 부분 , 여러번 쓰이는 header 같은 부분이 있다면

/front/components 폴더를 생성
그 폴더 안에서 BlogLayout.jsx 파일 생성
컴포넌트 코드 까지 작성


# 또다른 레이아웃 구성하기
-> /components/ FormLayout.jsx 생성한 뒤
    login.jsx join.jsx 에 사용하기

# Link 컴포넌트 사용하기 - 링크 이동
* React 에 사용되는 Link 와 사용법이 다름
react -> <Link to = '/'> home </Link>
next.js -> <Link href='/'><a>home</a></Link>


[BlogLayout.jsx]

import Link from 'next/link'
<Link href='/'>
    <a>home</a>
</Link>


# 뒤로가기
[FormLayout.jsx]
import Router from "next/router"
<button onClick={()=>{Router.back()}}>뒤로가기</button>


# index.html 어디감?


# header 의 title 을 수정하는 방법
import Head from 'next/head'
<Head>
    <title>Blog</title>
</Head>


# Next 에서 모든 컴포넌트를 실행하기전에 거쳐가는 컴포넌트가 있다.

# app.jsx ?? 어디감??
Head 에 넣어놓으면 모든곳에 공통적으로 사용이 가능하다
혹은 공통적인 css 가 있다면 여기다가 import 를 하는게 좋다.

/pages/_app.jsx 

- 공통적인 css를 한번 넣어보자
/front/ index.css

다시 _app.jsx 와서
import '../index.css'

# google font 사용하기
_app.jsx 에서
import Head from 'next/head'
<Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,500;0,700;0,800;0,900;1,300;1,600&display=swap" rel="stylesheet"/>
</Head>

* crossOrigin='true'
이 부분을 잘 확인해서 동일하게 수정해줘야한다.

[index.css]
body{
    font-family: 'Montserrat', sans-serif;
}

# 이미지 가져오기
/front /public 폴더 생성
여기에 이미지 하나 넣어주고
[index.jsx]
에서 
<BlogLayout>
    <div>
        <img src="/logo_new_2018.png" />
    </div>
</BlogLayout>


# css import 하기 적용하기
개별 파일에 적용하고 싶은 css
/ component /FormLayout.module.css

[FormLayout.jsx]
import styled from './FormLayout.module.css'

<div className={styled.footer}>
    copyright &copy; all reserved
</div>

# styled Component
[NavToggle.jsx] - css 사용하는 방법

외부 라이브러리 - 설치 필요
npm install styled-components   (서버 끄고 front 폴더 안에 install 하면 됨)

/components/NavToggle.jsx 파일 생성

마켓에서 이거 다운 받기
vscode-styled-component


----------------------------------------------

0727 
