const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'jdbc:mysql://umcspring.cmyetgzwfspl.ap-northeast-2.rds.amazonaws.com:3306/seojinDB' ,
  user: 'ksj01128',
  port: 3306,
  password: 'adominic',
  database: 'seojinDB'
});

module.exports = {
  connection: connection
};