# Last updated: 4/29/2026, 10:21:42 AM
class Solution:
    def decodeCiphertext(self, encodedText: str, rows: int) -> str:
        str_len = len(encodedText)
        print(str_len)
        m = rows
        n = str_len // m
        # mat = [[' '] * n for i in range(m)]
        mat = []
        idx = 0
        for i in range(m):
            row = []
            for j in range(n):
                row.append(encodedText[idx])
                idx += 1
            mat.append(row)
        print(mat)
        res_arr = []
        def valid(i, j):
            return i >= 0 and i < m and j >= 0 and j < n
        def read(i, j, arr):
            arr.append(mat[i][j])
            next_i = i+1
            next_j = j+1
            if valid(next_i, next_j):
                read(next_i, next_j, arr)
        for j in range(n):
            read(0, j, res_arr)
            
        print(res_arr)
        
        res_str1 = "".join(res_arr)
        res_str2 = res_str1.rstrip()
        
        return res_str2
    def decodeCiphertext(self, encodedText: str, rows: int) -> str:
        str_len = len(encodedText)
        print(str_len)
        m = rows
        n = str_len // m
        def read(i, remain, arr):
            if remain > 0:
                print(encodedText[i])
                arr.append(encodedText[i])
                next_i = i + n + 1
                read(next_i, remain - 1, arr)
        remain = m
        res_arr = []
        for i in range(n):
            if i <= n - m:
                read(i, remain, res_arr)
            else:
                new_remain = n - i
                read(i, new_remain, res_arr)
        res_str1 = "".join(res_arr)
        res_str2 = res_str1.rstrip()
        return res_str2
        