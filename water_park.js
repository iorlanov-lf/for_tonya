

function calcWaterVolume(blockHeights) {
  console.log(blockHeights)

  var waterVolume = 0;

  // iterate over inner blocks
  for(var i=1; i<blockHeights.length-1; i++) {
    var leftMaxHight = 0
    var rightMaxHight = 0

    // find max height on the left of the block i
    for(var j=0; j<i; j++) {
      if(blockHeights[j] > leftMaxHight) {
        leftMaxHight = blockHeights[j]
      }
    } 

    // find max height on the right of the block i
    for(var j=i+1; j<blockHeights.length; j++) {
      if(blockHeights[j] > rightMaxHight) {
        rightMaxHight = blockHeights[j]
      }
    }
    
    // calculate the water we can fill the block i with
    var lowestMaxHeight = Math.min(leftMaxHight, rightMaxHight)
    var waterToAdd = 0
    if(blockHeights[i] < lowestMaxHeight) {
      waterToAdd = lowestMaxHeight - blockHeights[i]
    }
    waterVolume += waterToAdd

    console.log(`${i} ${leftMaxHight} ${rightMaxHight} +${waterToAdd}`)
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
