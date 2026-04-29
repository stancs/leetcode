// Last updated: 4/29/2026, 10:34:03 AM
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  var dp = Array(s.length);
  var map = {};
  var res = [];

  for (var i = 0; i < wordDict.length; i++) {
    map[wordDict[i]] = true;
  }

  return find(s, map, dp, 0);
};

var find = function (s, map, dp, index) {
  if (dp[index]) return dp[index];

  var str = '';
  var tmp = null;
  var len = s.length;

  dp[index] = [];

  for (var i = index; i < len; i++) {
    str = s.substring(index, i + 1);
    if (!map[str]) continue;
    if (i === len - 1) {
      dp[index].push(str);
      break;
    }
    tmp = find(s, map, dp, i + 1);
    for (var j = 0; j < tmp.length; j++) {
      dp[index].push(str + ' ' + tmp[j]);
    }
  }

  return dp[index];
};
// var wordBreak = function(s, wordDict) {
//     const hash = {};
//     let maxLen = 0;
//     for(const word of wordDict) {
//         if(word.length > maxLen) {
//             maxLen = word.length;
//         }
//         hash[word] = true;
//     }
//     const output = [];
//     wordBreakHelper('', s, maxLen, hash, output);
//     return output;
// };

// function wordBreakHelper(currStr, remainingStr, maxLen, hash, output) {
//     if(remainingStr.length === 0) {
//         output.push(currStr);
//         return;
//     }
//     for(let i = 1; i <= Math.min(remainingStr.length, maxLen); i++) {
//         const candidate = remainingStr.slice(0, i);
//         if(hash[candidate]) {
//             let newCurrStr;
//             if(currStr.length !== 0) {
//                 newCurrStr = currStr + ' ' + candidate;
//             } else {
//                 newCurrStr = candidate;
//             }
//             const newRemainingStr = remainingStr.slice(i);
//             wordBreakHelper(newCurrStr, newRemainingStr, maxLen, hash, output);
//         }
//     }
// }