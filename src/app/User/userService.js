const userDao = require("../User/userDao");
const pool = require('../../../config/dbconfig');
const baseResponse = require("../../../config/baseResponseStatus");
const {errResponse} = require("../../../config/response");
const {response} = require("../../../config/response");

/**
 *  Service: Create, Update, Delete 비즈니스 로직 처리

// 회원가입
exports.createUser = async function (email, password, birth, gender, nickname, notes) {
    try {
        const userInfo = [email, password, birth, gender, nickname, notes];

        const connection = await pool.getConnection(async (conn) => conn);

        const createResult = await userDao.createUserInfo(connection, userInfo);
        console.log(`추가된 회원 : ${createResult[0].insertId}`)

        connection.release();
        return response(baseResponse.SUCCESS);

    } catch (err) {
        console.log(err);
    }
};
*/ 