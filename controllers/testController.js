const testProvider = require("../src/app/Test/testProvider");
const baseResponse = require("../config/baseResponseStatus");
const {errResponse} = require("../config/response");

 /**
 * API No. 1
 * API Name : 취향 테스트
 * [GET] /test/preference
 */

  exports.getPreference = async function (req, res) {
    /**
     * Query String: notes, brand, gender
     */
    const notes = req.query.notes;
    const brand = req.query.brand;
    const gender = req.query.gender;

    const preferenceResponse = await testProvider.preference(notes, brand, gender);
    return res.send(preferenceResponse);
 };
