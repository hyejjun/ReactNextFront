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

# Styled Components 환경설정
# 새로고침할때마다 css 가 풀리는걸 방지해보자
# /pages / _document.jsx 생성
안에 내용은 그냥 외우려고 하지 말고 받아들이기
# /front /.babelrc 라는 파일을 생성해줘야 한다.
# npm install -D babel-plugin-styled-components


만약 잘 안된다면 
.next 파일 지우고
npm install next 로 다시 깔아야 한다.
그 다음 npm run dev
-----------------------------------------------------

# styled component 의 장점
props 값을 던질 수 있다 - 값에 따라 css 를 바꿀 수 있음
/* display : ${(props)=>{(props.flag ? '' : '')}}; */


------------------------------------------------
# input 관리
login.jsx


---------------------------------------------------------
# 0728

[login.jsx]
# {...userid}  {...userpw} 다시 설명
인자값 defaultValue는 꼭 defaultValue로 써야하는게아니라 아무렇게나 써도 되는거죠? 
- 넵! 그냥 aaa로 써도 됨

# hooks폴더에 custum hook 분리

# 하나의 파일에는 하나의 기능
- 스크롤의 느낌이 너무 많이 내려간다 싶으면? - 100줄 이상이면 나누는 편이 좋다.

[join.jsx]
복습!

* 웹 접근성
label
img alt
input title


# Accordion 분리
[NavToggle.jsx] 에 있던 Accordion 을 따로 뼀다
[Accordion.jsx]
하고 porps 값을 따로 보내주었다.

* css를 export 뒤에 써도 되나요? - 가능~ 


# [post].jsx 
값 받아오기

# redux 설치 
npm install next-redux-wrapper          // Store 개념 NEXT SSR(server side rendering)에 대한 처리를 해주는 패키지 - redux를 Next에 맞게 설정해줌
npm install redux                       // redux에 관련된 것들.. Store middleware combine
npm install react-redux                 // redux랑 react랑 같이 쓸 때 사용 (redux는 저장만하는 아이) - 컴포넌트에서 저장소에 있는 내용을 가져올때 사용한다
npm install redux-devtools-extension    // react와 달리 dev tools 설치를 해야 사용가능함.


# Redux and Context
데이터 중앙관리를 해주는 녀석들

게시글 리스트 - 중앙관리에 넣어서 관리를 하는게 좋다

화면에서 뿌릴 데이터(JSON)들을 받는 공간을 Store
JSON 목록을 한 파일에다가 다 저장해놓는것이다.

useReducer 랑 거의 흡사하다.

state 와 dispatch 와 reducer 의 관계를 이해하는게 어렵다.

우리가 만들었던 reducer 파일..
우리는 Comment 만 만들었을 뿐인데 

redux 에 있는 combine 이라는 애들 사용,

[폴더구조]
pages
component
hooks
store       -> redux 설정값 정도만 받는다.
reducers     라는 폴더가 하나 더 생긴다. - 양이 엄청나게 많음


리덕스에서는
reducer에서 초기 state 값을 설정하는것을 주의하자
--------------------------------------------

Context 랑 Redux랑 뭐가 다르냐?
redux 가 먼저 나오긴함

[redux의장점] 
- 디버깅이 쉬움 
- redux dev tool 이라는게 있기 때문!
- 불변성 상태변과정
- 비동기통신 데이터 관리
- 안정성이 좋다!
[redux의단점]
- 코드 생산성이 나쁘다 : 일일히 다 작업을 해줘야한다 - 손이 좀 더 간다.

JAVA 도 동일한 장단점을 가진다.
+ 코드관리하기 쉬움


-----------------------------------------------------------------

1. store/ configureStore.js 파일 생성
2. reducers/ index.js 파일 생성

-----------------------------------------------------------
0729

# redux 설치 
npm install next-redux-wrapper          
npm install redux                       
npm install react-redux                 
npm install redux-devtools-extension

다 설치가 되어있는지 확인해보자

1. store / configureStore.js
데이터와 관련된거는 js
컴포넌트는 jsx

기본적으로 export default wrapper

const wrapper = createWrapper(configureStore,{})
첫번째 인자값은 redux의 Store => const Store = createContext(initalState)
두번째

const configureStore = ()=>{
    // context -> createContext
    // const store = createContext(initalState)
    // 초기값은 reducer에있다.
    const Store = createStore(reducer)
}


2. reducers / index.js
reducer 작성

const Store = createStore(reducer)
여기 안에 들어가는 reducer를 넣기 위해 index에서 reducer를 작성한다.


3. _app.jsx

import wrapper from '../store/configureStore'
export default wrapper.withRedux(App)


4. login.jsx
import {useDispatch} from 'react-redux'

