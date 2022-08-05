const pool = require('../../../config/dbconfig');
const userDao = require("../User/userDao");
const baseResponse = require("../../../config/baseResponseStatus");
const {errResponse} = require("../../../config/response");

// Provider: Read 비즈니스 로직 처리

// 유저 이메일 체크
exports.emailCheck = async function (email) {
    try{
        const connection = await pool.getConnection(async (conn) => conn);
  
        const emailCheckResult = await userDao.selectUserEmail(connection, email);
        connection.release();
    
        return(emailCheckResult)

    } catch (err) {
      return errResponse(baseResponse.DB_ERROR);
    }
    };
  
  
  // 유저 닉네임 체크
  exports.nicknameCheck = async function (nickname) {
    try{
      const connection = await pool.getConnection(async (conn) => conn);
  
      const nicknameCheckResult = await userDao.selectUserNickname(connection, nickname);
      connection.release();
    
      return(nicknameCheckResult)

    } catch (err) {
       console.log(err);
    }

    };