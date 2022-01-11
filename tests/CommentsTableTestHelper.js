/* istanbul ignore file */
const pool = require('../src/Infrastructures/database/postgres/pool');

const CommentsTableHelper = {
  async addComment({
    id = 'comment-69', content = 'comment sebuah thread', owner = 'user-69', thread = 'thread-69', createdAt = '2022-01-11T05:49:50.012Z', updatedAt = '2022-01-11T05:49:50.012Z', isDelete = false,
  }) {
    const query = {
      text: 'INSERT INTO comments VALUES($1, $2, $3, $4, $5, $6, $7)',
      values: [id, content, owner, thread, createdAt, updatedAt, isDelete],
    };

    await pool.query(query);
  },
  async findCommentsById(id) {
    const query = {
      text: 'SELECT * FROM comments WHERE id = $1',
      values: [id],
    };
    const result = await pool.query(query);
    return result.rows;
  },
  async cleanTable() {
    await pool.query('DELETE FROM comments WHERE 1=1');
  },
};

module.exports = CommentsTableHelper;
