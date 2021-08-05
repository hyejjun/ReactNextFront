const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.get('/', (req, res) => {
    res.send('hello world!')
})

app.post('/api/login', (req, res) => {
    const { userid, userpw } = req.body
    console.log(userid);
    console.log(userpw);

    // 여기에서 DB에 조회하기
    /*
        const data = await User.findeOne({
            where:{
                userid,
                userpw
            }
        })
    */
    let result = {};
    if (userid == 'web7722' && userpw == '1234') {
        result = {
            result: 'OK',
            msg: '로그인 성공'
        }
    } else {
        result = {
            result: 'Fail',
            msg: '로그인 실패, 아이디나 패스워드 확인 부탁'
        }
    }

    res.json(result)
})

app.listen(3000, () => {
    console.log('server 3000');
})