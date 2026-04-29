// Last updated: 4/29/2026, 10:37:05 AM
class Solution {
    public int[] twoSum(int[] nums, int target) {
    //     for(int i = 0; i < nums.length - 1; i++) {
    //         for(int j = i+1; j < nums.length; j++) {
    //             if (nums[i] + nums[j] == target) {
    //                 int[] ret = {i, j};
    //                 return  ret;
    //             }
    //         }
    //     }
    //     throw new IllegalArgumentException("No two sum solution");
        
        // Map<Integer, Integer> map = new HashMap<>();
        // for (int i = 0; i < nums.length; i++) {
        //     map.put(nums[i], i);
        // }
        // for (int i = 0; i < nums.length; i++) {
        //     int complement = target - nums[i];
        //     if (map.containsKey(complement) && map.get(complement) != i) {
        //         return new int[] { i, map.get(complement) };
        //     }
        // }    
        // throw new IllegalArgumentException("No two sum solution");
        
        Map<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] {i, map.get(complement)};
            }
            map.put(nums[i], i);
        }
        throw new IllegalArgumentException("no two sum solution");
    }
}