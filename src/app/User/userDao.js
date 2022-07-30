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

// 필터링 검색
async function selectFilterProduct(connection, brand1, brand2, brand3, priceLow, priceHigh, notes1, notes2, notes3, gender) {
const selectFilterInfoQuery = `
                  SELECT *
                  FROM Product
                  WHERE ((brand LIKE concat('%', ?, '%')
                  OR brand LIKE concat('%',?,'%')
                  OR brand LIKE concat('%',?,'%'))
                  AND price BETWEEN ? AND ?
                  AND (notes LIKE concat('%',?, '%')
                  OR notes LIKE concat('%',?,'%')
                  OR notes LIKE concat('%',?,'%'))
                  AND gender = ?);
                `;
const selectFilterInfoRow = await connection.query(selectFilterInfoQuery, [brand1, brand2, brand3, priceLow, priceHigh, notes1, notes2, notes3, gender]);
return selectFilterInfoRow[0];
}

// 유사 검색
async function selectSimilarProduct(connection, name) {

const selectSimilarInfoQuery = `
                SELECT *
                FROM Product
                WHERE name LIKE concat('%',?,'%');
                `;

const [selectSimilarInfoRow] = await connection.query(
  selectSimilarInfoQuery, 
  name
);

return selectSimilarInfoRow;
}

module.exports = {
selectUserEmail,
selectUserNickname,
selectFilterProduct,
selectSimilarProduct
};