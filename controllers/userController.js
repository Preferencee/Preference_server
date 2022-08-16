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

/**
 * API No. 4
 * API Name : 회원가입 API
 * [GET] /users/
 */
 exports.postJoin = async (req, res) => {

   /**
    * Query String: email, password, nickname, birth, gender, notes
    */
    const email = req.query.email;
    const password = req.query.password;
    const nickname = req.query.nickname;
    const birth = req.query.birth;
    const gender = req.query.gender;
    const notes = req.query.notes;
    //const notes2 = req.query.notes2;
    //const notes3 = req.query.notes3;

   const userJoinResponse = await userProvider.userJoin(email, password, nickname, birth, gender, notes);

   return res.send(userJoinResponse);
};

/**
 * API No. 5
 * API Name : 로그인 API
 * [GET] /users/login
 */
 exports.postLogin = async (req, res) => {

   /**
    * Query String: email, password
    */
    const email = req.query.email;
    const password = req.query.password;

   const userLoginResponse = await userProvider.userLogin(email, password);

   return res.send(userLoginResponse);
};