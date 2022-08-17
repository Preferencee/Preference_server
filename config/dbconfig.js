const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    "host": "umcspring.cmyetgzwfspl.ap-northeast-2.rds.amazonaws.com" ,
    "user": "ksj01128",
    "port": "9000",
    "password": "adominic",
    "database": "seojinDB"
})

module.exports = pool // 모듈화해 js 내 어떤 파일에서도 사용 가능