// 게시글 좋아요(postLike)
async function postLike(connection, userId, postId) {
    const postLikeQuery = `
    INSERT INTO postLike(userId, postId) VALUES(?, ?);
    `;
    const [postLikeRow] = await connection.query(postLikeQuery, [userId, postId]);
    return postLikeRow[0];
 }

// 향수 좋아요(productLike)
async function productLike(connection, userId, productId) {
    const productLikeQuery = `
    INSERT INTO productLike(userId, productId) VALUES(?, ?);
    `;
    const [productLikeRow] = await connection.query(productLikeQuery, [userId, productId]);
    return productLikeRow[0];
  }

// 게시글 좋아요(postLike) 삭제
async function postLikeDel(connection, userId, postId) {
    const postLikeQuery = `
    DELETE FROM postLike 
    WHERE userId = ?
    AND postId = ?
    `;
    const [postLikeRow] = await connection.query(postLikeQuery, [userId, postId]);
    return postLikeRow[0];
 }

// 향수 좋아요(productLike) 삭제
async function productLikeDel(connection, userId, productId) {
    const productLikeQuery = `
    DELETE From productLike
    WHERE userId = ?
    AND productId = ?;
    `;
    const [productLikeRow] = await connection.query(productLikeQuery, [userId, productId]);
    return productLikeRow[0];
  }

// 게시글 좋아요 개수 +1
async function postLikeCountPlus(connection, postId) {
    const productLikeQuery = `
    UPDATE Post
    SET likeCount = likeCount+1
    WHERE postId = ?;
    `;
    const [productLikeRow] = await connection.query(productLikeQuery, postId);
    return productLikeRow[0];
  }

// 향수 좋아요 개수 +1
async function productLikeCountPlus(connection, productId) {
    const productLikeQuery = `
    UPDATE Product
    SET likeCount = likeCount+1
    WHERE productId = ?;
    `;
    const [productLikeRow] = await connection.query(productLikeQuery, productId);
    return productLikeRow[0];
  }

  // 게시글 좋아요 개수 -1
async function postLikeCountMinus(connection, postId) {
    const productLikeQuery = `
    UPDATE Post
    SET likeCount = likeCount-1
    WHERE postId = ?;
    `;
    const [productLikeRow] = await connection.query(productLikeQuery, postId);
    return productLikeRow[0];
  }

// 향수 좋아요 개수 -1
async function productLikeCountMinus(connection, productId) {
    const productLikeQuery = `
    UPDATE Product
    SET likeCount = likeCount-1
    WHERE productId = ?;
    `;
    const [productLikeRow] = await connection.query(productLikeQuery, productId);
    return productLikeRow[0];
  }

module.exports = {
    postLike,
    productLike,
    postLikeDel,
    productLikeDel,
    postLikeCountPlus,
    productLikeCountPlus,
    postLikeCountMinus,
    productLikeCountMinus,
}