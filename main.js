// 서버 시작시 터미널에 npm run server 입력하면 코드 저장할 때마다 서버 재부팅되어 편리!

const express = require('express');
const app = express();
const mysql = require('mysql');
const port = 3306;

const connection = mysql.createConnection({
  host: 'umcspring.cmyetgzwfspl.ap-northeast-2.rds.amazonaws.com' ,
  user: 'ksj01128',
  port: 3306,
  password: 'adominic',
  database: 'seojinDB'
});

app.listen(port, () => {
    console.log(`server is listening at localhost: ${port}!`);
});
 

app.get('/', (req, res) => {
  res.send("test!")
});

/*
  User 정보 출력
*/
app.get('/user', (req, res)=>{
  connection.query('SELECT * FROM User', function (err, results) {
      if (err) console.log(err);
      else res.send(results);
    });
}) 