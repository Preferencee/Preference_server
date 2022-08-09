// 취향 테스트 - 선호하는 향기
async function preference(connection, notes, brand, gender) {
    
    const preferenceQuery = `
                    SELECT name, description, hashtag, brand, image
                    FROM Product
                    WHERE notes LIKE concat('%', ?, '%')
                    AND brand LIKE concat('%',?, '%')
                    AND gender = ?;
                    `;
        
    const preferenceRow = await connection.query(preferenceQuery, [notes, brand, gender]);

    return preferenceRow[0];
}

module.exports = {
    preference
}