// Last updated: 4/29/2026, 10:31:40 AM
/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
const INF = 2147483647;
var wallsAndGates = function(rooms) {
    let gates = [];
    for (let row = 0; row < rooms.length; row++) {
        for (let col = 0; col < rooms[0].length; col++) {
            if (rooms[row][col] === 0) {
                gates.push({
                    row: row,
                    col: col
                })
            }
        }
    }    
    resolve(rooms, gates);
}

function resolve(rooms, gates) {
    while (gates.length > 0) {
        let gate = gates.pop();       
        let row = gate.row;
        let col = gate.col;

        // go up
        if (row > 0 && rooms[row - 1][col] > 0) {
            if (rooms[row][col] + 1 < rooms[row - 1][col]) {
                rooms[row - 1][col] = rooms[row][col] + 1;
                gates.push({
                    row: row - 1,
                    col: col
                });
            }
        }

        // go down
        if (row < rooms.length - 1 && rooms[row + 1][col] > 0) {
            if (rooms[row][col] + 1 < rooms[row + 1][col]) {
                rooms[row + 1][col] = rooms[row][col] + 1;
                gates.push({
                    row: row + 1,
                    col: col
                });
            }
        }

        // go left
        if (col > 0 && rooms[row][col - 1] > 0) {
            if (rooms[row][col] + 1 < rooms[row][col - 1]) {
                rooms[row][col - 1] = rooms[row][col] + 1;
                gates.push({
                    row: row,
                    col: col - 1
                });
            }

        }

        // go right
        if (col < rooms[0].length - 1 && rooms[row][col + 1] > 0) {
            if (rooms[row][col] + 1 < rooms[row][col + 1]) {
                rooms[row][col + 1] = rooms[row][col] + 1;
                gates.push({
                    row: row,
                    col: col + 1
                });
            }
        }

    }
}

/*
var wallsAndGates = function(rooms) {
    if(!rooms || rooms.length === 0) {
        return [];
    }
    // console.log(rooms);
    const INF = 2147483647;
    const gates = [];
    const maxRow = rooms.length;
    const maxCol = rooms[0].length;
    for(let i = 0; i < maxRow; i++) {
        for(let j = 0; j < maxCol; j++) {
            const cell = rooms[i][j];
            if(cell === 0) {
                gates.push([i, j]);
            }
        }
    }
    console.log(rooms);
    for(const gate of gates) {
        // console.log(`gates: ${gate}`);
        const visited = createNewVisited(maxRow, maxCol);
        // console.log(visited);
        fillRooms(gate, rooms, 0, visited, maxRow, maxCol);
        console.log(rooms);
    }
    return rooms;
};

function createNewVisited(maxRow, maxCol) {
    const visited = [];
    for(let i = 0; i < maxRow; i++) {
        const row = [];
        for(let j = 0; j < maxCol; j++) {
            row.push(false);
        }
        visited.push(row);
    }
    return visited;
}

function fillRooms(coordinate, rooms, distance, visited, maxRow, maxCol) {
    console.log(`coordinate: ${coordinate}`);
    const [row, col] = coordinate;
    if(visited[row][col]) {
        return;
    }
    visited[row][col] = true;
    const cell = rooms[row][col];
    if(cell === -1) {
        return;
    }
    if(cell === 0 && distance !== 0) {
        return;
    }
    
    if(distance < cell) {
        rooms[row][col] = distance;
    }
    
    if(row - 1 >= 0) {
        fillRooms([row-1, col], rooms, distance + 1, visited, maxRow, maxCol);
    }
    if(row + 1 < maxRow) {
        fillRooms([row+1, col], rooms, distance + 1, visited, maxRow, maxCol);
    }
    if(col - 1 >= 0) {
        fillRooms([row, col-1], rooms, distance + 1, visited, maxRow, maxCol);
    }
    if(col + 1 < maxCol) {
        fillRooms([row, col+1], rooms, distance + 1, visited, maxRow, maxCol);
    }
}
*/