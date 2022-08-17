const likeProvider = require("../src/app/Like/likeProvider");
const baseResponse = require("../config/baseResponseStatus");
const {errResponse} = require("../config/response");

/**
 * API No. 1
 * API Name : 게시글 좋아요 API
 * [POST] /like/post
 */

 exports.postPostLike = async function (req, res) {

    /**
     * Request Body: postId, userId
     */
    
    const postId = req.body.postId;
    const userId = req.body.userId;

    const postLikeResponse = await likeProvider.postLike(userId, postId);

    return res.send(postLikeResponse);
 };

 /**
 * API No. 2
 * API Name : 향수 좋아요 API
 * [POST] /like/product
 */

  exports.postProductLike = async function (req, res) {

    /**
     * Request Body: productId, userId
     */
    
    const userId = req.body.userId;
    const productId = req.body.productId;


    const productLikeResponse = await likeProvider.productLike(userId, productId);

    return res.send(productLikeResponse);
 };

 /**
 * API No. 3
 * API Name : 게시글 좋아요 삭제 API
 * [POST] /like/postDel
 */

  exports.postPostLikeDel = async function (req, res) {

    /**
     * Request Body: postId, userId
     */
    
    const postId = req.body.postId;
    const userId = req.body.userId;

    const postLikeResponse = await likeProvider.postLikeDel(userId, postId);

    return res.send(postLikeResponse);
 };

 /**
 * API No. 4
 * API Name : 향수 좋아요 삭제 API
 * [POST] /like/productDel
 */

  exports.postProductLikeDel = async function (req, res) {

    /**
     * Request Body: productId, userId
     */
    
    const userId = req.body.userId;
    const productId = req.body.productId;


    const productLikeResponse = await likeProvider.productLikeDel(userId, productId);

    return res.send(productLikeResponse);
 };

 