const Login = () => {
    const dispatch = useDispatch()

    dispatch({type : 'USER_LOGIN'})

이렇게 하고 로그인 페이지 갔을때 
case USER_LOGIN:
    console.log('로그인 신호 왔다');
이게 찍히는지 확인해보자

---------------------------------
[추가설명]
# configureStore.js
-> [context.jsx] 와 같은 의미
    createContext 부분.
    그래서 Store 의 결과 값이 Store는 컴포넌트이다.
    Store : 초기값을 저장하고 내보내주는 녀석이다.
-> context.jsx 는 초기 상태값을 저장한 컴포넌트를 만드는 파일이다.

-> [configureStore.js]
1. const wrapper = createWrapper(configureStore)

createSotre (reducer)=== createContext (상태초기값)
            reducer 안에 상태초기값을 가지고 있다.
Store 라는 변수 안에 상태 초기값을 가지고 있다.
그래서 [configureStore] 는 Store 를 가지고 있는 함수표현식에 대한 함수이다

그러면 wrapper는 뭐냐?
context를 만들고 사용할 곳에서 import Store 를 해왔다. 그런 다음에 쓸때는 Store.Provider를 썼는데
이걸 대체해서 나온게 wrapper 이다.(Provider 의 내용을 담고 있음)
이 wrapper를 쓸때는 import wrapper 해오고
export default wrapper.withRedux(App) 로 다 쓸 수 있게끔한다.

[reducers/index.js]
return default 가 else 구문이라고 생각하면 된다.
그래서 시작할때 아무 action 값이 없으면 거쳐가게 되고
무조건 있어야 에러가 나지 않는다.

------------------------
context 에서 만든 islogin 값과
redux로 만든 isLogin 값은 다른거다.
그래서 서로 다른 값을 바라보고 있으면 로그인 로그아웃이 제대로 진행되지 않는다.
그래서 로그아웃도 redux에 있는 isLogin 으로 바꿔줘야 한다.

1. reducer를 만들어준다. - 상태값을 받은 적이 없다면 초기값을 넣어준다
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            //console.log('로그인 신호 왔다');
            return {
                ...state,   // initalState의 내용을 다 복사한거임
                user: {
                    ...state.user,      // 왜 또 복사하냐? - 큰 테두리만 복사 - 안에 값 참조만..
                    IsLogin: true
                },
            }
        case USER_LOGOUT:
            return {
                ...state,
                user: {
                    ...state.user,
                    IsLogin: false
                },
            }
        default:
            return state
    }
}
고침

# state 파일별로 나눔

# redux middleware 사용할 수 있는 설정하고 devtools 사용까지

[configureStore.js] 에서
dev tool 설정

미들웨어 역할은 reducer(action) 랑 state를 이어주는 중간다리 역할을 해주는 녀석이다.

훔쳐오는거...? - 미들웨어가

reducer에서 action 값이 미들웨어를 통해서만 state로 갈 수 있는...


---------------------------------------------------------

0730

React 는 redux까지 배워 놓고 응용..!

* 제너레이터에 대해..
yield(중지시킨다는 의미) 가 .next() 했을때 value 로 들어가는데 이거를 return 값이라고 생각하면 된다.
done : true - 끝남
done : false - 아직 안끝남

*  무한 반복인 경우?
const abc = function* () {
    while(true) {
        console.log('무한반복')
        yield
    }
}
let a = abc()       // 함수를 사용할때는 변수에 담아서.
a.next();
하면 무한반복이라는 콘솔로그가 next를 할때마다 한번씩 찍힌다. 


# 미들웨어가 왜 필요한가?
reducer 라는 값이 상태값을 변하게 해주는 아이인데 reducer에서 처리하기 전에 코드가 실행되는게 미들웨이다.
redux = thunk
redux = saga
미들웨어 (비동기) - 중간에 꼽사리
dispatch 에서 reducer로 action값을 전달해서 reducer가 state값을 변하게 한다.


dispatch -(action)/middleware(필요한걸 만드는 역할)-> reducer -> state

예 ) dispatch  에서 login 을 진행할건데 login button 눌렀을때 로그인이라는게 type action값을 전달
id 랑 pw 를 reducer 에 전달.. 근데 reducer 가 할 수 있는건 없어.
맞는지 틀린지 코드작성하기가 까다롭다.
그래서 중간에 하나를 거쳐서 간다면 어떨까 해서 생긴게 미들웨어 (id 와 pw 를 갖고 실제 서버에 요청해서 응답 받고 그 내용을 reducer에게 전달)
state 변경하고 페이지를 리렌더 시킨다.




# redux thunk / redux saga


[configureStore.jsx]

npm install redux-thunk



saga 를 쓰면 요청을 100개 받으면 제일 마지막에 온것만 처리를 하게 된다.



---------------------------------------------------

0805
Next 빌드해서 올리는거
https 까지 하는거 - 보안을 위해서

local_front
aws_front

aws_front 에서 ubuntu 계정을 열어준다
ssh -i "hyejun-laptop.pem" ubuntu@ec2-3-34-51-137.ap-northeast-2.compute.amazonaws.com