// Last updated: 4/29/2026, 10:28:26 AM
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

// 3:00:00s
// O(n) time | O(n) space
var accountsMerge = function(accounts) {
    const emailHash = {};
    for(let i = 0; i < accounts.length; i++) {
        const [name, emails] = splitItems(accounts[i]);
        for(const email of emails) {
            if(emailHash[email]) {
                emailHash[email].push(i);
            } else {
                emailHash[email] = [ i ];
            }
        }
    }
    console.log(emailHash);
    
    const visitedEmail = {};
    const visitedIdx = {};
    const output = [];
    for(let i = 0; i < accounts.length; i++) {
        console.log(`idx=${i}`);
        if(visitedIdx[i]) {
            console.log(`Already visited: ${i}`);
            continue;
        }
        visitedIdx[i] = true;
        
        const emailSet = [];
        
        const [name, emails] = splitItems(accounts[i]);
        
        while(emails.length !== 0) {
            const email = emails.shift();
            
            if(visitedEmail[email]) {
                continue;
            } else {
                visitedEmail[email] = true;
            }
            emailSet.push(email);
            
            const idxList = emailHash[email];
            for(const idx of idxList) {
                if(visitedIdx[idx]) {
                    continue;
                } else {
                    visitedIdx[idx] = true;
                    const [ ,additionalEmails ] = splitItems(accounts[idx]);
                    emails.push(...additionalEmails);
                }
            }
        }
        const sortedEmails = emailSet.sort();
        output.push([name, ...sortedEmails]);
        console.log([name, ...sortedEmails]);
    }
    return output;
}
    
function splitItems(items) {
    let name = '';
    let emails = [];
    for(let i = 0; i < items.length; i++) {
        const item = items[i];
        if(i === 0) {
            name = item;
        } else {
            emails.push(item);
        }
    }
    return [name, emails];
}