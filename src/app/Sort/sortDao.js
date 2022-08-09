// 게시글-좋아요순 정렬
async function rankPostsByLikes(connection) {
    
    const rankPostByLikesQuery = `
                    SELECT category, title, likeCount
                    FROM Post as P
                    ORDER BY P.likeCount DESC;
                    `;
        
    const [rankPostByLikesRow] = await connection.query(
        rankPostByLikesQuery
    );
        
    return rankPostByLikesRow;
}
        
// 향수-좋아요순 정렬
async function rankProductsByLikes(connection) {
    
    const rankProductByLikesQuery = `
                    SELECT name, hashtag, likeCount
                    FROM Product as P
                    ORDER BY P.likeCount DESC;
                    `;
        
    const [rankProductByLikesRow] = await connection.query(
        rankProductByLikesQuery
    );
        
    return rankProductByLikesRow;
}

// 향수 최신순 정렬
async function sortProductsByLatest(connection) {
    
    const sortProductsByLatestQuery = `
                    SELECT name, hashtag, description, image
                    FROM Product as P
                    ORDER BY P.productId DESC;
                    `;
        
    const [sortProductsByLatestRow] = await connection.query(
        sortProductsByLatestQuery
    );
        
    return sortProductsByLatestRow;
}

// 향수 랭킹순 정렬
async function sortProductsByLikes(connection) {
    
    const sortProductsByLikesQuery = `
                    SELECT name, hashtag, description, image    
                    FROM Product as P
                    ORDER BY P.likeCount DESC;
                    `;
        
    const [sortProductsByLikesRow] = await connection.query(
        sortProductsByLikesQuery
    );
        
    return sortProductsByLikesRow;
}

// 향수 향별 정렬
async function sortProductsByNotes(connection, productNotes) {
    
    const sortProductsByNotesQuery = `
                    SELECT name, hashtag, description, image
                    FROM Product
                    WHERE notes LIKE concat('%',?,'%');
                    `;
        
    const sortProductsByNotesRow = await connection.query(
        sortProductsByNotesQuery, productNotes
    );
        
    return sortProductsByNotesRow[0];
}

// 게시글 리뷰순 정렬
async function sortPostsByreviews(connection) {
    
    const sortPostsByreviewsQuery = `
                    SELECT category, title, content, likeCount, created_at
                    FROM Post as P
                    ORDER BY P.reviewCount DESC;
                    `;
        
    const sortPostsByreviewsRow = await connection.query(
        sortPostsByreviewsQuery
    );
        
    return sortPostsByreviewsRow[0];
}

// 게시글 최신순 정렬
async function sortPostsByLatest(connection) {
    
    const sortPostsByLatestQuery = `
                    SELECT category, title, content, likeCount, created_at
                    FROM Post as P
                    ORDER BY P.postId DESC;
                    `;
        
    const sortPostsByLatestRow = await connection.query(
        sortPostsByLatestQuery
    );
        
    return sortPostsByLatestRow[0];
}

// 게시글 랭킹순 정렬
async function sortPostsByLikes(connection) {
    
    const sortPostsByLikesQuery = `
                    SELECT category, title, content, likeCount, created_at
                    FROM Post as P
                    ORDER BY P.likeCount DESC;
                    `;
        
    const sortPostsByLikesRow = await connection.query(
        sortPostsByLikesQuery
    );
        
    return sortPostsByLikesRow[0];
}

module.exports = {
    rankPostsByLikes,
    rankProductsByLikes,
    sortProductsByLatest,
    sortProductsByLikes,
    sortProductsByNotes,
    sortPostsByreviews,
    sortPostsByLatest,
    sortPostsByLikes
}