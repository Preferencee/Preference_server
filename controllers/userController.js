const userProvider = require("../src/app/User/userProvider");
const userService = require("../src/app/User/userService");
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
 * API Name : 필터링 검색 API
 * [GET] /users/products/filter
 */

// 선호 향 최대 3개 선택 가능
// 브랜드 최대 3개 선택 가능
// 성별 여성, 남성, 남녀공용 중 택 1

 exports.getFilterSearch = async (req, res) => {

    /**
     * Query String: brand1, brand2, brand3, priceLow, priceHigh, notes, gender
     */
    const brand1 = req.query.brand1;
    let brand2 = req.query.brand2;
    let brand3 = req.query.brand3;

    if(!brand2)
        brand2 = brand1;
    if(!brand3)
        brand3 = brand1;

    let priceLow = req.query.priceLow;
    let priceHigh= req.query.priceHigh;

    if(!priceLow)
        priceLow = 0;
    if(!priceHigh)
        priceHigh = 2147483647;

    const notes1 = req.query.notes1;
    let notes2 = req.query.notes2;
    let notes3 = req.query.notes3;

    if(!notes2)
        notes2 = notes1;
    if(!notes3)
        notes3 = notes1;

    const gender = req.query.gender;
    
    const filterResponse = await userProvider.filterProduct(
        brand1, 
        brand2,
        brand3,
        priceLow, 
        priceHigh,
        notes1,
        notes2,
        notes3,
        gender
    );

    return res.send(filterResponse);
}; 

/**
 * API No. 4
 * API Name : 유사 검색 API
 * [GET] /users/products/similar
 */

 exports.getSimilarSearch = async function (req, res) {
    /**
     * Query String: name
     */
    const searchword = req.query.name;
    const similarResponse = await userProvider.similarProduct(searchword);
    return res.send(similarResponse);
 };