console.log('----------------------------Task:508 "Array Deep Count"----------------------------')
function deepCount(arr){
  let sum = arr.length;
  for(let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      sum += deepCount(arr[i])
    }
  }
  return sum
}
console.log(deepCount([1, 2, [3, 4, [5]]]))

console.log('----------------------------Task:509 "Sum The Tree"----------------------------')
var simpleNode = {
  value: 10, 
  left: {
    value: 1,
    left: null, 
    right: null
  }, 
  right: {
    value: 2, 
    left: null, 
    right: null
  }
};

function sumTheTreeValues(root){
  let sum = root.value
  if(root.left !== null){
    sum += sumTheTreeValues(root.left)
  }
  if(root.right !== null){
    sum += sumTheTreeValues(root.right)
  }
  return sum
}

console.log(sumTheTreeValues(simpleNode))


console.log('----------------------------Task:512 "Object depth"----------------------------')
function depth(obj, d = 0, arr = []) {
  if(typeof obj !== 'object' || obj === null){
    return 0
  }
  if(typeof obj === 'object' && obj.length != 0 && Object.keys(obj).length != 0){
    if(!Array.isArray(obj)){
      d++
      arr.push(d)
    }
    for(let el in obj){
      depth(obj[el], d, arr)
    }
  }
  return Math.max(...arr, 0)
}

console.log(depth(['a', ['b', {c : 22}]]))

console.log('----------------------------Task:513 "Tree Depth"----------------------------')
function recordDepth(tree, depth = 0) {
  if(typeof tree !== 'object' || tree === null){
    return null
  }
  if(typeof tree === 'object' && tree.length == 0 && Object.keys(tree).length == 0){
    return null
  }
  tree.depth = depth
  for(let val in tree){
    recordDepth(tree[val], depth + 1)
  }
  return tree
}

console.log(recordDepth(null))