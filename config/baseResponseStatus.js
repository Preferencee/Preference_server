module.exports = {
    // Success
    SUCCESS : { "isSuccess": true, "code": 1000, "message":"성공" },

    //Request error
    SIGNUP_EMAIL_EMPTY : { "isSuccess": false, "code": 2001, "message":"이메일을 입력해주세요" },
    SIGNUP_EMAIL_ERROR_TYPE : { "isSuccess": false, "code": 2002, "message":"이메일을 형식을 정확하게 입력해주세요." },
    SIGNUP_PASSWORD_EMPTY : { "isSuccess": false, "code": 2003, "message": "비밀번호를 입력 해주세요." },
    SIGNUP_PASSWORD_LENGTH : { "isSuccess": false, "code": 2004, "message":"비밀번호는 6~20자리를 입력해주세요." },
    SIGNUP_NICKNAME_EMPTY : { "isSuccess": false, "code": 2005, "message":"닉네임을 입력 해주세요." },
    SIGNUP_NICKNAME_LENGTH : { "isSuccess": false,"code": 2006,"message":"닉네임은 최대 20자리를 입력해주세요." },
    SIGNUP_BIRTH_EMPTY : {"isSuccess": false, "code": 2007, "message":"생일을 입력 해주세요."},
    SIGNUP_BIRTH_LENGTH : {"isSuccess": false, "code": 2008, "message":"생일 형식을 정확히 입력해주세요."},
    SIGNUP_GENDER_EMPTY : {"isSuccess": false, "code": 2009, "message":"성별을 입력 해주세요."},


    // Response error
    SIGNUP_REDUNDANT_EMAIL : { "isSuccess": false, "code": 3001, "message":"중복된 이메일입니다." },
    SIGNUP_REDUNDANT_NICKNAME : { "isSuccess": false, "code": 3002, "message":"중복된 닉네임입니다." },

    //Connection, Transaction 등의 서버 오류
    DB_ERROR : { "isSuccess": false, "code": 4000, "message": "데이터 베이스 에러"}
}