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
    
    // 해시태그 검색-인스타ver
    async function selectHashtagProduct(connection, hashtag) {
      const selectHashtagInfoQuery = `
                        SELECT *
                        FROM Product
                        WHERE hashtag LIKE concat('%',?,'%');
                      `;
      const selectHashtagInfoRow = await connection.query(selectHashtagInfoQuery, hashtag);
      return selectHashtagInfoRow[0];
      }

module.exports = {
    selectFilterProduct,
    selectSimilarProduct,
    selectHashtagProduct
}