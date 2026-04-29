// Last updated: 4/29/2026, 10:32:12 AM
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let rooms = [];
    intervals.sort((int1, int2) => {
        const [start1, end1] = int1;
        const [start2, end2] = int2;
        return start1 - start2;
    });
    
    for(const interval of intervals) {
        let canAdd = false;
        for(const room of rooms) {
            const res = addInterval(room, interval);
            if(res) {
                canAdd = true;
                break;
            }
        }
        if(!canAdd) {
            rooms.push([ interval ]);
        }
    }
    console.log(rooms);
    return rooms.length;
};

function addInterval(room, interval) {
    for(const existing of room) {
        const [eStart, eEnd] = existing;
        const [nStart, nEnd] = interval;
        
        if(!(nEnd <= eStart || eEnd <= nStart)) {
            return false;
        }
    }
    room.push(interval);
    return true;
}