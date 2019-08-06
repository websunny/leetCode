/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    var dict = {}
    var len =nums.length
    var i,j
    for (i=0;i<len;i++){
      dict[nums[i]]=i
    }
    for(j=0;j<len;j++){
      if(dict[target-nums[j]] && dict[target-nums[j]]!==j){
        return [dict[target-nums[j]],j]
      }
    }
};