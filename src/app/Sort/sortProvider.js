const pool = require('../../../config/dbconfig');
const sortDao = require("./sortDao");
const baseResponse = require("../../../config/baseResponseStatus");
const {errResponse} = require("../../../config/response");

// Provider: Read 비즈니스 로직 처리

// 게시글 좋아요 순 정렬
exports.rankPostsByLikes = async function () {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        const postLikeResult = await sortDao.rankPostsByLikes(connection);
      
        connection.release();
  
        return postLikeResult;
    } catch (err) {
        console.log(err);
    }
  };

// 향수 좋아요 순 정렬
exports.rankProductsByLikes = async function () {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        const productsLikeResult = await sortDao.rankProductsByLikes(connection);
      
        connection.release();
  
        return productsLikeResult;
    } catch (err) {
        console.log(err);
    }
  };

//  향수 최신순 정렬
exports.sortProductsByLatest = async function () {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        const productsLatestResult = await sortDao.sortProductsByLatest(connection);
      
        connection.release();
  
        return productsLatestResult;
    } catch (err) {
        console.log(err);
    }
  };

// 향수 랭킹순 정렬
exports.sortProductsByLikes = async function () {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        const productsLikesResult = await sortDao.sortProductsByLikes(connection);
      
        connection.release();
  
        return productsLikesResult;
    } catch (err) {
        console.log(err);
    }
  };

// 향수 향별 정렬
exports.sortProductsByNotes = async function (productNotes) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        const productNotesResult = await sortDao.sortProductsByNotes(connection, productNotes);
      
        connection.release();
  
        return productNotesResult;
    } catch (err) {
        console.log(err);
    }
  };

// 게시글 리뷰순 정렬
exports.sortPostsByReviews = async function () {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        const postReviewsResult = await sortDao.sortPostsByreviews(connection);
      
        connection.release();
  
        return postReviewsResult;
    } catch (err) {
        console.log(err);
    }
  };

// 게시글 최신순 정렬
exports.sortPostsByLatest = async function () {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        const postLatestResult = await sortDao.sortPostsByLatest(connection);
      
        connection.release();
  
        return postLatestResult;
    } catch (err) {
        console.log(err);
    }
  };

// 게시글 랭킹순 정렬
exports.sortPostsByLikes = async function () {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        const postLikesResult = await sortDao.sortPostsByLikes(connection);
      
        connection.release();
  
        return postLikesResult;
    } catch (err) {
        console.log(err);
    }
  };