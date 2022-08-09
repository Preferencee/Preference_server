// 이메일로 회원 조회
  async function selectUserEmail(connection, email) {
    // 중복시 1, 중복되지 않으면 0
    const selectUserEmailQuery = `
        SELECT IF( EXISTS(
        SELECT userId
        FROM User
        WHERE email = ?), "사용 불가능한 이메일입니다.", "사용 가능한 이메일입니다.") as Result;
        `;
  const [emailRows] = await connection.query(selectUserEmailQuery, email);
  return emailRows[0];
}

// 닉네임으로 회원 조회
async function selectUserNickname(connection, nickname) {
    const selectUserNicknameQuery = `
    SELECT IF( EXISTS(
    SELECT userId
    FROM User
    WHERE nickname = ?), "사용 불가능한 닉네임입니다.", "사용 가능한 닉네임입니다.") as Result;
    `;
  const [nicknameRows] = await connection.query(selectUserNicknameQuery, nickname);
  return nicknameRows[0];
}

// 비밀번호 찾기
async function selectUserPassword(connection, email) {
  const selectUserPasswordQuery = `
    SELECT password
    FROM User
    WHERE email = ?;
  `;
const [selectUserPasswordRow] = await connection.query(selectUserPasswordQuery, email);
return selectUserPasswordRow[0];
}

module.exports = {
  selectUserEmail,
  selectUserNickname,
  selectUserPassword
};