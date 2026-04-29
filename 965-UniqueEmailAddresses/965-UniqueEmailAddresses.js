// Last updated: 4/29/2026, 10:26:47 AM
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const makeUnique = email => {
        const [localName, domainName] = email.split('@');
        console.log(`localName: ${localName}, domainName: ${domainName}`);
        const [filter1] = localName.split('+');
        console.log(`filter1: ${filter1}`);
        // const filter2 = filter1.replace('.', '');
        const filter2 = filter1.split('').filter(ch => ch !== '.').join('');
        console.log(`filter2: ${filter2}`);
        const uniqueEmail = filter2 + '@' + domainName;
        console.log(`unique: ${uniqueEmail}`);
        return uniqueEmail;
    }
    const set = new Set([...emails.map(email => makeUnique(email))]);
    return set.size;
};