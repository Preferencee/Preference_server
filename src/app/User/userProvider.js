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

  // 비밀번호 찾기
  exports.findPassword = async function (email) {
    try{
      const connection = await pool.getConnection(async (conn) => conn);
      const findPasswordResult = await userDao.selectUserPassword(connection, email);
      connection.release();
    
      return(findPasswordResult)

    } catch (err) {
       console.log(err);
    }
};

// 회원가입
exports.userJoin = async function (email, password, nickname, birth, gender, notes) {
  try{
    const connection = await pool.getConnection(async (conn) => conn);
    const userJoinResult = await userDao.userSave(connection, email, password, nickname, birth, gender, notes);
    connection.release();
  
    return(userJoinResult)

  } catch (err) {
     console.log(err);
  }
};

// 로그인 
exports.userLogin = async function (email, password) {
  try{
    const connection = await pool.getConnection(async (conn) => conn);
    const userLoginResult = await userDao.userLogin(connection, email, password);
    
    connection.release();
    return(userLoginResult)
  
  } catch (err) {
     console.log(err);
  }
};