// Last updated: 4/29/2026, 10:26:23 AM
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */

var intervalIntersection = function(A, B) {
    let i = 0, j = 0;
    const output = [];
    while(i < A.length && j < B.length) {
        const [loA, hiA] = A[i];
        const [loB, hiB] = B[j];
        
        const lo = Math.max(loA, loB);
        const hi = Math.min(hiA, hiB);
        
        if(lo <= hi) {
            output.push([lo, hi]);
        }
        
        if(hiA < hiB) {
            i++;
        } else {
            j++;
        }
    }
    console.log(output);
    return output;
}

/*
// 70:00s
// O(n) time | O(1) space
var intervalIntersection = function(A, B) {
    const lenA = A.length;
    const lenB = B.length;
    
    let i = 0, j = 0;
    const output = [];
    while(i < lenA && j < lenB) {
        const intA = A[i];
        const [loA, hiA] = intA;
        
        const intB = B[j];
        const [loB, hiB] = intB;
        
        if(loB <= loA) {
            if(hiB < loA) {
                j++;
            } else if(hiB === loA) {
                output.push([hiB, loA]);
                j++;
            } else {
                if(hiB <= hiA) {
                    output.push([loA, hiB]);
                    j++;
                } else {
                    output.push([loA, hiA]);
                    i++;
                }
            }
        } else if(loA < loB) {
            if(loB < hiA) {
                if(hiB <= hiA) {
                    output.push([loB, hiB]);
                    j++;
                } else {
                    output.push([loB, hiA]);
                    i++;
                }    
            } else if(loB === hiA) {
                output.push([loB, hiA]);
                i++;
            } else {
                i++;
            }
        }
    }
    console.log(output);
    return output;
};
*/