# Last updated: 4/29/2026, 10:24:33 AM
class Solution:
    def tictactoe(self, moves: List[List[int]]) -> str:
        m = [[0]*3 for i in range(3)]
        print(m)
        player = 0;
        
        def check():
            for i in range(0, 3):
                row_sum = m[i][0] + m[i][1] + m[i][2]
                col_sum = m[0][i] + m[1][i] + m[2][i]
                if abs(row_sum) == 3:
                    return row_sum
                if abs(col_sum) == 3:
                    return col_sum
            dia_sum1 = 0
            dia_sum2 = 0
            for i in range(0, 3):
                dia_sum1 += m[i][i]
                dia_sum2 += m[2-i][i]
            if abs(dia_sum1) == 3:
                return dia_sum1
            if abs(dia_sum2) == 3:
                return dia_sum2
            return 0
        
        for idx in range(0, len(moves)):
            i, j = moves[idx]
            print(f"({i}, {j})")
            if player == 0:
                m[i][j] = 1
            else:
                m[i][j] = -1
            print(m)
            if(idx >= 2):
                res = check()
                print(f"res value: {res}")
                if res == 3:
                    return "A"
                elif res == -3:
                    return "B"
            player = (player + 1) % 2
            
        print(m)
        if len(moves) < 9:
            return "Pending"
        else:
            return "Draw"
        