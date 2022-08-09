const userProvider = require("../src/app/User/userProvider");
const baseResponse = require("../config/baseResponseStatus");
const {errResponse} = require("../config/response");

/**
 * API No. 1
 * API Name : 이메일 중복 체크 (회원가입) API
 * [GET] /users/emailCheck
 */

 exports.getEmailCheck = async function (req, res) {

    /**
     * Query String: email
     */
    const email = req.query.email;

    const emailCheckResponse = await userProvider.emailCheck(email);

    return res.send(emailCheckResponse);
 };

/**
 * API No. 2
 * API Name : 닉네임 중복 체크 (회원가입) API
 * [GET] /users/nicknameCheck
 */
 exports.getNicknameCheck = async (req, res) => {

    /**
     * Query String: nickname
     */
     const nickname = req.query.nickname;

    const nicknameCheckResponse = await userProvider.nicknameCheck(nickname);

    return res.send(nicknameCheckResponse);
 };

 /**
 * API No. 3
 * API Name : 비밀번호 찾기 API
 * [GET] /users/findPassword
 */
  exports.getFindPassword = async (req, res) => {

   /**
    * Query String: email
    */
    const email = req.query.email;

   const findPasswordResponse = await userProvider.findPassword(email);

   return res.send(findPasswordResponse);
};