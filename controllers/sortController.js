const sortProvider = require("../src/app/Sort/sortProvider");
const baseResponse = require("../config/baseResponseStatus");
const {errResponse} = require("../config/response");

 /**
 * API No. 1
 * API Name : 랭킹- Hot 게시글
 * [GET] /sort/hotPost
 */

  exports.getHotPost = async function (req, res) {
    const postLikeResponse = await sortProvider.rankPostsByLikes();
    return res.send(postLikeResponse);
 };

/**
 * API No. 2
 * API Name : 랭킹- 향수 실시간 랭킹
 * [GET] /sort/hotPerfume
 */

   exports.getHotPerfume = async function (req, res) {
    const productLikeResponse = await sortProvider.rankProductsByLikes();
    return res.send(productLikeResponse);
 };

/**
 * API No. 3
 * API Name : 향수 최신순 정렬
 * [GET] /sort/latestPerfume
 */

   exports.getLatestPerfume = async function (req, res) {
    const productLatestResponse = await sortProvider.sortProductsByLatest();
    return res.send(productLatestResponse);
 };

/**
 * API No. 4
 * API Name : 향수 랭킹순 정렬
 * [GET] /sort/likePerfume
 */

   exports.getLikePerfume = async function (req, res) {
    const productLikeResponse = await sortProvider.sortProductsByLikes();
    return res.send(productLikeResponse);
 };

/**
 * API No. 5
 * API Name : 향수 향별 정렬
 * [GET] /sorts/scentPerfume
 */

   exports.getScentPerfume = async function (req, res) {
    /**
     * Query String: notes
     */
    const productNotes = req.query.notes;
    const productNotesResponse = await sortProvider.sortProductsByNotes(productNotes);
    return res.send(productNotesResponse);
 };

/**
 * API No. 6
 * API Name : 게시글 리뷰순 정렬
 * [GET] /sorts/reviewPost
 */

    exports.getReviewPost = async function (req, res) {
      const postReviewsResponse = await sortProvider.sortPostsByReviews();
      return res.send(postReviewsResponse);
   };

/**
 * API No. 7
 * API Name : 게시글 최신순 정렬
 * [GET] /sorts/latestPost
 */

 exports.getLatestPost = async function (req, res) {
  const postLatestResponse = await sortProvider.sortPostsByLatest();
  return res.send(postLatestResponse);
};

/**
 * API No. 8
 * API Name : 게시글 랭킹순 정렬
 * [GET] /sorts/likePost
 */

 exports.getLikePost = async function (req, res) {
  const postLikesResponse = await sortProvider.sortPostsByLikes();
  return res.send(postLikesResponse);
};