// Last updated: 4/29/2026, 10:30:18 AM
/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    const hash = {};
    const visited = {};
    for(const valid of bank) {
        hash[valid] = true;
    }
    console.log(hash);
    const chList = ['A', 'C', 'G', 'T'];
    let queue = [startGene];
    let steps = 0;
    
    const nextMutatedGene = (gene, steps) => {
        const nextQueue = [];
        for(let i = 0; i < gene.length; i++) {
            const ch = gene[i];
            for(let j = 0; j < chList.length; j++) {
                if(chList[j] !== ch) {
                    const candidate = `${gene.slice(0, i)}${chList[j]}${gene.slice(i+1)}`;
                    // console.log(`candidate: ${candidate}`);
                    if(hash[candidate] === true) {
                        nextQueue.push(candidate);
                        hash[candidate] = false;
                    }    
                }
            }
        }
        return nextQueue;
    }
    while(queue.length !== 0) {
        const nextQueue = [];
        steps++;
        console.log(`step: ${steps}`)
        for(const gene of queue) {
            // get next mutated gene
            const list = nextMutatedGene(gene);
            // console.log(`list: ${list}`)
            if(list.length > 0) {
                // check the next mutated gene is included to the bank
                for(const nextGene of list) {
                    if(nextGene === endGene) {
                        return steps;
                    }
                    nextQueue.push(nextGene);
                }    
            }
        }
        queue = nextQueue;
    }
    return -1;
};