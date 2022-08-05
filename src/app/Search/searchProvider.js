const pool = require('../../../config/dbconfig');
const searchDao = require("../Search/searchDao");
const baseResponse = require("../../../config/baseResponseStatus");
const {errResponse} = require("../../../config/response");

// Provider: Read 비즈니스 로직 처리

// 필터링 검색
exports.filterProduct = async function (brand1, brand2, brand3, priceLow, priceHigh, notes1, notes2, notes3, gender) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        const filterResult = await searchDao.selectFilterProduct(connection, brand1, brand2, brand3, priceLow, priceHigh, notes1, notes2, notes3, gender);
      
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
        const similarResult = await searchDao.selectSimilarProduct(connection, searchword);
        
        connection.release();
  
        return similarResult;
  
  
    } catch (err) {
        console.log(err);
    }
  };

  // 해시태그 검색-인스타ver
  exports.hashtagProduct = async function (hashtag) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        const hashtagResult = await searchDao.selectHashtagProduct(connection, hashtag);
      
        connection.release();
  
        return hashtagResult;
    } catch (err) {
        console.log(err);
    }
  };