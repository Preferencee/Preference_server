const postProvider = require("../src/app/Post/postProvider");
const baseResponse = require("../config/baseResponseStatus");
const {errResponse} = require("../config/response");

/**
 * API No. 1
 * API Name : 게시글 등록 API
 * [POST] /post/
 */

 exports.postPostUpload = async function (req, res) {

    /**
     * Query String: userId, category, title, content, image, link
     */
    
    const userId = req.query.userId;
    const category = req.query.category;
    const title = req.query.title;
    const content = req.query.content;
    const image = req.query.image;
    const link = req.query.link;


    const postResponse = await postProvider.postUpload(userId, category, title, content, image, link);

    return res.send(postResponse);
 };