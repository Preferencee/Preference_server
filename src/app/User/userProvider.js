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
  
  // 필터링 검색
  exports.filterProduct = async function (brand1, brand2, brand3, priceLow, priceHigh, notes1, notes2, notes3, gender) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        const filterResult = await userDao.selectFilterProduct(connection, brand1, brand2, brand3, priceLow, priceHigh, notes1, notes2, notes3, gender);
      
        connection.release();
  
        return filterResult;
    } catch (err) {
        console.log(err);
    }
  };

// 유사 검색
exports.similarProduct = async function (searchword) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        const similarResult = await userDao.selectSimilarProduct(connection, searchword);
        
        connection.release();
  
        return similarResult;
  
  
    } catch (err) {
        console.log(err);
        // return errResponse(baseResponse.DB_ERROR);
    }
  };