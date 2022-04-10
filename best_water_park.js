
/* 
A  solution of the problem at 
https://leetcode.com/problems/trapping-rain-water/
This version avoids iterating over all blocks on the left to find the left maximum.
This version also avoids iterating over all blocks on the right if possible.
*/

function calcWaterVolume(blockHeights) {
  console.log(blockHeights)

  var waterVolume = 0;
  var leftMaxHeight = 0;
  var rightMaxHeight = 0;
  var rightMaxHeightIdx = 0;

  // iterate over inner blocks
  for(var i=1; i<blockHeights.length-1; i++) {
    
    // find max height on the left of the block i
    if(blockHeights[i-1] > leftMaxHeight) {
      leftMaxHeight = blockHeights[i-1]
    }

    // find max height on the right of the block i
    if(i > rightMaxHeightIdx) {
      var rightMaxHeight = 0;
      for(var j=i+1; j<blockHeights.length; j++) {
        if(blockHeights[j] >= rightMaxHeight) {
          rightMaxHeight = blockHeights[j]
          rightMaxHeightIdx = j;
        }
      }
    }
    
    // calculate the water we can fill the block i with
    var lowestMaxHeight = Math.min(leftMaxHeight, rightMaxHeight)
    var waterToAdd = 0
    if(blockHeights[i] < lowestMaxHeight) {
      waterToAdd = lowestMaxHeight - blockHeights[i]
    }
    waterVolume += waterToAdd

    console.log(`${i} ${leftMaxHeight} ${rightMaxHeight} +${waterToAdd}`)
  }

  return waterVolume;
}

console.log(`Water volume: ${calcWaterVolume([])}\n`)
console.log(`Water volume: ${calcWaterVolume([0])}\n`)
console.log(`Water volume: ${calcWaterVolume([0,0])}\n`)
console.log(`Water volume: ${calcWaterVolume([0,0,0])}\n`)
console.log(`Water volume: ${calcWaterVolume([1,0,0])}\n`)
console.log(`Water volume: ${calcWaterVolume([0,1,0])}\n`)
console.log(`Water volume: ${calcWaterVolume([0,0,1])}\n`)

console.log(`Water volume: ${calcWaterVolume([1,2,3])}\n`)
console.log(`Water volume: ${calcWaterVolume([3,2,1])}\n`)

console.log(`Water volume: ${calcWaterVolume([1,0,1])}\n`)
console.log(`Water volume: ${calcWaterVolume([1,0,2,1,5])}\n`)
