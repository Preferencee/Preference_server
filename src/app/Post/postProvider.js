const pool = require('../../../config/dbconfig');
const postDao = require("../Post/postDao");
const baseResponse = require("../../../config/baseResponseStatus");
const {errResponse} = require("../../../config/response");

// Provider: Read 비즈니스 로직 처리

// 유저 이메일 체크
exports.postUpload = async function (userId, category, title, content, image, link) {
    try{
        const connection = await pool.getConnection(async (conn) => conn);
  
        const postResult = await postDao.postUpload(connection, userId, category, title, content, image, link);
        connection.release();
    
        return(postResult)

    } catch (err) {
        console.log(err);
      return errResponse(baseResponse.DB_ERROR);
    }
};