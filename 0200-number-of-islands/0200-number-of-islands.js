/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let m = grid.length, n=grid[0].length, islands=0;
    let visit = new Array(m).fill(0).map(() => new Array(n).fill(0));
    let bfs = (i,j) => {
        let queue = [];
        queue.push([i,j]);
        visit[i][j] = 1;
        while(queue.length) {
            let x = queue.shift();
            let dir = [[0,-1], [-1,0], [1,0], [0,1]];
            for(let val of dir) {
                if(
                    val[0]+x[0]>=0 && val[0]+x[0]<m && 
                    val[1]+x[1]>=0 && val[1]+x[1]<n &&
                    !visit[val[0]+x[0]][val[1]+x[1]] &&
                    grid[val[0]+x[0]][val[1]+x[1]] == "1"
                ) {
                    visit[val[0]+x[0]][val[1]+x[1]] = 1;
                    queue.push([val[0]+x[0], val[1]+x[1]]);
                }
            }
        }
    }
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(grid[i][j] == "1" && !visit[i][j]) {
                bfs(i,j);
                islands++;
            }
        }
    }
    return islands;
};