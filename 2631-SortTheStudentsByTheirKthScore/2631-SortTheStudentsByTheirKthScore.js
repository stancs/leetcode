// Last updated: 4/29/2026, 10:19:57 AM
/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
    const m = score.length;
    const n = score[0].length;
    const data = [];
    for(let i = 0; i < m; i++) {
        const studentScores = [];
        for(let j = 0; j < n; j++) {
            studentScores.push(score[i][j]);
        }
        data.push(studentScores);
    }
    const sortedData = data.sort((a, b) => b[k] - a[k]);
    console.log(sortedData);
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            score[i][j] = data[i][j];
        }
    }
    return score;
};