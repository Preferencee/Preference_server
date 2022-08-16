// 게시글 작성
async function postUpload(connection, userId, category, title, content, image, link) {
    const postUploadQuery = `
    INSERT INTO Post(userId, category, title, content, image, link) VALUES(?, ?, ?, ?, ?, ?);
    `;
    const [postUploadRow] = await connection.query(postUploadQuery, [userId, category, title, content, image, link]);
    return postUploadRow[0];
  }

module.exports = {
    postUpload
}