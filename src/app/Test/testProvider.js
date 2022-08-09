const pool = require('../../../config/dbconfig');
const testDao = require("../Test/testDao");
const baseResponse = require("../../../config/baseResponseStatus");
const {errResponse} = require("../../../config/response");

// Provider: Read 비즈니스 로직 처리

// 취향 테스트
exports.preference = async function (notes ,brand, gender) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        const preferenceResult = await testDao.preference(connection, notes, brand, gender);
      
        connection.release();
  
        return preferenceResult;
    } catch (err) {
        console.log(err);
    }
};