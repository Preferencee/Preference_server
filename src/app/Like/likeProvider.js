const pool = require('../../../config/dbconfig');
const likeDao = require("../Like/likeDao");
const baseResponse = require("../../../config/baseResponseStatus");
const {errResponse} = require("../../../config/response");

// Provider: Read 비즈니스 로직 처리

// 게시물 좋아요
exports.postLike = async function (userId, postId) {
    try{
        const connection = await pool.getConnection(async (conn) => conn);
        const postLikeResult = await likeDao.postLike(connection, userId, postId);
        await likeDao.postLikeCount(connection, postId);
        connection.release();
    
        return(postLikeResult)

    } catch (err) {
        console.log(err);
      return errResponse(baseResponse.DB_ERROR);
    }
};

// 향수 좋아요
exports.productLike = async function (userId, productId) {
    try{
        const connection = await pool.getConnection(async (conn) => conn);
  
        const productLikeResult = await likeDao.productLike(connection, userId, productId);
        await likeDao.productLikeCount(connection, productId);
        connection.release();
    
        return(productLikeResult)

    } catch (err) {
        console.log(err);
      return errResponse(baseResponse.DB_ERROR);
    }
};

// 게시물 좋아요 삭제
exports.postLikeDel = async function (userId, postId) {
    try{
        const connection = await pool.getConnection(async (conn) => conn);
        const postLikeResult = await likeDao.postLikeDel(connection, userId, postId);
        await likeDao.postLikeCountMinus(connection, postId);
        connection.release();
    
        return(postLikeResult)

    } catch (err) {
        console.log(err);
      return errResponse(baseResponse.DB_ERROR);
    }
};

// 향수 좋아요 삭제
exports.productLikeDel = async function (userId, productId) {
    try{
        const connection = await pool.getConnection(async (conn) => conn);
  
        const productLikeResult = await likeDao.productLikeDel(connection, userId, productId);
        await likeDao.productLikeCountMinus(connection, productId);
        connection.release();
    
        return(productLikeResult)

    } catch (err) {
        console.log(err);
      return errResponse(baseResponse.DB_ERROR);
    }
};